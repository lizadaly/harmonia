const React = require('react')
import {debounce} from 'underscore'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { List, showNextSection } from 'windrift'
import * as actions from '../actions'

import jsPlumb from 'jsPlumb'

var j = jsPlumb.jsPlumb
j.setContainer(document.getElementById("container"))
j.importDefaults({
  ConnectionsDetachable: false
})

const Card = ({tag, text, visible, author, forceDir}) => {
  if (visible) {
    let cls = 'card ' + author
    if (forceDir) {
      cls += ' force-' + forceDir
    }
    return <span className={cls} id={"card-" + tag}>
      { text }
    </span>
  }
  else return null
}

class _ListCard extends React.Component {

  constructor(props) {
    super(props)
    this.onComplete = this.onComplete.bind(this)
    this.onRender = this.onRender.bind(this)
    this.reRender = debounce(function () {
      this.onRender
      j.repaintEverything()
    }, 100)

    // Wait until we're sure everything has rendered before firing this
    window.setTimeout(this.onRender, 200)
  }

  onComplete() {
    this.props.onAddCard(this.props.tag)
    // Only fire this if nextSection is null; otherwise
    // this will be handled by the default section behavior
    if (this.props.nextUnit != "section" && this.props.nextUnit != "chapter") {
      this.props.onSetBookmark(0)
    }
  }

  onRender(animate=false) {
    window.requestAnimationFrame(() => {

      var sourceId = 'source-' + this.props.tag
      var targetId = 'card-' + this.props.tag
      var source = document.getElementById(sourceId)
      var target = document.getElementById(targetId)

      j.deleteConnectionsForElement(sourceId)

      // If we're going to target the parent node, go up two steps to get the usual block-level parent.
      if (this.props.targetParent) {

        target.classList.add('inline')
        source.parentNode.parentNode.appendChild(target)
      }

      if (source && target) { // Gross
//        console.log("Updating ", this.props.tag)

        var pos = this.positionTargetX(source)
        var anchors

        if (this.props.forceDir) {
          pos = this.props.forceDir
        }

        target.classList.remove('left', 'right', 'center')

        switch (pos) {

          case 'right':
            target.classList.add('right')
            anchors = ["Right", "Left"]
            break

          case 'left':
            target.classList.add('left')
            anchors = ["Left", "Right"]
            break

          case 'down':
            target.classList.add('left')
            anchors = ["Left", "Top"]
            break

          case 'center-down':
            anchors = ["Left", "Left"]
            target.classList.add('center')
            break
        }

        this.positionCardY(target)

        j.connect({
          // Target/source swapped for animation
          target: sourceId,
          source: targetId,
          cssClass: animate ? "drawing" : "",
          endpoint: "Blank",
          anchor: ["Perimeter", { shape:"Ellipse" } ]
        })
      }
      else {
        j.deleteConnectionsForElement(sourceId)
      }
    })
  }


  componentDidMount() {
    window.addEventListener('resize', this.reRender)
  }
  shouldComponentUpdate(props) {
    var shouldUpdate = props.added != this.props.added
    return shouldUpdate
  }
  componentDidUpdate(prevProps, prevState) {
    this.onRender(true)
  }
  componentWillUnmount() {
    var sourceId = 'source-' + this.props.tag
    j.deleteConnectionsForElement(sourceId)
    window.removeEventListener("resize", this.reRender)
  }

  positionCardY(card) {
    // Move the card down if necessary to avoid overlapping other cards;
    let cardTop = card.getBoundingClientRect().top + window.scrollY
    let cardBottom = cardTop + card.getBoundingClientRect().height
    let cardSide = undefined
    if (card.classList.contains("right")) {
      cardSide = "right"
    }
    else if (card.classList.contains("left")) {
      cardSide = "left"
    }
    // If this is a special case card, don't eval other positions
    if (!cardSide) {
      return
    }

    var cards = Array.from(document.getElementsByClassName('card'))
    cards = cards.filter((c) => {
      if (c.classList.contains(cardSide) && c.id != card.id) {
        return c
      }
    })
    cards.reverse()

    for (var i=0;i<cards.length;i++) {
      let test = cards[i]

      if (test.id != card.id) {
        let box = test.getBoundingClientRect()
        let testTop = test.getBoundingClientRect().top + window.scrollY
        let testBottom = testTop + test.getBoundingClientRect().height

//        console.log("comparing", card.id, "on side", cardSide, parseInt(cardTop), "/", parseInt(cardBottom), test.id, "at top/bottom", parseInt(testTop), "/", parseInt(testBottom))
        if (cardBottom > testTop && (cardBottom <= testBottom || cardTop <= testBottom)) {
          // Move the target down until it doesn't overlap
//          console.log("moving due to collision with", test.id, "to", testBottom + 50)
          card.style.top = (testBottom + 50) + 'px'
          card.style.marginTop = 0
        }
      }
    }
  }

  positionTargetX(source) {
    // Position the card in the right or left margin relative to the source link and the current viewport.
    // Returns the left/right position of the card
    let width = document.documentElement.clientWidth
    let srcWidth = source.getBoundingClientRect().right

    if (srcWidth < width / 2) {
      return 'left'
    }
    else {
      return 'right'
    }
  }

  render() {
    // Stick the element in a stupid nobr so jsPlumb doesn't get confused about the bounding box
    return <span>
      <nobr className="link-source" id={'source-' + this.props.tag}>
        <List {...this.props} expansions={[[this.props.expansions[0]], [this.props.expansions[0]]]} onComplete={this.onComplete} />
      </nobr>
      <Card text={this.props.card}
        tag={this.props.tag}
        visible={this.props.added}
        author={this.props.author}
        forceDir={this.props.forceDir}/>
    </span>
  }
}
_ListCard.propTypes = {
  nextUnit: PropTypes.oneOf(['chapter', 'section', 'none']),
  tag: PropTypes.string.isRequired,
  expansions: PropTypes.array.isRequired,
  config: PropTypes.object,
  currentExpansion: PropTypes.number,
  conjunction: PropTypes.string,
  separator: PropTypes.string,
  persistLast: PropTypes.bool,
  onLoad: PropTypes.func,
  // Game-specific
  author: PropTypes.string,
  forceDir: PropTypes.string,
  alwaysEval: PropTypes.bool
}
_ListCard.defaultProps = {
  nextUnit: "none",
  author: "main",
  alwaysEval: false
}

const mapStateToProps = (state, ownProps, added=false) => {
  if (state.inventory.present.hasOwnProperty(ownProps.tag)) {
    added = true
  }
  return {
    added: added
  }
}

const ListCard = connect(
  mapStateToProps,
  {
    onAddCard: actions.cardCreated,
    onSetBookmark: showNextSection
  }
)(_ListCard)

export default ListCard
