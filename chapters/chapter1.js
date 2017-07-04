const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'
import * as actions from '../actions'
import ListCard from '../components/listCard'



export default ({currentSection, inventory, cards}) => {
  const sections = [
    <section>
      <h2>November 4, 1980</h2>
      <p>
        I was late to my first class, for the job that I'd needed so badly I'd driven
        a thousand miles from home.
      </p>
      <p>
        I dropped my armful of notes on the desk, some of which slid off and fanned
        out onto the floor. I ignored them. Thirty young women seated in neat
        rows stared back at me. I brushed my hair out of my face. I was sweating
        even though I'd jogged across campus  <ListCard expansions={["without a coat"]}
          tag="c1-coat"
          card={<span>I didn't own a coat.</span>} />.
      </p>
      <p>"Welcome to 19th Century Utopian Literature," I said.</p>
      <p>"Can't hear you," someone in the back yelled.</p>
      <p>I repeated myself, a little more confidently. I'd never taught to a room
        full of other women before. Their <ListCard expansions={["undivided attention"]}
          tag="c1-women"
          card={<span>I loved my students at Miami Dade Community College, but let's just
          say their committment to the material was variable.</span>} /> was disconcerting.</p>

      <p>
        I <List expansions={[["moved to continue my introduction", "a woman was raising her hand"],
        ["moved to continue my introduction", "a woman was raising her hand"]]}
          conjunction="but"
            tag="c1_question" />.

      </p>
    </section>,
    <section>
      <Map from={inventory.c1_question}
        to={{
          introduction: <p>I held up my hand, asking her to hold the question.</p>,
          hand: <div>
            <p>Flustered, I called on her and asked her name.</p>
            <p>"Charlotte," she said. She was impeccably dressed, her hair perfect. She was
              probably featured on the cover of the school brochure. "What happened to Professor Lynn?"
            </p>
            <p>Ah. "I'm afraid <ListCard expansions={["I can't talk about that right now."]}
              tag="c1-question2"
              card={<span>Because I had no idea.</span>} />. I'm substituting for him until further notice."
            </p>
          </div>
        }}
      />
      <p>
        "Utopian Literature," I began{inventory.c1_question === "a woman was raising her hand" ? " again" : ""}.
        "The term was first used as the title of Thomas More's 1561 work,
        <i>Utopia</i>." Another <List expansions={[["hand shot up"], ["hand shot up, this time in the front row"]]}
          tag="c1_question3" />.
      </p>
    </section>,
    <section>
      <p>I could see this was going to be one of those classes. "Yes?" The earnest student in a peasant dress
        told me I had the wrong date. "Right, sorry, <i>Utopia</i> was 1516. Did Professor Lynn already cover this?"</p>
      <p>A sea of perfectly permed heads nodded. I looked back down at the notes I'd jotted when I'd gotten
      the call for an emergency subtitute position.</p>
      <blockquote>
        <ol>
          <li className={inventory.c1_correction ? "strikethrough" : ""}>Introduction to Utopia Fiction</li>
          <li className={inventory.c1_correction2 ? "strikethrough" : ""}>British fiction, 1820-1860</li>
          <li>American fiction, 1830-1900</li>
          <li>Early science fiction</li>
          <li>Influences</li>
        </ol>
      </blockquote>
      <p>"Okay, thanks, <List expansions={[["I'll make a note"], ["I'll make a note of where we left off"]]}
        tag="c1_correction" />."</p>
    </section>,
    <section>
      <p>"Did he cover <List expansions={[["British fiction"], ["British fiction"]]}
        tag="c1_correction2" /> as well?" {inventory.c1_correction2 ? "More nods." : ""}</p>
      </section>,
    <section>
      <p>"Right, so, American Utopian fiction."</p>
    </section>,
  <section>
    <h2>February 3, 1980</h2>

    <p>It was nearly midnight when I finally found the exit off the highway. The snow had
      gotten worse—I'd almost missed the sign for the college—and the windshield wipers were
      flapping so aggressively I thought they'd fly off. I've driven in some pretty torrential
      rainstorms, even hurricanes, down in Miami. Blinding snow in a black New England night
      was far worse.
    </p>
    <p>
      The road to campus is barely paved, and on this night it hadn't been plowed. My
      old beater car was fishtailing everywhere and I nearly sideswiped a
      couple trees.
      I pulled up to the first real building I saw, yanked on
      the parking brake, and leaned back to take my <ListCard
        expansions={["first deep breath."]}
        tag="c1-notebook"
        card={<span>
          I thought an 18-hour drive sounded like an adventure, but nobody
          seemed to like meeting a woman traveling alone. The worst was
          the creepy Maryland motel. I needed to sleep but I couldn't. I kept
          imagining the owner was going to slip in my room with a master key.

        </span>
        }
                                                    />
    </p>
  </section>,
  <section>
    <p>
      I wanted to be here hours ago, enough time to check in with the dean's office
      and at least figure out where I was supposed to be living. It was midnight now,
      and St. Isidore College
      was dark and sleepy.
    </p>
    <p>
      I knew if I just kept sitting there I'd slowly turn to ice, so
      I grabbed this notebook, my purse, and my winter coat (which I noticed still had the tags on it).
      I reached for the <List expansions={[["door handle"],
      ["door handle and stepped out into the lot, my feet crunching on snow for the first time in my life"]]} tag="c1-carhandle" />.
    </p>
  </section>,

  <section>
    <p>
      By dumb luck, I'd stopped in front of the English literature building—my department. Even better,&nbsp;
      <List
        expansions={[["the door was unlocked"], ["the door was unlocked and no alarms rang as I stepped into the building"]]}
        tag="c1-doorknob"/>.
    </p>
  </section>,
  <section>
    <p>The college looked like I expected: old money New England, wood-panelled walls, rows of office doors embossed with the the names of
    professors and adjuncts. I recognized a few names from papers, but I was hunting for one door in particular—</p>
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
      His door was closed but not locked, and curling up under the doorframe
      was <List expansions={[["a glowing light"], ["an unnatural glow, a color out of nature"]]}
        tag="c1-glow"
          />.

    </p>
  </section>,
  <section>
    <p>
      I opened the door.  Lynn's office was small, made smaller by the absolute riot of stacked papers, notes, and library books.
      It had the feel of having been abandoned by its owner.
    </p>
    <p>
      Oddly, one desk was devoid of any paper at all and instead featured an unusual-looking <ListCard expansions={[["video terminal"], ["advanced video terminal"]]}
        tag="c1_tty"
        nextUnit={null}
        card={<span>
          I was familiar with teletypes and video terminals from my trips to the University of Miami library, where a friend helped
          me navigate their newly computerized card catalog. She remarked that I got the hang of it
          faster than anybody she'd taught. This machine was different, though.
        </span>}
                                                                                             />.
      It had a <List expansions={[["brightly lit screen"], ["brightly lit screen"]]} tag="c1_screen" />
      and instead of a keyboard, there was a <List expansions={[["small box"], ["small box topped with a round button"]]}
        tag="c1_mouse"
        nextUnit={null} />, tethered to a cord
      disappearing into the back of the machine.
    </p>
  </section>,
  <section>
    <Map from={inventory.c1_mouse} to={{
      "_undefined": <p>It was, at first, just a blank amber screen.</p>,
      "_any": <div>
        <p>Curious, I picked up the box; there was a wheel underneath. I turned it back over in my hand and
          pressed the button. The
          computer emitted a loud beep (I admit I jumped).
          The display wiped slowly from top to bottom and
          a <List expansions={[["complex interface"], ["complex interface"]]}
              tag="c1-display" nextUnit="chapter" /> appeared in its place:</p>
      </div>

    }}
  />
  </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
