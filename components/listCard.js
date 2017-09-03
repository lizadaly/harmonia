const React = require('react')
import {debounce} from 'underscore'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { List } from 'windrift'
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
//      j.repaintEverything()
    }, 100)

    // Wait until we're sure everything has rendered before firing this
    window.setTimeout(this.onRender, 2000)
  }

  onComplete() {
    this.props.onAddCard(this.props.tag)
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

        this.positionTargetY(source, target)

        var foo = j.connect({
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
    return props.added && !this.props.added
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("updating " + this.props.tag)
    console.log(prevProps)
    console.log(this.props)
    this.onRender(true)
  }
  componentWillUnmount() {
    var sourceId = 'source-' + this.props.tag
    j.deleteConnectionsForElement(sourceId)
    window.removeEventListener("resize", this.reRender)
  }

  positionTargetY(source, target) {
    // Move the card down if necessary to avoid overlapping other cards;
    // TODO fix bug where this is triggered unnecessarily by elements on different sides.

    let cards = Array.from(document.getElementsByClassName('card'))
    cards.reverse()
    let targetTop = target.getBoundingClientRect().top + window.scrollY
    let targetBottom = targetTop + target.getBoundingClientRect().height

    for (let card of cards) {

      if (card.id != target.id) {
        let box = card.getBoundingClientRect()
        let cardBottom = card.getBoundingClientRect().top + window.scrollY + card.getBoundingClientRect().height
        if (cardBottom > targetTop && cardBottom < targetBottom) {
                    // Move the target down until it doesn't overlap
          target.style.top = (cardBottom + 50) + 'px'
          target.style.marginTop = 0
        }
        else {
          break
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
  forceDir: PropTypes.string
}
_ListCard.defaultProps = {
  nextUnit: "none",
  author: "main",
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
    onAddCard: actions.cardCreated
  }
)(_ListCard)

export default ListCard
