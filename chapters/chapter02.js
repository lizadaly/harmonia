const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'
import * as actions from '../actions'
import ListCard from '../components/listCard'
import Reader  from '../components/reader'
import { docs } from '../docs'

export default ({currentSection, inventory, cards}) => {
  const sections = [
  <section>
    <heading>
      <h2>November 4, 1990</h2>
      <blockquote>
        Their educational system was a peculiar one, and, as it was the chief interest of the country,
        I shall describe it before proceeding farther with this narrative.<br/>
        - <i>Mizora: A Prophesy</i>, Mary E. Bradley (1889)
      </blockquote>
    </heading>

    <p>
      I'd driven hundreds of icy miles for this job and now I was late to my first class.
    </p>
    <p>
      Thirty young women, seated in neat
      rows, stared back at me.
      I dropped my armful of papers on the lecturn and most of them slid off and fanned
      out onto the floor. I brushed my hair out of my face. I was sweating
      even though I'd jogged across campus  <ListCard expansions={["without a coat"]}
        tag="c1-coat"
        card={<span>I was so tired last night I'd left it in my car.</span>} />.
    </p>
    <p>"Welcome to <i>Nineteenth Century Utopian Literature</i>," I began.</p>
    <p>"Can't hear you," said someone in the back.</p>
    <p>"Right, sorry." I coughed. "Welcome to <i>Nineteenth Century Utopian Literature</i>.
      My name is <ListCard expansions={["Abby Fuller"]}
        tag="c1-name"
        card={<span>Not <i>Professor Fuller</i> at this point in my career.</span>} />."
      I'd never taught college students before, nor an all-women class.
    Their undivided attention was disconcerting.</p>
    <p>

      I had no idea what material Lynn had already covered or even <ListCard expansions={["how many classes"]}
        tag="c3-taught"
        card={<span>I'd need to ask the dean about that when I saw her.</span>} />  he'd held before he disappeared.
      A student took advantage of my halting start and <List expansions={[["raised her hand"], ["raised her hand. I called on her and asked her name"]]}
                                                         tag="c3_called" />.
    </p>
  </section>,
  <section>
    <p>"Charlotte," she said. She was impeccably dressed, her hair perfect. She was
      probably featured on the cover of the school brochure. "What happened to Professor Lynn?"
    </p>
    <p>"I'm substituting for him until further notice.
      I'm afraid I can't <ListCard expansions={["disclose further details"]}
        tag="c1-question2"
        card={<span>Since the dean hadn't told me and I had been too grateful for the job to ask.</span>} />. "
    </p>
    <p>
      "So, Utopian Literature," I began again.
      "The term was first used as the title of Thomas More's 1561 work, <i>Utopia</i>."
      Another <List expansions={[["hand shot up"], ["hand shot up"]]}
        tag="c1_question3" />.
    </p>
  </section>,
  <section>
    <p>I could see this was going to be one of those classes. "Yes?"</p>
    <p>A student in the very front row: "Professor Fuller,  I'm Lillian Horace. It says in my
      notes that <i>Utopia</i> was actually published in 1516."</p>
    <p>"Yes, fine, sorry." I probably looked flustered. "Did Professor Lynn already cover this material?"</p>
    <p>Many heads nodded. I looked back down at the syllabus I'd thrown together
      this morning:</p>
    <blockquote>
      <ol>
        <li className={inventory.c1_correction ? "strikethrough" : ""}>Early works and influences</li>
        <li className={inventory.c1_correction2 ? "strikethrough" : ""}>Utopian communities</li>
        <li>British and American works, 1830-1900</li>
        <li>Early sci-fi</li>
        <li>Later influences</li>
      </ol>
    </blockquote>
    <p>"Okay, thanks, <List expansions={[["I'll make a note"], ["I'll make a note"]]}
      tag="c1_correction" />."</p>
  </section>,
  <section>
    <p>I <ListCard expansions={["struck a line"]}
      tag="c1-line"
      card={<span>Say what you will about me, but I always have a pen.</span>} /> through
    the first lecture. </p>
    <p>"Did he cover <List expansions={[["intentional communities", "would you like me to go over that"], ["intentional communities"]]}
      conjunction="or" tag="c1_correction2" /> as well?" {inventory.c1_correction2 === "intentional communities" ? "More nods." : ""}</p>
    </section>,
  <section>
    <Map from={inventory.c1_correction2}
      to={{
        communities: <div>
          <p>"We talked about the Shakers and the other religious colonies," the girl named Lillian said, "and we were supposed to
             cover  <ListCard expansions={["Brook Farm"]}
              tag="c2_brook"
              card={<span>A Transcendalist community located just outside of Boston, which was moderately successful until
              a fire destroyed their central meeting hall and bankrupted the village.</span>} /> and the pre-Blithedale community next."</p>
          <p>"The who?"</p>
          <p>"Blithedale College was founded on the grounds of an old utopian colony."</p>
          <p>"They called themselves the Harmonists," Charlotte added.</p>
          <p>"Huh," I said. "I did <ListCard expansions={["not know that"]} tag="c3_idea"
            card={<span>So much for being the voice of authority.</span>} />."
          </p>
        </div>,
        that: <div>
          <p>The class shook their heads, so I struck that off the list too and adopted my best
          professorial voice:</p>
          <p>
            "Intentional communities were deliberate experiments to build the so-called perfect society.
            They began in the US in the early 1800s. Some were religious, but many were secular and even
            proto-Communist. Many of the more successful ones, like the Shakers,
            got their start here in New England—"
          </p>
          <p>"You mean like Blithedale?" the girl named Lillian asked.</p>
          <p>"Hmm?"</p>
          <p>"Blithedale College was founded on the grounds of an old utopian colony."</p>
          <p>"They called themselves the Harmonists," Charlotte added.</p>
          <p>"Huh," I said. "I did <ListCard expansions={["not know that"]} tag="c3_idea"
            card={<span>So much for being the voice of authority.</span>} />."
          </p>

        </div>
      }}
    />
    <p>
      Lillian again: "We were supposed to start on Bellamy this week." She paused. "I did the reading already?"
    </p>
    <p>"Excellent. Could you summarize the story for us?"</p>
    <p>
      She looked pleased. "<i>Looking Backward</i> by Edward Bellamy tells the story of a Boston man who <ListCard
        expansions={["falls into a deep sleep"]}
        tag="c2-hole"
        card={<span>Heroes in utopian novels just fall into holes or
        deep sleeps and then the plot begins. The 19th century wasn't big on exposition.</span>} /> in 1887 and awakens
      in the year 2000. Most of the novel is a dialogue between the time-traveler and the future Bostonians who find him,
      outlining the author's ideas about a more just society."
    </p>
    <p>
      She paused, looking for affirmation. I smiled and told her to continue. After that rocky start,
      the class went pretty well. Lillian even stayed after class to welcome me to the college.
      I started to think this gig was going to be <ListCard
        expansions={["okay."]}
        forceDir="inline-down"
        tag="c3-okay" card={<span>It wasn't.</span>}
                                                    nextUnit="section" />
    </p>
  </section>,
  <section>
    <heading>
      <h2  style={{marginTop: '5rem'}}>* * * </h2>
      <blockquote>
        I was filled with astonishment at women who, qualified by nature and fortune to have the world almost
        at their command, chose to seclude themselves from it and make a
        new one for themselves. <br/>
        —<i>Millennium Hall</i>, Sarah Scott (1762)
      </blockquote>
    </heading>
    <p>
      On the night of my arrival the campus had seemed labrynthine
      and unwelcoming. In daylight it was quite pleasant, but still unusual.
    </p>
    <p>
      It was laid out along a long stepped slope into a valley,
      with a few narrow
      paved roads running up and down the length. Gravel paths and stone steps
      switched through the buildings. You could stand almost anywhere and look
      down into the valley, but for the most part all you saw was more trees and
      a few chimneys and steeples poking above the canopy.
    </p>
    <p>
      The largest area of level ground was a grassy quadrangle, and many of the
      campus buildings, including my residence, faced out onto it.
      Most were ivy-covered brick, though a few small ones were made of rougher stone,
    more like old farmhouses.</p>
    <p>A clock somewhere chimed noon and students poured out of the
      buildings, <ListCard expansions={["trudging up and down"]}
        tag="c3-steps"
        card={<span>It was popular to arrange one's schedule such that each subsequent
        class was further downslope.</span>} /> the steps to their next classes.
    </p>
    <p>
      I drifted into the quad, which was delineated at each corner by low wooden posts.
      Footpaths through the grass all veered
      around a central clearing, a sunken circle of steps around a curious stone bench:
    </p>
    <figure>
      <img src="images/meteorite.jpg" />
      <figcaption>I sketched this a few days later, when the importance of the
        the <ListCard tag="c3_astro1a"
          expansions={["astrolith"]}
          card={<span>You'll find out what it means soon enough.
            <Map from={inventory.c3_plaque}
              to={{steps: <span><br/>(Told you.)</span>}} /></span>}
            />,
        became clear.
      </figcaption>
    </figure>

    <p>
      It was a rectangular boulder, a couple meters square and one meter tall. There were bumps and depressions
      across its surface which had been smoothed by age. The top was largely flat, inviting one to sit.
      The earth had been dug out around it in a
      circular depression, with concentric rings of steps, like a tiny Greek ampitheater. I stooped to read
      a <List expansions={[["small plaque"], ["small plaque"]]} tag="c3_plaque" />  embedded in one of the steps.
    </p>
  </section>,
<section>
  <blockquote className="sign">
    <h4>THE "ASTROLITH"</h4>
    <p>
      This very large ataxite meteorite formed the centerpiece of the Harmonist community,
      who christened it "The Astrolith" and believed it imbued their village with spirtual vitality.
    </p>
    <p>It was originally enclosed by the so-called Phalanstery,
      a large communal hall. The four posts around the quadrangle mark the outline of the original construction.
      The hall's destruction by fire in 1899 precipitated the end of the community; the stone Astrolith was undamaged.
    </p>
    <p>
      The circular seating was added in 1968 by the gift of an anonymous donor.
      Its weight is estimated at 30 tons, though it has never been fully excavated.
    </p>
  </blockquote>
  <p>
    Beneath that, a typewritten addendum was tucked into a weathered plastic sleeve:
  </p>
  <blockquote className="typewritten">
    PLEASE NOTE:
    As part of the Science Center expansion, the Astrolith will be removed to the Museum of Science in Boston.
    We apologize for any inconvenience.
  </blockquote>
  <p>
    A trail of construction debris lead uphill to a dreary concrete building marked SCIENCE CENTER.
    One wing of the building
    looked brand new, its gray blocks gleaming but no less ugly. A backhoe was parked nearby,
    lying in wait.
  </p>
  <p>
    Downhill, a wide, paved path ran between the meteorite and the Dean's office. She was almost certainly
    expecting me to check in.
  </p>
  <p>
    Amid the students coming and going from the Science Center, I recognized the <ListCard expansions={["odd woman"]}
          tag="c2_woman"
          card={<span>I was curious about her, and also she had keys to Lynn's office and his teaching material.</span>} /> who
          had let me in the building last night.

  </p>
  <p>
    I hesitated, torn between <List expansions={[["following my curiosity", "meeting with the dean"], ["following my curiousity", "meeting with the dean"]]}
      tag="c2_direction" />.
  </p>
</section>,
<section>
  <Map from={inventory.c2_direction}
    to={{
      "curiousity": <div>
        <p>I decided I'd catch up with her under the guise of thanking her for helping me last night.</p>
        <p>The main foyer of the Science Center was a little dreary—this building seemed to date from the 60s—and the
          newly-constructed wing was still
          swathed in plastic sheeting and warning tape. The floor was covered by sheets of plain tan paper, stamped over with
          boot marks from workers.
        </p>
        <p>I didn't see the woman immediately so I followed the path of heaviest footprints down the hallway.
          Most of the new rooms looked to be
          labs and other functional spaces, with lots of cabling dangling from unpaneled ceilings. Everything
        was bright white, though still dusty and rough.</p>
        <p>The hall turned back on itself in a U-shape, towards the quad, ending in a fire-safe stairwell. The stairs
          leading up were incomplete, without handrails. The stairs leading down were crisscrossed with
          tape and "No Admittance" signs, but they looked easy enough to <List expansions={[["duck under—"], ["duck under—"]]} tag="c2_cellar" />
        </p>
      </div>,
      'dean': <div>
        <p>
          In the end I decided I'd catch up with her later. It wasn't smart to leave your boss waiting.
        </p>
        <p>
          The administration building was a grand old brick edifice, fronted with tidy columns and an oversized door.
          The entry hall was obviously designed to impress parents and donors: it was dominated by a magestic curved
          stairwell with elaborate polished banisters and railings. Directly next to the stairs, a doorway lead off
          to a brightly lit room; a freestanding brass sign read, "Current Exhibit." I leaned in and knocked on the open door.
        </p>
        <p>
          An older woman was placing some manuscripts into a glass-topped display case and didn't seem
          to hear the knock. "Excuse me,"
          I said, as quietly as possible, and she jumped. I introduced myself.
        </p>
        <p>
          "Oh hello! I'm sorry I was startled, I get so absorbed by my work sometimes.
          I'm Ella Merchant, I'm the college archivist."
        </p>
        <p>
          The exhibit room was small and square, and probably the first stop on any campus tour. It was divided up
          by rows of Victorian-style curio cases, most of which were half-filled but surrounded by boxes of material.
        </p>
        <p>
          "Thank you," I answered. "Say, do you happen
          to<List expansions={[[" know where Dean Orellana's office is—"], ["—"]]}
            tag="c3_wheres_dean"
          />"
        </p>
      </div>
    }} />

</section>,
<section>
  <Map from={inventory.c2_direction}
    to={{
      "curiosity": <div>
  <p>"Can I help you find something?" a male voice behind me asked.</p>
  <p>"Oh, sorry, I'm probably not supposed to be here am I?"</p>
  <p>
    He smiled. "Not really, but I won't tell. Are you Abby Fuller?"
  </p>
  <p>
    "I am," I said, shaking hands. He was young and I assumed at first that he was a student until I
    remembered that was kinda unlikely.
  </p>
  <p>"I'm Walter Browne, Dean Orellana's assistant." He paused. "She's looking for you and I thought it'd be better
  if you came of your own accord."</p>

  <p>"Am I in trouble already?"</p>
  <p>"It's okay. Things are a bit upside-down right now," he said, leading
    me away from the stairwell. "This wing
    should've been opened in time for the start of the school year but there was a... complication."
  </p>
  <p>
    "Oh?" I asked.
  </p>
  <p>
    "When they broke ground on the lab they found some old tunnels, like really old,
    that nobody knew about. Some of them lead to cellars that were beneath the modern basements
    of the buildings. One was even under the quad." He wrinkled his nose. "Lots of water damage,
    smelled really bad. I had to help pull out some really moldy stuff.

  </p>
  <p>"The history faculty were excited
    about it all, though. They've been using the material for an exhibit about the founding of the
    college, and before, when it was that colony."
  </p>
  <p>In a concession to the New England winter, many of the buildings were interconnected, so we walked
    from the sterile research center to the
    warm, old administrative building without going back outside. The Dean's office was off a central
    atrium with a grand winding staircase and near a door marked, "Special Exhibits."
  </p>
  <p>"I expected her sooner," I heard the Dean call out. "I don't have long."</p>
  <p>He gave me an apologetic look. "Good luck."</p>
  <p>"Thanks for the tour," I said, and <List expansions={[["went to meet my new boss"], ["went to meet my new boss"]]}
    tag="c3_dean_meet" nextUnit="chapter" />.
  </p>
</div>,
  dean: <div>
    <p>"Come here, you'll find this so interesting," she interrupted. "Do you know
    much of the history of the college?"</p>
    <p>"I've heard it was a utopian colony before it was a university?"</p>
    <p>"That's right." She retrieved a small and yellowed pamphlet from a case and
      put it in my hands. "You may have seen they're expanding the math and science building," she said.
      "The construction project has exposed a network of old tunnels that ran under many of the buildings,
      and we've been finding some wonderful artifacts.
    </p>
    <p>"Many of these cellars haven't been opened since the 1890s. It's a fascinating peek into how
      they lived at the time."
      She nodded eagerly at
      the <List expansions={[["pamphlet in my hand"], ["pamphlet in my hand, which I unfolded"]]}
        tag="c3_pamphlet"
      />.</p>
    </div>
    }} />
</section>,
<section>
  <Reader inventory={inventory} docs={[docs.paper1]} />
</section>,
<section>

  <p>
        We were interrupted by an unhappy-looking woman in the doorway. "Why are there still boxes everywhere, Ella?"
        </p>
        <p>
          The archivist apologized. "I'm sorry, Dean, I was showing—"
        </p>
        <p>The dean turned to me. "Who are you?"</p>
        <p>"I'm your new English professor," I said.</p>
        <p>"Hmm." She turned back to Ella. "Some faculty from Harvard will be here this afternoon
        for a symposium. Please have this mess cleaned up before lunch." </p>
        <p>"Yes ma'am."</p>
        <p>The dean looked at me. <List expansions={[['"Follow me."'], ['"Follow me." I did.']]}
          tag="c3_follow_dean" nextUnit="chapter"/></p>
  </section>
]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
