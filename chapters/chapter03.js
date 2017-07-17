const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'
import * as actions from '../actions'
import ListCard from '../components/listCard'
import Reader  from '../components/reader'


export default ({currentSection, inventory, cards}) => {
  const sections = [
  <section>
    <heading>
      <h2>Chapter 2</h2>
      <h3>A Lecture</h3>
      <figure><img src="images/lecture.png" width="200"/></figure>
      <h6>November 4, 1990</h6>
    </heading>

    <p>
      I needed this job so badly I'd driven a thousand miles, and now I was late to my first class.
    </p>
    <p>
      Thirty young women, seated in neat
      rows, stared back at me.
      I dropped my armful of papers on the lecturn and most of them slid off and fanned
      out onto the floor. I brushed my hair out of my face. I was sweating
      even though I'd jogged across campus  <ListCard expansions={["without a coat"]}
        tag="c1-coat"
        card={<span>At this point I didn't even own a coat.</span>} />.
    </p>
    <p>"Welcome to <i>Nineteenth Century Utopian Literature</i>," I began.</p>
    <p>"Can't hear you," said someone in the back.</p>
    <p>"Right, sorry." I coughed. "Welcome to <i>Nineteenth Century Utopian Literature</i>.
      My name is <ListCard expansions={["Abby Fuller"]}
        tag="c1-name"
        card={<span>Not <i>Professor Fuller</i> at this point in my career.</span>} />."
      I'd never taught college students before, nor an all-women class.
      Their <ListCard expansions={["undivided attention"]}
        tag="c1-women"
        card={<span>I genuinely liked being a high school substitute, but let's just
        say student commitment could be "variable."</span>} /> was disconcerting.</p>

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
        introduction: <p>I nodded to acknowledge her, but continued on:</p>,
        hand: <div>
          <p>Flustered, I called on her and asked her name.</p>
          <p>"Charlotte," she said. She was impeccably dressed, her hair perfect. She was
            probably featured on the cover of the school brochure. "What happened to Professor Lynn?"
          </p>
          <p>Ah. "I'm substituting for him until further notice.
            I'm afraid <ListCard expansions={["I can't disclose further details"]}
              tag="c1-question2"
              card={<span>Because I had no idea.</span>} />. "
          </p>
        </div>
      }}
    />
    <p>
      "Utopian Literature," I began{inventory.c1_question === "a woman was raising her hand" ? " again" : ""}.
      "The term was first used as the title of Thomas More's 1561 work, <i>Utopia</i>."
      Another <List expansions={[["hand shot up"], ["hand shot up, this time in the front row"]]}
        tag="c1_question3" />.
    </p>
  </section>,
  <section>
    <p>I could see this was going to be one of those classes. "Yes?"</p>
    <p>"It says in my notes that <i>Utopia</i> was actually published in 1516."</p>
    <p>"<ListCard expansions={["I'm sorry."]}
      tag="c1-sorry"
      card={<span>I apologize too much.</span>} /> I fanned through my notes.
    "Did Professor Lynn already cover this material?"</p>
    <p>Many perfectly permed heads nodded. I looked back down at the syllabus I'd jotted
      down when I'd gotten
    the call:</p>
    <blockquote>
      <ol>
        <li className={inventory.c1_correction ? "strikethrough" : ""}>Introduction to Utopian Fiction</li>
        <li className={inventory.c1_correction2 ? "strikethrough" : ""}>British works, 1820-1860</li>
        <li>American fiction, 1830-1900</li>
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
      card={<span>No matter how screwed up my life gets, I make sure to always have a pen.</span>} /> through
    the first lecture. </p>
    <p>"Did he cover <List expansions={[["British fiction"], ["British fiction"]]}
      tag="c1_correction2" /> as well?" {inventory.c1_correction2 ? "More nods." : ""}</p>
    </section>,
  <section>
    <p>"Right, so, that's all set." I added another strikethrough. "How about American Utopian fiction?"</p>
    <p>
      <Map from={inventory.c1_question}
        to={{
          introduction: "The woman whose question I'd previously ignored answered: ",
            hand: "Charlotte again :"
        }}/>
      "We were supposed to start on Bellamy this week."
    </p>
    <p>"Terrific, <Map from={inventory.c1_question}
      to={{hand: "Charlotte, "}}/> thank you. Could you summarize the story for us?"</p>
    <p>
      She looked pleased. "Looking Backward by Edward Bellamy, tells the story of a Boston man who <ListCard
        expansions={["falls into a deep sleep"]}
        tag="c2-hole"
        card={<span>These utopian novels didn't spend a lot of time on exposition.</span>} /> in 1887 and awakens
      in the year 2000. Most of the novel is a dialogue between the time-traveler and the future Bostonians who find him,
      outlining the author's ideas about a more just society."
    </p>
    <p>
      She paused, looking for affirmation. I smiled and told her to continue. After that rocky start,
      the class went great. This was going to be <ListCard expansions={["okay"]} tag="c3-okay" card={<span>It wasn't.</span>} />.
    </p>
    <p><List expansions={[["Continue"], ["Continue"]]} tag="c3-xxx" /></p>
  </section>,
  <section>
    <p>
      Last night the campus had seemed immense and labrynthine,
      but in fact it was quite compact. Many of the campus buildings, including my residence, faced out onto the main
      quad. The snow had turned to rain overnight, and the stone paths and leafless trees were black and glistening.
      After my morning class I had the rest of my afternoon to myself, though I knew I needed to work in
      a conversation with my dean, whom I'd yet to find.
    </p>
    <p>
      A clock somewhere chimed noon and students began pouring out into the quad
      as if they'd sprung forth from its
      mechanism. Blithedale is a fairly
      conservative school, and while there was no formal dress code, the girls
      seemed to have agreed upon their own—neutral slacks, long skirts, <ListCard expansions={["lots of beige"]}
        tag="c3-beige"
        card={<span>I'm from Miami and so was my wardrobe.
        I hoped these kids could handle the excitement of the occasional pastel.</span>} />.
    </p>
    <p>I approached a young woman who seemed to be in less of a hurry than her classmates.
      "Excuse me, do you know where the dean's office is?"
    </p>
    <p>
      "<List expansions={[["Dean of Science", "Dean of Humanities"], ["Dean of Science", "Dean of Humanities"]]}
         conjunction="or" tag="c3_dean"/>?" she asked.
    </p>
  </section>,
  <section>
    <Map from={inventory.c3_dean} to={{
      humanities: <div>
        <p>"Humanities," I said, adding, "I'm Professor Lynn's replacement."</p>
        <p>She shrugged. "I'm premed. Dean Orellana's office is next to the History building, you know where that is?"</p>
        <p>"I think—"</p>
        <p>"Great," she replied, and walked off. </p>
        <p>"<List expansions={[["Wait, I mean—"], ["Hello?"], ["Oh nevermind."]]} tag="c3-hello" />"</p>

      </div>,
      science: <div>
        <p>"Science," I answered. I was stalling a bit, nervous about meeting my new boss.</p>
        <p>"Oh yeah? I'm premed. What do you teach?"</p>
        <p>"I'm stepping in for Professor Lynn, teaching Utopian Lit this semester."</p>
        <p>"Oh," she said, biting her lip. "I don't take those classes. Dean Reilly's office is right there, in
          front of the <List expansions={[["astrolith"], ["astrolith"]]} tag="c3_astro1" />." She walked away, humming to herself.
        </p>
      </div>
    }}/>
  </section>,
  <section>

    <Map from={inventory.c3_dean} to={{
      humanities: <p>I sighed, and walked to the center of the quad to look around for a sign. I stopped in front of
      an odd sculpture.</p>,
      science: <p>"The what?" I called after her, to no response. I assumed she meant the large rock in the center of
      the quad, so I walked up to it.</p>
    }}/>

    <figure>
      <img src="images/meteorite.jpg" />
      <figcaption>I sketched this a few weeks later, when it became clear how important
        the <Map from={inventory.c3_astro1} to={{
          _undefined: <span><ListCard tag="c3_astro1a" expansions={["astrolith"]}
            card={<span>You'll find out what it means soon enough.
              <Map from={inventory.c3_plaque}
                to={{steps: <span><br/>(Told you.)</span>}} /></span>}

                            /></span>,
        astrolith: "astrolith"}} /> would turn out to be.
      </figcaption>
    </figure>

    <p>
      It was a rectangular boulder, a couple meters square and one meter tall. There were bumps and depressions
      across its surface which had been smoothed by age. The surface was largely flat, inviting one to sit on it.
      The earth had been dug out around it in a
      circular depression, with concentric rings of steps, like a tiny Greek ampitheater. I stooped to read
      a <List expansions={[["small plaque embedded in one of the steps"], ["small plaque embedded in one of the steps"]]} tag="c3_plaque" />.
    </p>
  </section>,
<section>
  <blockquote>
    THE "ASTROLITH"<br/>
    This very large ataxite meteorite was first discovered during the construction of the Science
    Center in 1857 (originally the Center for Physical Studies). The meteorite was named "The Astrolith"
    by the Class of 1931. The circular seating was added in 1968 by the gift of an anonymous donor.
    Its weight is estimated at 30 tons. Only five other iron meteorites are know to be larger, the largest
    is the Hoba meteorite in Namibia.
  </blockquote>
  <p>
    Beneath that, a typewritten addendum was tucked into a weathered clear plastic sleeve:
  </p>
  <blockquote className="typewritten">
    PLEASE NOTE:
    As of Winter 1980 the Astrolith will be removed to the Museum of Science in Boston
    and <ListCard
      expansions={[["replaced with a replica"], ["replaced with a replica"]]}
      tag="c3_addendum"
      card={<span>
        I would soon learn for sure that this was the real one.
      </span>
      } />. We apologize for any inconvenience.
  </blockquote>
  <Map from={inventory.c3_dean}
    to={{
      science: <div>
        <p>
          I looked up from the plaque and scanned the area around the quad. Sure enough,
          a thin path lead up to the only non-brick building in sight,
          a dreary concrete bunker marked SCIENCE CENTER. One wing of the building
          looked brand new, its gray blocks gleaming but no less ugly.
        </p>
        <p>Once inside,
          I saw that the new wing was labelled "Computer Lab" and was still under construction,
          swathed in plastic sheeting and warning tape. The dean's young assistant was friendy,
          but told me the dean was off-campus and wasn't returning today. "Sorry about the mess,"
          the young man added. "Did you want to meet with Dean Orellana in Humanities instead?"
        </p>
        <p>I couldn't put this meeting off forever, so I thanked him and took up his
          offer to lead me there. "Things are a bit upside-down right now," he said, leading
          me down a stairwell. "The computer
          lab expansion should've been done before the school year started but there was a
          complication with the library."
        </p>
        <p>
          "Oh?" I asked, politely.
        </p>
        <p>
          "We're beneath the library now. When they broke ground on the lab they found a sub-basement
          nobody knew about, some old storage room." He wrinkled his nose. "Lots of water damage,
          smelled really bad. I had to help pull out some moldy crates. Some things were salvagable,
          and pretty rare, I hear. The history faculty were excited, they've been putting
          together an exhibit about the founding of the college. You know about how this place started?
          It's actually pretty interesting—oh, we're here."
        </p>
        <p>We went up again, surfacing in a very different department, built out of what looked
          like an old dormitory. Dean Orellana's secretary
          was out, but the office looked occupied. My new friend ducked in to announce me.
        </p>
        <p>"I expected her last night," I heard. The voice was sour and impatient. "Fine, let her in, but I don't have long."</p>
        <p>He stepped back and gave me an apologetic look. "Good luck."</p>
        <p>"Thanks for the tour," I said, and <List expansions={[["went to meet my new boss"], ["went to meet my new boss"]]}
          tag="c3_dean_meet" nextUnit="chapter" />.
        </p>
      </div>,
      humanities: <div>
        <p>
          I looked up from the plaque and scanned the area around the quad until I noticed a formal
          wood-carved sign marked "History Department." It was a grand old building, obviously once
          some kind of residence, with a gently curved stairwell leading up, and an open doorway
          marked "Current Exhibit." I stepped in.
        </p>
        <p>
          An older woman was gently placing some manuscripts into a glass-topped display case. "Excuse me,"
          I said, as quietly as possible, and she jumped in surprise. I introduced myself.
        </p>
        <p>
          "Oh hello, so lovely you made it up here. You came all the way from Florida?"
        </p>
        <p>
          "Miami, yes."
        </p>
        <p>"You drove all the way from Miami here by yourself! Alone!"</p>
        <p>
          I could tell it was meant kindly rather than condescendingly. I approached the display
          case. "What are you working on?"
        </p>
        <p>"Oh, you'll find this very interesting," she assured me, as if we were old friends. "Do you know
        much of the history of the college?"</p>
        <p>"No, I don't," I said, truthfully.</p>
        <p>She retrieved a small and yellowed pamphlet from the case and
          put it in my hands. "You may have seen they're expanding the math and science building," she said,
          shrugging. "Well, during the construction project they found the most amazing old basement, completely
          sealed up since 1900 or so. So many wonderful artifacts from before this was a college, I mean, just look."
          She nodded eagerly at
          the <List expansions={[["pamphlet in my hand"], ["pamphlet in my hand, which I unfolded"]]}
            tag="c3_pamphlet"
                nextUnit="none" />
        </p>
        <Map from={inventory.c3_pamphlet}
          to={{
            hand: "reader here " // <Reader inventory={inventory} docs={[docs.pamphlet]} />

          }} />

      </div>
    }} />
</section>,
<section>
  <Map from={inventory.c3_dean}
    to={{
      humanities: <div>
        <p>
          We were interrupted by an officious-looking woman in the doorway. "Did you not hear me, Louisa?"
        </p>
        <p>
          The curator apologized meekly. "I'm sorry, Dean, I was showing—"
        </p>
        <p>The woman turned to me. "Who are you?"</p>
        <p>"I'm your new Literature instructor," I said carefully.</p>
        <p>She frowned. "Where have you been? I expected you several days ago."</p>
        <p>"I arrived last night. My class was 8am, and I was on my way to meet with you now." Before she could
        continue I said, "May we speak in your office?"</p>
        <p>She nodded, and turned back to the curator. "Louisa, some faculty from Harvard will be here this afternoon
        for a symposium. Please have the exhibit ready before lunch." </p>
        <p>Louisa looked down at the piles of cardboard boxes. "Yes ma'am."</p>
        <p>The dean looked at me disapprovingly. <List expansions={[['"Follow me."'], ['"Follow me." I did.']]}
          tag="c3_follow_dean" /></p>
      </div>,

    }} />

  </section>
]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
