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
      though with the demeanor of an older person.
    </p>
    <p>
      "I'm glad to hear; I thought it did too." I paused. "Thank you again for offering me this position," I said.
    </p>
    <p>
      "You're welcome." She said nothing else, just regarded me <ListCard tag="c4_regarded"
        expansions={["silently"]}
        card={<span>People like her do this to trick you into <List expansions={[["talking too much"], ["talking too much. I fell for it."]]}
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
        tag="c3-back" card={<span>She really could turn on the charm.</span>} /> qualifications."
    </p>
    <p>
      "I guess it would just help me if
      you could—"
    </p>
    <p>
      "Ms. Fuller, I am very busy and have an appointment in 10 minutes. You're going
      to have to be <List expansions={[["specific"], ["specific"]]}
        tag="c4_specific" nextUnit="none"/>."
    </p>
    <Map from={inventory.c4_specific}
      to={{
        specific: <p>"Could you tell me more about <List expansions={[["the history of the college?",
        "what happened to Professor Lynn?"], "_last"]}
            tag="c4_question"
            conjunction="Or, wait, no, " />"
        </p>
      }} />
  </section>,
  <section>
    <Map from={inventory.c4_question}
      to={{
        "lynn?": <div>
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
            "The historical significance of the campus is a great asset to us, but can be a liability
            when it comes to modernization and development. I asked Jeffrey to lead the
            conservation team—to protect the artifacts found during the excavations but to balance that
            against an aggressive construction schedule."
          </p>
          <p>
            She nodded towards the oil painting. "He was obsessed with that old hall, with why it burned down.
            I don't know why, it was made of wood and people used candles, what other reason do you need?
            But Jeffrey was convinced that the artifacts contained
            first-person accounts of what happened, or even some physical evidence of arson."
          </p>
          <p>She frowned. "He <i>knew</i> how important it was
            to me that we open this school year with the building complete, but he kept slowing us down,
            until the project was almost at a crawl. And then we missed the deadline."
          </p>
          <p>
            "And what happened to him—?" I <ListCard tag="c3-asked"
              expansions={["asked"]}
              nextUnit="section"
              card={<span>I told myself a dean would not actually murder a faculty member for going off schedule.</span>} />.
          </p>
        </div>,
        "college?": <div> <p> She leaned back and I could tell this was a story she told often. "As you may know the college was
          founded on the grounds of an old utopian community. They called themselves the ____s."
        </p>
          <p>
            "Were they religious?"
          </p>
          <p>
            "They would've considered themselves so, but 'spiritual' might be a better modern word. They were founded
            on the idea that scientific progress could go hand-in-hand with creating a more Godly society. Women
            had <ListCard expansions={["almost"]} tag="c3-almost" card={<span>"Almost."</span>} /> full participation governance."
          </p>
          <p>She nodded
            towards the oil painting. "The founders uncovered that meteorite when they were tilling the fields and decided it
            was a sign. They built their great hall around it, as a place of communal worship."
          </p>
          <p>
            "What happened to the community?"
          </p>
          <p>
            "Most of the first founders drifted away over time; the soil up here is poor and the winters were brutal."
            She stared at the painting before continuing. "Things were starting to fall apart in 1899, and then the Phalanstery caught fire.
            It's possible it was deliberate—many
            fringe religious groups of the time believed the world was about to end and some members may have wanted to hasten it along."
          </p>
          <p>
            "Was anyone hurt?"
          </p>
          <p>"We don't really know." She paused. "You asked about Lynn. Jeffrey was leading the committee that cataloged the
            material we'd been turning up in the construction. He'd always been interested in the events leading up to
            that fire. Prior to this
            excavation, there hadn't been much material about the community's last days—few letters, no journals,
            and their homegrown <Map from={inventory.c2_direction}
              to={{
                curiosity: " newspaper ",
                  dean: <span><ListCard expansions={["newspaper"]}
                    tag="c3-newspaper"
                    card={<span>This must've been what Ella had shown me.</span>} /></span>
              }} /> had
            stopped publication by then. Jeffrey was obsessed with that fire, with proving that it was <ListCard expansions={["arson or worse"]}
              tag="c3-arson" card={<span>What's worse than arson?</span>} />.
          </p>
          <p>"Regardless of what happened that night, the community mostly disbanded after the fire. Some moved to the Shaker
            community in Haverhill. A few of the
            teachers remained and worked to turn it into a women's school. But nobody wrote much about how it ended."
          </p>
          <p>
            "That's so fascinating. I had no idea," I said.
          </p>
          <p>
            She studied me. "Lynn thought so too. He was always digging into the college
            history, looking for material for his class. And when we broke ground on this Science Center extension,
            his curiosity turned into an obsession."
        </p>
        <p>"<List expansions={[["And is that what he was doing before he disappeared?"], ["And is that what he—"]]} tag="c3-disappeared" />"</p>
      </div>
    }} />
  </section>,
  <section>
    <p>
      She sniffed. "He halted the construction project abruptly—went out one morning and stood in front of the
      bulldozers, said everything had to stop. I was furious. I demanded that he meet me right away,
      but he never showed.
    </p>
    <p>"This was just after term started," she explained. "As far as I was concerned he was already on probation.
      He'd missed a few classes, and stopped joining the
      regular meetings with the Historical Committee. <Map from={inventory.c2_direction}
        to={{
          curiosity: <span>Ella Merchant, our library archivist, </span>,
          dean: <span>You met Ella, she's the committee chair, she </span>

        }} /> says he'd started going through materials from one of the old cellars by himself and not
        involving the group.
      </p>
      <p>
      "I believe he found something down there that was too good to pass up
      and ran off with it." She leaned back. "I have an army of
      lawyers who will not be happy to see college property show up in a museum
      or at some auction. He'll <ListCard expansions={["regret"]} tag="c3-regret"
        nextUnit="section"
        card={<span>I did not doubt this.</span>} /> it."
    </p>
  </section>,
  <section>
    <p>
      She stood up, and this meant I did too. "Now you'll have to excuse me, Ms. Fuller.
      I have an appointment with a donor."
    </p>
    <p>"Thank you again Dean—"</p>
    <p>
      "I'd like to see you succeed with us, Abby. Why don't you speak
      with Sarah Gilman, Lynn's research assistant. You met her the night you arrived. She can probably help answer some of your
      questions and <ListCard expansions={["assist"]} tag="c3-assist"
        card={<span>If she was Lynn's assistant, why hadn't she mentioned it that night?</span>} /> with the class."
    </p>
    <Map from={inventory.c2_direction}
      to={{
        curiosity: <div>
          <p>
            I thanked the dean and closed the door behind me. Walter came immediately out of his small adjacent office.
            I didn't mind that he'd been listening.
          </p>
          <p>
            "That could've been worse," he said.
          </p>
          <p>
            "If you say so," I said. "So what do you know about Sarah Gilman? The Dean told me to find her."
          </p>
          <p>
            He made a face. "She kinda gives me the creeps. Not just me, though I
            feel like I get the brunt of it. A lot of the students find her strange."
          </p>
          <p>
            "I met her when I arrived. She was in the English department <ListCard expansions={["building"]}
            tag="c3-hallway" card={<span>There was no need to be specific that I was in Lynn's office.</span>} />."
          </p>
          <p>"Probably, she never seems to sleep. Seniors tell freshman she's the ghost of a long-dead utopian,
            since she's often seen wandering around the campus at night."
          </p>
          <p>I felt a little bad for her. "If she hadn't been
            there I would've spent my first night sleeping in my car."
          </p>
          <p>
            He was unmoved. "She still creeps me out. Anyway, she's usually in the library
            if she's not meeting with students. I'll show you where it is."
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
              "I think I need to <List expansions={[["show you"], ["show you"]]}
                tag="c3-show-you"
                nextUnit="chapter" /> what he was working on."
            </p>
          </div>
        }} />
        <p>
          "Okay," I said. "<List expansions={[["Let's go."], ["Let's go."]]}
            tag="c3-go"
            nextUnit="chapter" />
        </p>
  </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections} />

}
