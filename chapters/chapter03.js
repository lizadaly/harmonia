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
      Dean Orellana's office was spacious, with lots of vintage college memorabilia decorating the walls:
      group photos of serious-looking young women in bloomers, sports trophies, leadership awards.
      A large <ListCard expansions={["oil painting"]}
        tag="c4_painting"
        card={<span>It appeared to be the college campus, but in place of the quad was a massive
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
      "You're welcome." She said nothing else, just <ListCard tag="c4_regarded"
        expansions={["regarded me silently"]}
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
      to decide whether to <ListCard expansions={["bring you back"]}
        tag="c3-back" card={<span>She really could turn on the charm.</span>} /> next semester."
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
            against an aggressive construction schedule." She frowned. "He knew very well how important it was
            to me that we open this school year with the building complete, but he kept slowing us down,
            until the project was almost at a crawl."
          </p>
          <p>
            "And what happened to him—?" I <ListCard tag="c3-asked"
              expansions={["asked"]}
              nextUnit="section"
              card={<span>Meanwhile I tried not to imagine that she'd murdered a faculty member for going off schedule.</span>} />.
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
          with the idea that scientific progress could go hand-in-hand with creating a more Godly society." She nodded
          towards the oil painting. "The founders uncovered the meteorite when they were tilling the fields and decided it
          was a sign. They built their great hall around it, as a place of communal worship."
        </p>
        <p>
          "What happened to the community?"
        </p>
        <p>
          "Most of the first founders left over time; the soil up in the mountains is poor and the winters were brutal."
          Then, something happened in 1899. The Phalanstery caught fire. It's possible it was deliberate—many of the
          members believed the world was about to end and may have wanted to hasten it along."
        </p>
        <p>
          "Was anyone hurt?"
        </p>
        <p>She paused. "You asked about Lynn. Jeffrey was leading the committee overseeing the archival of the
          material we'd been turning up. He was very interested in the events leading up to the fire. Prior to our
          digs, there hadn't been much material about the community's last days—few letters, no journals,
          and their homegrown <Map from={inventory.c2_direction}
            to={{
              curiosity: " newspaper ",
              dean: <span><ListCard expansions={["newspaper"]}
                tag="c3-newspaper"
                card={<span>This must've been what Ella had shown me.</span>} /></span>
            }} />
          had stopped publication. He was obsessed with that fire, with what had happened.
        </p>
        <p>"Once the smoke cleared the community mostly disbanded. People in those days often just melted away and
          started over. Some of them moved to the Shaker community in Haverhill. A few of the
          teachers remained and worked to turn it into a women's school."
        </p>
        <p>
          "That's so fascinating. I had no idea," I said.
        </p>
        <p>
          She studied me. "Lynn thought so too. He was always digging into the college
          history, looking for material for his class. And when we broke ground on this Science Center expansion
          he was there, getting in the way of the construction
          teams looking for artifacts."
        </p>
        <p>"<List expansions={[["And is that what he was doing before he disappeared?"], ["And is that what he—"]]} tag="c3-disappeared" /></p>
      </div>
    }} />
  </section>,
  <section>
    <p>
      She sniffed. "He halted the construction project abruptly—went out one morning and stood in front of the
      bulldozers, said everything had to stop. I was furious. I made an appointment for him to see me that afternoon
      and he never showed.
    </p>
    <p>"This was just after term started," she explained. "He missed a few classes, and stopped joining the
      regular meetings with the Historical Committee. <Map from={inventory.c2_direction}
        to={{
          curiosity: <span>Ella Merchant, our library archivist, </span>,
          dean: <span>You met Ella, she's the committee chair, she </span>

        }} /> says he'd started going through materials from one of the old cellars by himself and not
        involving the group.
      </p>
      <p>
      "I believe he found something in the archives that was too good to pass up
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
      I have an appointment with a donor.
    </p>
    <p>
      "I'd like to see you succeed with us, Abby. Why don't you speak
      with Sarah Gilman, Lynn's research assistant. She can probably help answer some of your
      questions and <ListCard expansions={["assist"]} tag="c3-assist"
        card={<span>If she was Lynn's assistant, why hadn't she mentioned it when we met?</span>} /> with the class."
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
              feel like she stares at me especially weirdly. A lot of the students find her strange."
            </p>
            <p>
              "I think I met her when I arrived."
            </p>
            <p>"Probably, she never seems to sleep. Students tell freshman she's the ghost of long-dead utopians,
              since she's often wandering around the campus at night."
            </p>
            <p>I felt a little bad for her. "If she hadn't been
              around I would've spent my first night sleeping in my car."
            </p>
            <p>
              He was unmoved. "She still creeps me out. Anyway, she's usually in the library
              if she's not meeting with students. I'll show you where it is."
            </p>
            </div>,
          dean: <div>
            <p>
              I was surprised to find my student Lillian waiting for me. "<ListCard expansions={["Ella"]}
                tag="c3-ella"
                card={<span>Lillian was studying to be a librarian and was doing an independent study project with the
                archivist on the history of the college.</span>} /> said you were with the dean," she explained.
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
  </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections} />

}
