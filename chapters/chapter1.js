const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'
import * as actions from '../actions'

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
    this.list = <List {...props} onComplete={this.onComplete}/>
  }
  onComplete() {
    CardData[this.props.tag] = this.props.card
    this.props.onAddCard(this.props.tag)
  }
  render() {
    var card = <Card text={CardData[this.props.tag]} tag={this.props.tag} />

    return <span>
      { this.list }
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


export default ({currentSection, inventory, cards}) => {
  const sections = [
  <section>
    <h3>February, 1970</h3>
    <p>It's nearly midnight when you finally find the exit off the highway. The snow has
      gotten worse—you almost missed the sign for the college—and the windshield wipers are
      now flapping so aggressively they may fly off. You were relieved when the heater
      started working just over the Vermont border, but lately the blower's been stuck on
      full and you're melting. To keep awake you cracked open the window and
      your lap is covered in snowflakes.
    </p>
    <p>
      The road to campus is barely paved and not at all plowed. Your
      ailing VW is fishtailing everywhere, and you nearly sideswipe a
      couple trees and what looked like a gigantic pockmarked boulder. You pull up
      to the first building you find and stop, yank the parking break, and
      instinctively <ListCard
        expansions={[["reach for your notebook"], ["reach for your notebook and jot down your jumbled thoughts"]]}
        tag="c1-notebook"
        card={<span>An 18-hour drive, with one break for a fitful long nap in a creepy Maryland motel.
            The engine is off but the car's still ticking and shuddering. What are the odds it'll even
            start again?
            It's probably done for the day, not that you can blame it.
          </span>
        }
      />.
    </p>
  </section>,
  <section>
    <p>
      You thought you'd be here hours ago, enough time to check in with the dean's office
      and find out where you're supposed to be living. But St. Isidore College is dark and sleepy.
      Few lights are visible; the student dorms must be elsewhere.
      </p>
    <p>
      If you just keep sitting here you're going to slowly turn to ice.
      You grab your notebook, your purse, and your winter coat. You notice it still has the tags
      on it. You reach for the <List expansions={[["door handle"],
      ["door handle and step out into the lot, your feet crunching on the snow for the first time in your life"]]} tag="c1-carhandle" />.
    </p>
  </section>,

  <section>
    <p>
      You're in front of a squat brick building. There's an imposing wooden door which is marked by a <ListCard
        expansions={[["plaque"], ['plaque which reads, "English Department"'], ['plaque which reads, "English Department"']]}
        tag="c1-plaque"
        card={`You prefer "literature" to "English", but early career Marxist historians take what they can get.`}

      /> and lit by a yellowish bulb.
    </p>
  </section>,
  <section>
    <p>
      Finally, some luck: it's your department. Even better,&nbsp;
      <List
        expansions={[["the door is unlocked"], ["the door is unlocked and no alarms ring as you step into the building"]]}
        tag="c1-doorknob"/>.
    </p>
  </section>,
  <section>
    <p>It's just as you expected: old money New England, wood-panelled walls, rows of office doors embossed with the the names of
      professors and adjuncts. You recognize a few, from papers, but you're looking for one in particular—</p>
    <p>
      Nearly at the end of the row, Professor Jeffrey Lynn, 19th Century American Studies, foremost scholar
      in turn of the century mysticism.
    </p>
    <p>
      You have mixed feelings about the topic, even though you drove a thousand miles to be here to teach it.
      At home, in Miami, it all seemed so dusty and academic. You're a Marxist feminist radical working to
      surface the hidden history of the oppressed; the pseudoscientific ramblings of some bored Puritans
      is the furthest thing from your research.
    </p>
    <p>
      But first, you're not going to liberate anyone if you can't publish. Teaching remedial American Lit at
      a community college is noble, and maybe you should feel a little bad about giving it up, but dammit,
      you worked hard and you deserve to be taken seriously.
    </p>
    <p>
      And second, well, being up here, the coldest you've ever been, in this dark and lonely old
      building, ideas about the permeability of the spirit world don't seem so crazy. And there's the matter
      of Professor Lynn's sudden disappearance.
    </p>
    <p>
      Anyway, while his research might not inspire you, his course you've been hired to teach is right
      in your wheelhouse.
    </p>

  </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
