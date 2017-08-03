const React = require('react')
import { connect } from 'react-redux'
import { Map, List, FromInventory, RenderSection, NextChapter, AllButSelection} from 'windrift'

import { docs } from '../docs'
import jsxToString from 'jsx-to-string'
import ListCard from '../components/listCard'


export default ({currentSection, inventory}) => {
  const sections = [<section>
    <p>
      Dean Orellana's office was spacious, with lots of vintage college memorabilia decorating the walls—
      group photos of serious-looking young women in bloomers, sports trophies, leadership awards.
      A large <ListCard expansions={["oil painting"]}
        tag="c4_painting"
        card={<span>It appeared to be the college campus, but in place of the quad was a massive
        barn-shaped wooden building. A brass label at the bottom read, "The Phalanstery: Our Great Hall (1889)"</span>} /> hung over a stone fireplace.

    </p>
    <p>
      "I heard your first class went reasonably well," she said, without looking up. She was younger than I expected—mid 40s,
      though with the demeanor of an older person.
    </p>
    <p>
      "I'm glad to hear. I thought it did too." I paused. "Thank you again for offering me this position," I said.
    </p>
    <p>
      "You're welcome." She said nothing else, just <ListCard tag="c4_regarded"
        expansions={["regarded me silently"]}
        card={<span>People like her do this to trick you into <ListCard expansions={["talking too much"]}
            tag="c4_talking_too"
            forceDir="down"
            card={<span>I fell for it.</span>}
            nextUnit="section"/>.</span>} />.
    </p>

  </section>,
  <section>
    <p>
      "<List expansions={[["I think—"], ["I mean I'm wondering—"], ["Can you tell me what your expectations are?"],
        ["Can you tell me what your expectations are? For me in this role?"]]}
        tag="c3_expectations" />"
    </p>
  </section>,
  <section>
    <p>
      "Expectations? I expect you to teach Utopian Literature to undergrads. Then I expect
      to decide whether to bring you back next semester."
    </p>
    <p>
      She really could turn on the charm. "I guess it would just help me if
      you could—"
    </p>
    <p>
      "Ms. Fuller, I am very busy and have an appointment in 10 minutes. You're going
      to have to be <List expansions={[["specific"], ["specific"]]}
        tag="c4_specific" nextUnit="none"/>."
    </p>
    <Map from={inventory.c4_specific}
      to={{
        specific: <p>"Could you tell me  <List expansions={[["about the history of the college?",
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
            with the need to keep up momentum." She frowned. "He knew very well how important it was
            to me that we open this school year with the building complete, but he kept slowing us down,
            until the project was almost at a crawl."
          </p>
          <p>
            "What did Lynn do instead?" I <ListCard tag="c3-asked"
              expansions={["asked"]}
              nextUnit="section"
              card={<span>Meanwhile I tried not to imagine that she'd murdered a faculty member for going off schedule.</span>} />.
          </p>
        </div>,
        "college?": <div> <p> "As you apparently didn't bother to learn before you arrived, the college was
            founded on the grounds of an old utopian community. They called themselves the ____s."
        </p>
        <p>
          "I didn't have to time to look into—[cuts to shorter]"
        </p>
        <p>
          She cut me off. "It's helpful for us, sure. Attracts a lot
          of curious students, but also a lot of weirdos. Many of the buildings are
          in the registry of historic places, which can be inconvenient for modernization and development."
        </p>
        <p>
          "What happened to the community?"
        </p>
        <p>
          "Like many of them, it was founded by a crackpot with a lot of personal magnetism,
          and when his leadership fell apart, the community mostly disbanded. A few of the
          teachers stayed around and worked to turn it into a women's school."
        </p>
        <p>
          "That's so interesting," I said. I meant it.
        </p>
        <p>
          She studied me. "Lynn thought so too. He was always digging into the college
          history, looking for material for his class. Every time we break ground on
          some new facility he was there, getting in the way of the construction
          teams looking for artifacts."
        </p>
        <p>
          "And what happened to him?"
        </p>
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
      lawyers that will not be happy to see college property show up in a museum
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
    <p>"Thanks again," I muttered, and got up to leave. The dean cleared her throat and I turned back.</p>
    <p>
      "I'd like to see you succeed with us, Abby. Why don't you speak
      with [Zenobia], Lynn's TA. She can probably help answer some of your
      questions and assist with the class."
    </p>
    <p>
      I thanked her and closed the door behind me. [Kid] was waiting for me.
      // FIXME depends on previous choice
    </p>
    <p>
      "Thanks for sticking around," I said.
    </p>
    <p>
      "No problem, I was on break anyway. I know how she can be."
    </p>
    <p>
      "I've seen worse," I replied. "What do you know about [Zenobia]? The Dean told me to find her."
    </p>
    <p>
      His eyes widened. "Ugh, she gives me the creeps. She's awake at all hours,
      stalking around campus. No idea when she sleeps."
    </p>
    <p>
      "Oh, I think I met her when I arrived." As an outsider myself I felt a little sorry for her.
      "She wasn't so bad. If she hadn't been
      around I think I would've spent my first night on Professor Lynn's floor."
    </p>
    <p>
      He was unmoved. "Still creeps me out. Anyway, she's usually in the library
      if she's not meeting with students. I'll show you where it is."
    </p>
  </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections} />

}
