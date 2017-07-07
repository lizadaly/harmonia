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
      My name is <ListCard expansions={["Miriam Kemper"]}
        tag="c1-name"
        card={<span>Not <i>Professor Kemper</i>, I was just a post-doc.</span>} />."
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
    <p>"<ListCard expansions={["Sorry, sorry."]}
      tag="c1-sorry"
      card={<span>I apologize too much.</span>} /> I fanned through my notes, stalling for time.
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
      card={<span>No matter how screwed up my life gets, at least I always have a pen.</span>} /> through
    the first lecture. </p>
    <p>"Did he cover <List expansions={[["British fiction"], ["British fiction"]]}
      tag="c1_correction2" /> as well?" {inventory.c1_correction2 ? "More nods." : ""}</p>
    </section>,
  <section>
    <p>"Right, so, that's all set. American Utopian fiction?"</p>
    <p>
      <Map from={inventory.c1_question}
        to={{
          introduction: "The woman whose question I'd previously ignored answered: ",
            hand: "Charlotte spoke up again:"
        }}/>
      "We were supposed to start on Belamy this week."
    </p>
    <p>"Terrific, <Map from={inventory.c1_question}
      to={{hand: "Charlotte, "}}/> thank you. Could you summarize the story for us?"</p>
    <p>
      She looked pleased, and I was finally able to lean back, let the students lead the
      discussion from here, and reflect on these <List expansions={[["last crazy twenty-four hours"], ["last crazy twenty-four hours"]]}
                                                   tag="c1-hours"/>.
    </p>
  </section>]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
