const React = require('react')
import { connect } from 'react-redux'
import { Map, List, FromInventory, RenderSection, NextChapter, AllButSelection} from 'windrift'

import { docs } from '../docs'
import jsxToString from 'jsx-to-string'
import ListCard from '../components/listCard'


export default ({currentSection, inventory}) => {
  const sections = [<section>
    <p>
      Dean Orellana's office was too big to be an office, really—too much empty space,
      her desk pushed up against the far wall with only two thin chairs facing it.
      To speak with her meant crossing a wide gap, plenty of time to wonder whether
      it was a good idea to meet with her at all. I'm sure it was intentional.
    </p>
    <p>
      The decor was almost homey, though, with lots of vintage college memorabilia decorating the walls—
      group photos of serious-looking young women in bloomers, sports trophies, leadership awards.
      A large <ListCard expansions={["oil painting"]}
        tag="c4_painting"
        card={<span>It appeared to be the college campus, but in place of the quad was a massive
        barn-shaped wooden building. A brass label at the bottom read, "The Phalanstery: Our Great Hall (1889)"</span>} /> hung over a stone fireplace.
    </p>
    <p>
      "You're late," she said, without looking up. She was younger than I expected—mid 40s,
      sensibly but not puritanically dressed. She was repetitively signing and stacking
      small pieces of paper [I realized these were probably paychecks and I should be grateful someone was signing mine.]
      "You missed your first class."
    </p>
    <p>
      "Hello, Dean, thank you again for offering me this position," I said, taking
      one of the spindly seats. "I did actually teach yesterday."
    </p>
    <p>
      Now she looked up, studying me. "I thought you arrived late Monday."
    </p>
    <p>
      "I did. And I taught class first thing Tuesday."
    </p>
    <p>
      "Impressive," she said, and even though it was without warmth, I felt a flush of pride.
      She said nothing else, just <ListCard tag="c4_regarded"
        expansions={["regarded me silently"]}
        card={<span>People like her do this to trick you into <ListCard expansions={["talking too much"]}
            tag="c4_talking_too"
            card={<span>I fell for it.</span>}
            nextUnit="section"/>.</span>} />.
    </p>
    <p>
      I started to babble. "I think—I mean I was wondering—What are your expectations of me in this role?"
    </p>
  </section>,
  <section>
    <p>
      "Expectations? I expect you to teach Utopian Literature to undergrads. Then I expect
      to decide whether to bring you back next semester."
    </p>
    <p>
      She really could turn on the charm. "I guess it would just help me if
      you could—tell me a bit more about this place."
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
            conjunction="or, " />"
        </p>
      }} />
  </section>,
  <section>
    <Map from={inventory.c4_question}
      to={{
        "lynn?": <div>
          <p>
            She paused, and then told me to close the door. "___ Lynn had been teaching
            here for over 10 years. He wasn't adored, but he was well-liked by the students.
            Never gave me much trouble. [For Orellana this was high praise.]
            His utopian class is a signature one for us, because as you apparently didn't
            bother to learn, the college is founded on the grounds of an old utopian community itself."
          </p>
          <p>
            "I didn't have to time to look into—"
          </p>
          <p>
            "As you also probably don't know, we have been undertaking an expansion of the
            science wing, as part of a large grant to transform the college into more of a
            research institute. I plan on making that my legacy."
            [I got the impression that very little would stand in her way.]
          </p>
          <p>
            "There were conservation issues that arises as part of the construction
            project; some old storage facilities that needed to be preserved.
            Lynn was leading that initiative, he wanted first crack at the material
            that was recovered." She frowned. "The historical significance of this
            campus is a great asset for us, but it can be a liability when it comes to
            modernization and development."
          </p>
          <p>
            "And Lynn," I prompted.
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
    <p>
      She snorted dismissively. "He just disappeared shortly after term started.
      I suspect he found something in the archives that was too good to pass up
      and ran off with it." She leaned back. "He can try, but I have an army of
      lawyers that will not be happy to see college property show up in a museum
      or at some auction. He'll regret it." [I did not doubt this.]
    </p>
    <p>
      She stood up, and this meant I did too. "Now you'll have to excuse me, Ms. Fuller.
      I have an appointment with a donor. [It was clear how faculty ranked relative to donors.]"
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
