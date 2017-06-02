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
    <h2>February 3, 1970</h2>

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
      take your <ListCard
        expansions={[["first sigh."], ["first sigh on this long trip."]]}
        tag="c1-notebook"
        card={<span>
            I thought an 18-hour drive sounded like an adventure, but nobody
            seemed to like meeting a woman traveling alone. The worst was
            the creepy Maryland motel. I needed to sleep but I couldn't. I kept
            imagining the owner was going to slip in my room with a master key.
            <span className="note"
              style={{top: '260px', fontSize: '30px', marginLeft: '12px',
              backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
              Sticky floor. <br/>Guy stared at me too long.</span>
              <img src="images/c1-motel.jpg" />

          </span>
        }
      />
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
      ["door handle and step out into the lot, your feet crunching on snow for the first time in your life"]]} tag="c1-carhandle" />.
    </p>
  </section>,

  <section>
    <p>
      By sheer chance, it appears you've stopped in front of the English literature building—your department. Even better,&nbsp;
      <List
        expansions={[["the door is unlocked"], ["the door is unlocked and no alarms ring as you step into the building"]]}
        tag="c1-doorknob"/>.
    </p>
  </section>,
  <section>
    <p>It's just as you expected: old money New England, wood-panelled walls, rows of office doors embossed with the the names of
      professors and adjuncts. You recognize a few, from papers, but you're looking for one in particular—</p>
    <p>
      Nearly at the end of the row, Professor Jeffrey Lynn, 19th Century American Studies,&nbsp;
      <ListCard expansions={[["distinguished scholar."], ["foremost scholar in turn of the century mysticism."]]}
        nextUnit={null}
        tag="c1-scholar"
        card={<span>
            I was a self-described "Marxist feminist radical working to
            surface the hidden history of the oppressed." The pseudoscientific rambling of bored Puritans
            was the furthest thing from my work. But I knew I'd never liberate anybody if I didn't
            publish. Taking the offer for a semester replacement teaching position at an obscure but
            well-respected liberal arts college was a no-brainer, even if it meant a last-minute
            thousand-mile drive from Miami.
        </span>}
      />
    </p>
    <p>
      His door is closed but not locked, and curling up under the doorframe
      is <List expansions={[["a glowing light"], ["an unnatural glow, a color out of nature"]]}
        tag="c1-glow"
      />.

    </p>
  </section>,
  <section>
    <p>
      You open the door.
    </p>
    <p>
      Lynn's office is small, made smaller by the absolute riot of stacked papers, notes, and library books.
      A narrow path leads through
      to a desk in the center of the room. Oddly, the desk is devoid of any paper at all.
    </p>
    <p>
      On the desk is what appears to be some kind
      of <ListCard expansions={[["video terminal."], ["advanced video terminal."]]}
      tag="c1_tty"
      nextUnit={null}
      card={<span>
        I was familiar with teletypes and video terminals from my trips to the University of Miami library, where a friend helped
        me navigate their newly computerized card catalog. She remarked that I got the hang of it
        faster than anybody she'd taught. This machine was different, though.
      </span>}
    /> It has a <List expansions={[["glowing screen"], ["glowing screen"]]} tag="c1_screen" /> but seems to be
      missing a keyboard. There's a curiously <List expansions={[["fat pen"], ["fat pen"]]}
        tag="c1_pen"
        nextUnit={null}
      />, tethered to a cord
      disappearing into the back of the machine.
    </p>
  </section>,
  <section>
    <Map from={inventory.c1_pen} to={{
      "_undefined": <p>The teletypes you've used would display a few lines of uppercase text, but you just see a blank amber screen.</p>,
      "_any": <div>
        <p>You lift up the pen, which is metal and heavy in your hand. On a whim, you touch it to the video terminal screen, and the
          computer emits a loud beep. The amber screen wipes slowly from top to bottom and a <List expansions={[["complex display"], ["complex display"]]}
          tag="c1-display" nextUnit="chapter" /> appears in its place:</p>
      </div>

    }}
  />
  </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
