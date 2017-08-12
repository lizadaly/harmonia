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
        <h2>Chapter Six</h2>
        <blockquote>
          “It was an experiment. We all risked something, and must bear our losses as we can." <br/>
            - <i>Transcendental Wild Oats</i>, Louisa May Alcott, (1873)
        </blockquote>
      </heading>
      <p>
        "One of the unique properties of speculative fiction is the way it reflects the social
        context in which it was written," I said. "Can anyone give me some examples from the
        readings that you found particularly illuminating?" I looked around the class for a moment
        and called on a shy girl in the back whose hand was barely raised. "María?"
      </p>
      <p>
        "I was surprised by how many utopias are described as vegetarian," she said in her quiet voice.
      </p>
      <p>
        "Good, can you find a relevant passage?" I asked.
      </p>
      <p>
        She nodded and <ListCard expansions={[["read aloud"], ["read aloud"]]} tag="c6-mizora"
          nextUnit="section"
          card={<span>I borrowed this trick from my advisor: ask shy kids to read out loud as a way of getting them comfortable
          with public speaking.</span>} />:
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.mizora]} />
    </section>,
    <section>
      <p>"Thank you, María, that was an excellent example." She blushed.</p>
      <p>The door in the back of the lecture hall opened up, and to my surprise, Alice Gilman slid in and
      took a seat towards the back. I nodded to her in acknowledgment, but she didn't react.</p>
      <p>I addressed the class again. "Remember," I said, "this was time before refrigeration, when
        food products were frequently spoiled or adulterated. The idea of substituting real foods with
      artificial ones was considered a huge step forward."</p>
      <p>
        "Many of the actual utopian communities of the time practiced vegetarianism," Lillian added.
        "And believed science was an absolute good," Lillian added.
      </p>
      <p>"With good reason," Gilman said suddenly. The class turned around in surprise.</p>
      <p>"Still," María ventured, "I understand vegetarianism, but animals are often completely
      extinct in these utopias. People don't even have pets—"</p>
      <p>"Because animals stink," Gilman said. The students were fidgeting, some looking down at their laps.</p>
      <p>"Thank you for joining us, Ms. Gilman," I said, <ListCard tag="c6_smiling"
        expansions={["smiling"]} card={<span>Through gritted teeth.</span>} />. <Map from={inventory.c5_direction}
          to={{
            there: "I'd already decided I needed to speak to her, so I asked her to stay through the end of lecture.",
            burglary: "I'd planned on getting into Lynn's office after this, so I'd need to send her on some kind of errand to keep her out of the way.",
            archaeologist: "I was annoyed she interrupted my class but I didn't need her for what I planned next."
          }} /> "Other examples that you found surprising?" I asked the students.
      </p>
      <p>
        "Education," Charlotte volunteered. "A lot of time is spent on the subject of universal schooling, especially
        in the books <ListCard tag="c6_authors" expansions={["authored by women"]} card={<span>I had expanded
        Lynn's reading list quite a bit; it was heavy on the dudes.</span>} />."
      </p>
      <p>
        "Terrific point, and critical to understanding the history of this college. What's an example?"
      </p>
      <p>
        Charlotte started to <List expansions={[["read"], ["read"]]} tag="c6_hence" />:
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.hence]} />
    </section>,
    <section>
      <p>"Education reform <i>was</i> important. The system of state-run public schools that we know today was still
        being formed in the mid-1800s. After the Civil War, educating newly-freed African American children was
        an imperative." I glanced up at Alice Gilman, who was standing by the back wall, arms crossed.
        "And while we might take for granted that universal free education is an obvious social good, some thinkers
        in the 19th century—even women—saw education mostly as an opportunity to <ListCard expansions={["remake"]}
          tag="c6_remake" card={<span>Or worse—many of these utopian novels are enthusiastically eugenecist. I wasn't
          quite ready to tackle that topic with the class.</span>} /> minority and immigrant populations
      in their own idealized image."</p>
      <p>Gilman looked like she wanted to weigh in, but remained silent. To my surprise, it was María who spoke up
      again: "Can I read from something else?"</p>
      <p>
        "Of course!"
      </p>
      <p>
        "Ella Merchant, the librarian, gave me this the other day, when I was helping her set up the exhibit. She
        knew I was taking this class and thought we might find it interesting." She stood up, and read
        in a <ListCard expansions={["strong, confident voice"]} tag="c6_voice" card={<span>Every teacher wants
        to feel this kind of pride in their students.</span>} nextUnit="section"/>.
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.frag4]} />
      <p>"Isn't that interesting, Ms. Fuller?" she asked me. "It reminded me of the one by Annie Cridge—"</p>
      <p>Gilman had risen, her arm outstretched. "María, may I see—" she started, but I took the
      paper from the student instead.</p>
      <p>"I've got it, Ms. Gilman, thank you. <Map from={inventory.c5_direction}
        to={{
          there: "Perhaps we can return this to Lynn's other papers, after lecture?",
          burglary: "I'll ensure this is kept somewhere safe.",
          archaeologist: "I'll ensure this is kept somewhere safe."
        }} />"
      </p>
      <p>"It's funny because it almost sounds as if they're talking about Blithesdale today—"</p>
      <p>"Yes. It is funny, isn't it?" I looked over her head, at Lillian, whose eyes were wide. I could tell she was thinking
      the same thing I was.</p>
      <p>
        It didn't sound like what Professor Ignatius Cadwell had built was a bomb.
      </p>
    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
