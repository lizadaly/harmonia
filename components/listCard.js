const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'
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

/* If the expansions list is one item long, double it (usually these won't change) */
class _ListCard extends React.Component {

  constructor(props) {
    super(props)
    this.onComplete = this.onComplete.bind(this)
    if (props.expansions.length === 1) {
      props.expansions.push(props.expansions[0])
    }
    this.list = <List {...props} onComplete={this.onComplete}/>
  }
  onComplete() {
    CardData[this.props.tag] = this.props.card
    this.props.onAddCard(this.props.tag)
  }
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

      for (let card of cards) {
        let box = card.getBoundingClientRect()
        if (card != source) {
          let cardBottom = card.getBoundingClientRect().top + window.scrollY + card.getBoundingClientRect().height
          if (cardBottom > targetTop && cardBottom < targetBottom) {
            // Move the target down until it doesn't overlap
            console.log(card)
            console.log(cardBottom)
            target.style.top = (cardBottom + 30) + 'px'
            target.style.marginTop = 0
          }
        }
      }
      let anchors = ["Left", "Right"]

      if (srcWidth < width / 2) {
        target.classList.add('left')
      }
      else {
        target.classList.add('right')
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
    let card = <Card text={CardData[this.props.tag]} tag={this.props.tag} />
    // Stick the element in a stupid nobr so jsPlumb doesn't get confused about the bounding box
    return <span>
      <nobr className="link-source" id={'source-' + this.props.tag}>{ this.list }</nobr>
      { card }
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
  nextUnit: null
}
const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const ListCard = connect(
  mapStateToProps,
  {
    onAddCard: actions.cardCreated
  }
)(_ListCard)

export default ListCard
