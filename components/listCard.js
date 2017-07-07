const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { List } from 'windrift'
import * as actions from '../actions'

import jsPlumb from 'jsPlumb'

var j = jsPlumb.jsPlumb
j.setContainer(document.getElementById("container"))

var CardData = {}

const Card = ({tag, text}) => {
  if (text) {
    return <span className="card" id={"card-" + tag}>
      { text }
    </span>
  }
  else return null
}

class _ListCard extends React.Component {

  constructor(props) {
    super(props)
    this.onComplete = this.onComplete.bind(this)
    this.expansions = props.expansions
    // If the expansions list is one item long, double it (usually these won't change)
    if (props.expansions.length === 1) {
      this.expansions.push(props.expansions[0])
    }
  }
  onComplete() {
    CardData[this.props.tag] = this.props.card
    this.props.onAddCard(this.props.tag)
  }

  // TODO plumb lines get left behind when going back
  // TODO call a re-render on the SVG after a window resize event
  componentDidUpdate() {
    let sourceId = 'source-' + this.props.tag
    let targetId = 'card-' + this.props.tag
    let source = document.getElementById(sourceId)
    let target = document.getElementById(targetId)

    if (source && target) {
      let width = document.documentElement.clientWidth
      let srcWidth = source.getBoundingClientRect().right

      // Check whether the card overlaps and if so, move it down
      let cards = document.getElementsByClassName('card')
      let targetTop = target.getBoundingClientRect().top + window.scrollY
      let targetBottom = targetTop + target.getBoundingClientRect().height

      console.log("Evaling target ", target)
      for (let card of cards) {
        console.log(card.id, target.id)

        if (card.id != target.id) {
          console.log("Checking card " ,card)
          let box = card.getBoundingClientRect()
          let cardBottom = card.getBoundingClientRect().top + window.scrollY + card.getBoundingClientRect().height
          if (cardBottom > targetTop && cardBottom < targetBottom) {
            // Move the target down until it doesn't overlap
            target.style.top = (cardBottom + 30) + 'px'
            target.style.marginTop = 0
          }
          // Either way, probably safe to break here
          break
        }
      }
      let anchors = ["Left", "Right"]

      if (srcWidth < width / 2) {
        target.classList.remove('right') // Possible this moved after a render event
        target.classList.add('left')
      }
      else {
        target.classList.add('right')
        target.classList.remove('left')
        anchors = ["Right", "Left"]
      }
      j.connect({
        source: sourceId,
        target: targetId,
        endpoint: "Blank",
        anchors: anchors
      })
    }
  }
  render() {
    // Stick the element in a stupid nobr so jsPlumb doesn't get confused about the bounding box
    return <span>
      <nobr className="link-source" id={'source-' + this.props.tag}>
        <List {...this.props} expansions={this.expansions} onComplete={this.onComplete} />
      </nobr>
      <Card text={CardData[this.props.tag]} tag={this.props.tag} />
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
  persistLast: PropTypes.bool,
  onLoad: PropTypes.func
}
_ListCard.defaultProps = {
  nextUnit: "none"
}
const mapStateToProps = (state, ownProps, added=undefined) => {
  if (state.cards.hasOwnProperty(ownProps.tag)) {
    added = state.cards[ownProps.tag]
  }
  return {
    added
  }
}

const ListCard = connect(
  mapStateToProps,
  {
    onAddCard: actions.cardCreated
  }
)(_ListCard)

export default ListCard
