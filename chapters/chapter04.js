const React = require('react')
import { connect } from 'react-redux'
import { Map, List, FromInventory, RenderSection, NextChapter, AllButSelection} from 'windrift'

import { docs } from '../docs'
import jsxToString from 'jsx-to-string'
import ListCard from '../components/listCard'


export default ({currentSection, inventory}) => {
  const sections = [<section>
    <p>
      Dean Orellana's office was too big to be an office, really. Lots of empty space,
      with her desk pushed up against the far wall and only two thin chairs facing it.
      To speak with her meant crossing a wide gap, plenty of time to question why
      you'd come here in the first place. I was sure it was intentional.
    </p>
    <p>
      The decor was almost warm, though, with lots of paraphenalia and history decorating the walls.
      Group photos of serious-looking young women in bloomers, awards through the years.
      A large oil painting of the quad, with the astrolith in a prominent position
      [the viewing platform had yet to be built], hung over a massive fireplace.
    </p>
    <p>
      "You're late," she said, without looking up. She was younger than I expected—mid 40s,
      sensibly but not puritanically dressed. She was repetatively signing and stacking
      small pieces of paper [I realized these were probably paychecks.] "You missed your first class."
    </p>
    <p>
      "Hello, Dean, thank you again for offering me this position," I said, taking
      one of the spindly seats. "I did actually teach yesterday's class."
    </p>
    <p>
      Now she looked up, studying me. "I thought you arrived late Monday."
    </p>
    <p>
      "I did. And I taught class first thing Tuesday."
    </p>
    <p>
      "Impressive," she said, and even though it was without warmth, I felt a flush of pride.
      She said nothing else, just regarded me quietly. [People like her do this to trick you into talking too much. [I fell for it.]]
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
      I struggled not to squirm in my seat. "I guess it would just help me if
      you could—tell me what happened to Professor Lynn? And maybe about the history of the college?"
    </p>
    <p>
      "Ms. Fuller, I am very busy and have an appointment in 10 minutes. You're going
      to have to be specific." [hyperlink, turns on the above two questions?"
    </p>
  </section>,
  <section>
    <p>
      -- [Lynn]
      She paused, and then told me to close the door. "___ Lynn had been teaching
      here for over 10 years. He wasn't adored, but he was well-liked by the students.
      Never gave me much trouble. [For Orellana this was high praise.]
      His utopian class is a signature one for us, because as you apparently didn't
      bother to learn, the college is founded on the grounds of an old utopian community itself."
    </p>
    <p>
      "I didn't have to time to look into—[cuts to shorter]"
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
      that was recovered." She frowned. "The historical significant of this
      facility is a great asset for us, but it can be a liability too."
    </p>
    <p>
      "And Lynn," I prompted.
    </p>
    <p>
      -- [college]
      "As you apparently didn't bother to learn before you arrived, the college was
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
    <p>
      Now her face turned to disgust. "He just disappeared shortly after term started.
      I suspect he found something in the archives that was too good to pass up
      and ran off with it." She leaned back. "He can try, but I have an army of
      lawyers that will not be happy to see college property show up in a museum
      or at some auction. He'll regret it." [I did not doubt this.]
    </p>
    <p>
      She stood up which meant I did too. "Now you'll have to excuse me, Ms. Fuller.
      I have an appointment with a donor. [Her tone made it clear how faculty ranked relative to donors.]"
      She paused and said, "I'd like to see you succeed with us. Why don't you speak
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
      His eyes widened. "Ugh, she gives me the creeps. She's always up at all hours,
      stalking around campus. No idea when she sleeps."
    </p>
    <p>
      "Oh, I think I met her when I arrived." I felt a little bad for her, if this is what
      everyine thought. "If she hadn't been
      around I think I would've spent my first night on Professor Lynn's floor."
    </p>
    <p>
      He was unmoved by my tale. "Still creeps me out. Anyway, she's usually in the library
      if she's not meeting with students. I'll show you where it is."
    </p>
  </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections} />

}
