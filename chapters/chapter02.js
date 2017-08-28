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
      <h2>Chapter Two</h2>
      <blockquote>
        Their educational system was a peculiar one, and, as it was the chief interest of the country,
        I shall describe it before proceeding farther with this narrative.<br/>
        - <i>Mizora: A Prophesy</i>, Mary E. Bradley (1889)
      </blockquote>
    </heading>

    <p>
      I'd driven a hundred miles for this job and now I was late to my first class.
    </p>
    <p>
      Twelve young women, seated in neat
      rows, stared back at me.
      I dropped my armful of papers on the lecturn and most of them slid off and fanned
      out onto the floor. I brushed my hair out of my face.
    </p>
    <p>"Welcome to <i>Nineteenth Century Utopian Literature</i>," I began.</p>
    <p>"Can't hear you," said someone in the back.</p>
    <p>"Right, sorry." I coughed. "Welcome to <i>Nineteenth Century Utopian Literature</i>.
      My name is <ListCard expansions={["Abby Fuller"]}
        tag="c1-name"
        card={<span>Not yet <i>Doctor Fuller</i>—my thesis was at a bit of a standstill.</span>} />."
      Their undivided attention was disconcerting; I'd never taught college students solo, nor had I led an all-women class.
    </p>
    <p>
      I also had no idea what material Lynn had already covered or even <ListCard expansions={["how many classes"]}
        tag="c3-taught"
        card={<span>I'd need to ask the dean about that when I saw her.</span>} />  he'd held before he disappeared.
      A student took advantage of my halting start and <List expansions={[["raised her hand"], ["raised her hand. I called on her and asked her name"]]}
                                                         tag="c3_called" />.
    </p>
  </section>,
  <section>
    <p>"Charlotte," she said. She was impeccably dressed, her hair perfect; she was
      probably featured on the school brochure. "What happened to Professor Lynn?"
    </p>
    <p>"I'm substituting for him until further notice.
      I'm afraid I can't <ListCard expansions={["disclose further details"]}
        tag="c1-question2"
        card={<span>Since the dean hadn't told me and I had been too grateful for the job to ask.</span>} />. "
    </p>
    <p>
      "So, Utopian Literature," I began again.
      "The term was first used as the title of Thomas More's 1561 work, <i>Utopia</i>."
      Another <List expansions={[["hand went up"], ["hand went up"]]}
        tag="c1_question3" />.
    </p>
  </section>,
  <section>
    <p>I could see this was going to be one of those classes.</p>

    <p>"Hi Professor Fuller,  I'm Lillian Horace. It says in my
      notes that <i>Utopia</i> was actually published in 1516."</p>
    <p>"Yes, fine, sorry." Now I was flustered. "Did Professor Lynn already cover this material?"</p>
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
      tag="c2_pen"
      card={<span>I may not be perfect, but I always have a pen.</span>} /> through
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
          <p>"They called themselves the Futurians," Charlotte added.</p>
          <p>A third girl chimed in: "They believed in equality of the sexes."</p>
          <p>"That's why they founded a women's college," Lillian finished.</p>
          <p>"Huh," I said. "I did <ListCard expansions={["not know that"]} tag="c3_idea"
            card={<span>So much for being the voice of authority.</span>} />."
          </p>
        </div>,
        that: <div>
          <p>The class shook their heads, so I struck that off the list too and adopted my best
          professorial voice:</p>
          <p>
            "Intentional communities were deliberate experiments to build the so-called perfect society.
            They flourished in the United States in the 1800s with varying degrees of success. Many of the
            most-famous ones, including the Shakers, had settlements here in New England—"
          </p>
          <p>"You mean like Blithedale?" the girl named Lillian asked.</p>
          <p>"Hmm?"</p>
          <p>"Blithedale College was founded on the grounds of an old utopian colony."</p>
          <p>"They called themselves the Futurians," Charlotte added.</p>
          <p>A third girl chimed in: "They believed in equality of the sexes."</p>
          <p>"That's why they eventually founded a women's college," Lillian finished.</p>
          <p>"Huh," I said. "I did <ListCard expansions={["not know that"]} tag="c3_idea"
            card={<span>So much for projecting an air of authority on my first day.</span>} />."
          </p>

        </div>
      }}
    />
    <p>
      Lillian again: "We were supposed to start on Bellamy this week." She paused. "I did the reading already."
    </p>
    <p>"Excellent. Could you summarize it for us?"</p>
    <p>
      She looked pleased. "<i>Looking Backward</i> by Edward Bellamy tells the story of a Boston man who <ListCard
        expansions={["falls into a deep sleep"]}
        tag="c2-hole"
        card={<span>Heroes in utopian novels tend to tumble into holes or
          trances that magically transport them to the glorious socialist future. <br/><br/>The 19th century wasn't big on exposition.</span>} /> in 1887 and awakens
      in the year 2000. Most of the novel is a dialogue between the time-traveler and the future Bostonians who find him,
      outlining the author's ideas about a more just society."
    </p>
    <p>
      I smiled and thanked her. After that rocky start,
      the class went pretty well. Lillian even stayed after class to welcome me to the college.
      I started to think this gig was going to
      be <ListCard
        expansions={["easy."]}
        forceDir="center-down"
        tag="c3-okay"
        card={<span>It wasn't.</span>}
            nextUnit="section" />
    </p>
  </section>,
  <section>
    <heading>

      <h6  style={{marginTop: '10rem'}}>* * * </h6>

    </heading>
    <p>
      On the night of my arrival the campus had seemed
      unwelcoming. In fact it was quite pleasant, if a bit odd.
    </p>
    <p>
      The school was laid out along a long tiered slope,
      with two narrow
      paved roads running down the length. Gravel footpaths and stone steps
      switched back and forth between buildings. You could stand almost anywhere and look
      down into the valley, but there wasn't much to see beyond
      a few chimneys and steeples that poked above the canopy. The nearest village, where most of the
      faculty lived, was down at the base of the hill.
    </p>
    <p>
      The largest area of level ground was a grassy quadrangle, and many of the
      campus buildings, including my residence, faced out onto it.
      Most structures were ivy-covered brick, though a few small ones were made of rougher gray stone
      and pockmarked with lichen.
    </p>
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
    </figure>
    <p>
      It was a rectangular boulder, a couple meters square and one meter tall. There were bumps and cavities
      across its surface which had been smoothed by age. The top was largely flat, inviting one to sit.
      The earth had been dug out around it in a
      circular depression, with concentric rings of steps, like a tiny Greek ampitheater. I stooped to read
      a small nearby <List expansions={[["plaque"], ["plaque"]]} tag="c3_plaque" />:
    </p>
  </section>,
<section>
  <blockquote className="sign">
    <h4>THE "ASTROLITH"</h4>
    <p>
      This very large ataxite meteorite formed the centerpiece of the Futurian community,
      who christened it "The Astrolith" and believed it imbued their village with spirtual vitality.
    </p>
    <p>It was originally enclosed by the so-called Phalanstery,
      a large communal hall. The four posts around the quadrangle mark the outline of the original construction.
      The hall's destruction by fire in 1899 precipitated the end of the community; however, the stone Astrolith was undamaged.
    </p>
    <p>
      The circular seating was added in 1931 by the gift of an anonymous donor.
      The meteorite is estimated to weigh 30 tons, though it has never been fully excavated.
    </p>
  </blockquote>
  <p>
    Beneath that, a typewritten addendum was tucked into a weathered plastic sleeve:
  </p>
  <blockquote className="typewritten">
    PLEASE NOTE:
    As part of the Science Center expansion, the Astrolith will
    be extracted and relocated to the Museum of Science in Boston.
    We apologize for any inconvenience.
  </blockquote>
  <p>
    And scrawled on <i>that</i> was some <List expansions={[["graffiti"], ["roughly penned graffiti"]]}
                      tag="c2_graffiti" />, presumably added by a student.
  </p>
</section>,
<section>
  <blockquote className="students-font">
    Say NO to removal and keep Blithesdale weird!
  </blockquote>
  <p>
    A trail of construction debris lead uphill to a dreary concrete building marked SCIENCE CENTER.
    One wing of the building
    looked brand new, its gray blocks gleaming but no less ugly. A backhoe was parked nearby,
    lying in wait.
  </p>
  <p>
    Downhill, a paved path ran between the meteorite and the administration building. I assumed that included the Dean's office;
    she was almost certainly expecting me to check in.
  </p>
  <p>
    Amid the students coming and going from the Science Center, I recognized the <ListCard expansions={["odd woman"]}
      tag="c2_woman"
      card={<span>I wanted to thank her for last night, but also knew she had keys to Lynn's office
      and his teaching material.</span>} /> who
    had let me in the building last night.

  </p>
  <p>
    I hesitated, torn between <List expansions={[["following my curiosity", "meeting with the dean"], ["following my curiosity", "meeting with the dean"]]}
                                tag="c2_direction" />.
  </p>
</section>,
<section>
  <Map from={inventory.c2_direction}
    to={{
      "curiosity": <div>
        <p>The dean would have to wait.</p>
        <p>The atrium of the Science Center was only partially finished. Hallways were still
          swathed in plastic sheeting and warning tape, and sawdust was everywhere. The floor was covered by layers of protective
          tan paper, dirtied by boot marks from workers.
        </p>
        <p>I didn't see the woman immediately so I followed the path of heaviest footprints down the hallway.
          The newer rooms seemed to be
          unfinished labs and other functional spaces, with cabling dangling from unpanelled ceilings. Everything
        was bright white, a striking contrast to the ivy-league aspiration of the rest of the campus.</p>
        <p>The hall turned back on itself in a U-shape, towards the quad, ending in a fireproof stairwell. The stairs
          leading up were incomplete and without handrails. The stairs leading down were crisscrossed with
          tape and "No Admittance" signs, but they looked easy enough to <List expansions={[["duck under, so reached to lift the tape—"], ["duck under—"]]} tag="c2_cellar" />
        </p>
      </div>,
      'dean': <div>
        <p>
          I decided it wasn't smart to leave your boss waiting.
        </p>
        <p>
          The administration building was a grand old brick edifice, fronted with tidy columns and an oversized door.
          The entry hall was obviously designed to impress parents and donors and was dominated by a majestic curved
          stairwell with elaborate banisters and railings. Directly next to the stairs, a doorway was flanked by
          a freestanding brass sign that read, "Current Exhibit." I leaned in and knocked on the open door.
        </p>
        <p>
          An older woman was placing some manuscripts into a glass-topped display case and didn't seem
          to hear the knock. "Excuse me,"
          I said, as quietly as possible, and she jumped. I introduced myself.
        </p>
        <p>
          "Oh hello! Sorry I was startled, I get absorbed by my work sometimes!
          I'm Ella Merchant, I'm the college archivist."
        </p>
        <p>
          The exhibit room was small and square, and probably the first stop on any campus tour. It was divided up
          by rows of Victorian-style curio cases, most of which were half-filled. Boxes were strewn all over
          the room.
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
        <p>"Can I help you find something?" a male voice behind me asked. I turned around.</p>
        <p>He was very young, with a long, serious face. At a co-ed school I might have assumed he was a student
          with an affectation for dressing like an <ListCard expansions={["adult"]}
            tag="c2-adult"
            card={<span>Current fashion standards at most colleges did not rise much above pajamas.</span>} />.
        "Oh, sorry, I'm probably not supposed to be here am I?"</p>
        <p>
          He smiled. "Not really, but I won't tell. Are you Abby Fuller?"
        </p>
        <p>
          "I am," I said, shaking hands.
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
          "You've heard about the history of the college, right? When they broke ground on this building last spring,
          they found some old tunnels nobody knew about—mostly root cellars and
          personal storage for the utopians—all beneath the modern basements and dug way into the
          hillside. Apparently a whole vault is under the quad."
        </p>
        <p>"I saw the sign about the meteorite."</p>
        <p>He sighed. "The dean's pretty angry that's still not done, but the faculty and the county were both
          insistent that the excavations be completed first. Then things started to get weird."
        </p>
        <p>I wanted to ask what he meant by that, but by now we'd <ListCard expansions={["passed"]}
          tag="c2-passed"
          card={<span>We'd travelled through connecting corridors without actually going outside, a neat
          concession to New England winters.</span>} />  from the sterile research center to the
          warm, Victorian-era administrative building.
          The Dean's office was near the main visitors' entrance, beside a grand winding staircase and a room marked "Special Exhibits."
        </p>
        <p>"I expected her sooner, Walter," I heard the Dean call out. "I have a call at one."</p>
        <p>He gave me an apologetic look. "Good luck."</p>
        <p>"Thanks for the tour," I said, and <List expansions={[["went to meet my new boss"], ["went to meet my new boss"]]}
          tag="c3_dean_meet" nextUnit="chapter" />.
        </p>
      </div>,
      dean: <div>
        <p>"Come here, you'll find this so interesting," she interrupted. "Do you know
        much of the history of the college?"</p>
        <p>"I've heard it was a utopian colony before it was a university?"</p>
        <p>"That's right." She retrieved a small and yellowed piece of newsprint from a case and
          put it in my hands. "You may have seen they're expanding the math and science building," she said.
          "The construction project has exposed a network of old tunnels that ran under many of the buildings,
          and we've been finding some wonderful artifacts.
        </p>
        <p>"Many of these cellars haven't been opened since the 1890s. It's a fascinating peek into how
          they lived at the time."
          She nodded eagerly at
          the <List expansions={[["broadsheet in my hand"], ["broadsheet in my hand, which I unfolded"]]}
            tag="c3_pamphlet"
              />.</p>
      </div>
    }} />
</section>,
<section>
  <Reader inventory={inventory} docs={[docs.paper1]} />

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
  <p>The dean looked at me. "Come to my office."</p>
  <NextChapter chapter={3} />

</section>
]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
