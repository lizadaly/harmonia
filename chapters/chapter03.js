const React = require('react')
import { connect } from 'react-redux'
import { Map, List, FromInventory, RenderSection, NextChapter, AllButSelection} from 'windrift'

import { docs } from '../docs'
import jsxToString from 'jsx-to-string'
import ListCard from '../components/listCard'


export default ({currentSection, inventory}) => {
  const sections = [<section>

    <heading>
      <h2>Chapter Three</h2>
      <blockquote>
        I was filled with astonishment at women who, qualified by nature and fortune to have the world almost
        at their command, chose to seclude themselves from it and make a
        new one for themselves. <br/>
        —<i>Millennium Hall</i>, Sarah Scott (1762)
      </blockquote>
    </heading>
    <p>
      Dean Orellana's office was spacious, comfortably furnished, and adorned with vintage college memorabilia:
      group photos of serious-looking young women in bloomers, field hockey trophies, awards for comportment and elocution.
      A large <ListCard expansions={["oil painting"]}
        tag="c4_painting"
        card={<span>A moody rendition of the college campus. In place of the quad was a massive
        barn-shaped wooden building. A brass label at the bottom read, "The Phalanstery: Our Great Hall (1889)"</span>} /> hung over a stone fireplace.

    </p>
    <p>
      "I heard your first class went reasonably well," she said, without looking up. She was
      {inventory.c2_direction.endsWith("curiosity") ? " also " : ""} younger than I expected—mid 40s,
      curly hair, crimson power suit that was a bit out of place in this backwater.
    </p>
    <p>
      "I'm glad to hear; I thought it did too." I <ListCard expansions={["paused"]}
        tag="c3-paused"
        card={<span>I've been told I don't show sufficient deference to authority to be successful in
        academia.</span>} />. "Thank you again for offering me this position."
    </p>
    <p>
      "You're welcome." She said nothing else, just regarded me <ListCard tag="c4_regarded"
        expansions={["silently"]}
        card={<span>People like her do this to trick you into <List expansions={[["talking too much."], ["talking too much. I fell for it, stuttering over myself."]]}
               tag="c4_talking_too" /></span>} />.
    </p>

  </section>,
  <section>
    <p>
      "<List expansions={[["I think—"], ["I mean I'm wondering—"], ["What are your—"],
      ["Can you tell me what your expectations are for me?"]]}
         tag="c3_expectations" />"
    </p>
  </section>,
  <section>
    <p>
      "Expectations? I expect you to teach Utopian Literature to undergrads. Then I expect
      to decide whether to bring you back next semester—despite your <ListCard expansions={["less-than-stellar"]}
        tag="c3-back" card={<span>I was a foster kid from an old mill town, but sure, be all judgy.</span>} /> qualifications."
    </p>
    <p>
      "I understand," I said. "If you could just give me a little more background on my situation, I think
      it would help my teaching quite a bit—"
    </p>
    <p>
      She feigned confusion. "Don't you have a
      full syllabus from Professor Lynn? That's what I'm paying you to teach."
    </p>
    <p>
      "Well, actually, I don't, <List expansions={[["but in addition to that—"], ["but—"]]}
                                  tag="c3-but" />"
    </p>
  </section>,
  <section>
    <p>"You haven't acquired his material? I'm frankly astonished I'd need to even mention it.
    Perhaps hiring someone so underqualified was a mistake."</p>

    <Map from={inventory.c4_specific}
      to={{
        _undefined: <p>She was just testing me. I took several calming breaths before responding. "I will get the syllabus right after this meeting, but I feel I also need to better understand
          both the history of this college and have some background on what happened to Professor Lynn."
        </p>,
        _any: <p>She was just testing me. I took several calming breaths before responding. "I will get the syllabus right after this meeting, but I feel I also need to better understand
          both <List expansions={[["the history of this college",
            "what happened to Professor Lynn"], ["the history of this college",
          "what happened to Professor Lynn"]]}

            tag="c4_question"
                 conjunction="and have some background on" />.</p>
      }} />
    <p>
      "Ms. Fuller, I am very busy and have an appointment in 10 minutes. You're going
      to have to <List expansions={[["pick one"], ["pick one"]]}
                      tag="c4_specific" nextUnit="none"/>."
    </p>
  </section>,
  <section>
    <Map from={inventory.c4_question}
      to={{
        "lynn": <div>
          <p>
            She paused, and then told me to close the door. "Jeffrey Lynn had been teaching
            here for over 10 years. His class on utopianism is a signature one for the college, given our history.
          </p>
          <p>
            "We've been undertaking an expansion of the
            science wing, as part of a strategic agenda to transform this into a
            research institute. I plan on my making this my <ListCard expansions={["legacy"]} tag="c3-legacy"
              card={<span>I got the impression that the dean lets very little stand in her way.</span>} />.
          </p>
          <p>
            "The historical significance of the campus can be an asset to us,
            though frankly I prefer to downplay it. It was a long time ago and
            the community had some—unconventional ideas. In addition, any historically significant structures are a liability
            when it comes to modernization and development. I asked Jeffrey to lead the
            conservation team—to protect the artifacts found during the excavations but to balance that
            against an aggressive construction schedule."
          </p>
          <p>
            She nodded towards the oil painting. "He was obsessed with that old hall—with finding out why it burned down.
            I don't know why, it was made of wood and people used candles, what other reason do you need?
            But Jeffrey was convinced that the artifacts contained
            first-person accounts of what happened, or even some physical evidence of intentional destruction."
          </p>
          <p>She frowned. "He <i>knew</i> how important it was
            to me that we open this school year with the building complete. I was... extremely angry with him."
          </p>
          <p>
            "And what happened to him—?" I <ListCard tag="c3-asked"
              expansions={["asked"]}
              nextUnit="section"
              card={<span>I told myself a dean would not actually murder a faculty member for going off schedule.</span>} />.
          </p>
        </div>,
        "college": <div> <p> She leaned back and I could tell this was a story she told often. "As you may know the college was
          founded on the grounds of an old utopian community. They called themselves the Futurians."
        </p>
          <p>
            "What does the name mean?"
          </p>
          <p>
            "They were founded
            on the idea that scientific progress could go hand-in-hand with creating a more Godly society, though
            most of them believed that society would not come for hundreds of years—hence the name. Women
            had <ListCard expansions={["almost"]} tag="c3-almost" card={<span>"Almost."</span>} /> full participation in governance."
          </p>
          <p>She nodded
            towards the oil painting. "The initial colonists uncovered that meteorite when they were tilling the fields.
            The founders decided it
            was a sign. They built their great hall around it, as a place of communal worship.
          </p>
          <p>
            "Most of the first founders drifted away over time; the soil up here is poor and the winters are brutal."
            She stared at the painting before continuing. "Things were starting to fall apart in 1899, and then their
            Great Hall caught fire. There were some deaths, and bankrupcy soon followed."
          </p>
          <p>
            "How did the fire start?"
          </p>
          <p>"We don't really know." She paused. "Jeffrey Lynn was our leading scholar of the utopian period.
            To be honest, it's not something I like to promote about the school. It was a long time ago and
          they had some—unconventional ideas.</p>

          <p>
            "Nevertheless, this expansion of our Science Center has involved quite a bit of archaeological
            excavation. Up until these old cellars and storerooms were dug up, we didn't have much material
            about the community's last year, aside accounts in their homegrown <Map from={inventory.c2_direction}
              to={{
                curiosity: "newspaper",
                  dean: <span><ListCard expansions={["newspaper"]}
                    tag="c3-newspaper"
                    card={<span>This must've been what Ella had shown me.</span>} /></span>
              }} />. Jeffrey became obsessed with that fire; he swore to me he was on the trailing of
            proving that it was arson, or even something <ListCard expansions={["worse"]}
              tag="c3-arson" card={<span>What's worse than arson?</span>} />."
          </p>

          <p>"And is that what he<List expansions={[[" was doing before he disappeared?"], ["—"]]} tag="c3-disappeared" />"</p>
        </div>
      }} />
  </section>,
  <section>
    <p>
      "Just after term started, he halted the construction project—went out one morning and stood in front of the
      bulldozers, said everything had to stop. I was furious. I demanded that he meet me right away,
      but he didn't show up. As far as I was concerned he was fired, tenure be damned.
      He'd missed a few classes, and stopped joining the
      regular meetings with the Historical Committee. <Map from={inventory.c2_direction}
        to={{
          curiosity: <span>Ella Merchant, our library archivist, </span>,
          dean: <span>You met Ella, she's the committee chair, she </span>

        }} /> says he'd started going through materials from one of the old cellars by himself and not
      involving the group.
    </p>
    <p>
      "I believe he found some artifact or another down there that was too good to pass up
      and ran off with it." She leaned back. "I have an army of
      lawyers who will not be happy to see college property show up in a museum
      or at some auction."
    </p>
    <p>
      I frowned. "When I took this assignment I assumed he'd simply left for another job without
      much notice, but you said he literally disappeared. Has he been reported missing? Are the police involved?"
    </p>
    <p>
      The Dean shrugged. "I'm not his mother." She narrowed her eyes. "You don't <List expansions={[["approve"], ["approve"]]}
        tag="c3_approve" /> of how
      I've handled this, Ms. Fuller?"
    </p>

  </section>,
  <section>
    <p>"It's not for me to say," I said neutrally.</p>
    <p>
      After considering me for another long moment, she stood up, and this meant I did too. "You seem bright enough, Ms. Fuller.
      If you work hard, you may succeed with us.
      Speak with Alice Gilman, Lynn's research assistant. You met her the night you arrived. She can probably help answer some of your
      questions and <ListCard expansions={["assist"]} tag="c3-assist"
        card={<span>If she was Lynn's assistant, why hadn't she mentioned it that night?</span>} /> with the class.
      And she'll have that syllabus."
    </p>
    <Map from={inventory.c2_direction}
      to={{
        curiosity: <div>
          <p>
            I thanked the dean and closed the door behind me. Walter came immediately out of his small adjacent office.
          </p>
          <p>
            "That could've been worse," he said. "Sorry, walls are thin."
          </p>
          <p>
            "If you say so," I said. "What do you know about Alice Gilman? The Dean told me to find her."
          </p>
          <p>
            He made a face. "She kinda gives me the creeps. Not just me, a lot of the students find her strange."
          </p>
          <p>
            "I met her the night I arrived."
          </p>
          <p>"I'm not surprised, she never seems to sleep. Seniors tell freshmen she's the ghost of a long-dead utopian."
          </p>
          <p>"If not for her, I would've spent my first night sleeping in my car."
          </p>
          <p>
            He was unmoved. "I still don't like her."
          </p>
        </div>,
        dean: <div>
          <p>

            I thanked the dean and closed the door behind me. I was surprised to find my student Lillian waiting for me in the foyer. "<ListCard expansions={["Ella"]}
              tag="c3-ella"
              card={<span>Lillian was studying to be a librarian; she told me later that the archivist was her academic advisor.</span>} /> said you were with the dean," she explained.
          </p>
          <p>
            "Did you want to see me about something?"
          </p>
          <p>
            She looked around and lowered her voice. "I've been worried about Professor Lynn."
          </p>
          <p>
            "Why do you say that?"
          </p>
          <p>
            "I think you need to see what he was working on. Come to the library with me."
          </p>
        </div>
      }} />
    <NextChapter chapter={4} />
  </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections} />

}
