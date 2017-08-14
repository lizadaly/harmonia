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
          - <i>Transcendental Wild Oats</i>, Louisa May Alcott (1873)
        </blockquote>
      </heading>
      <p>
        "One of the unique properties of speculative fiction is the way it reflects the social
        context in which it was written," I lectured. "Can anyone give me some examples from the
        readings that you found particularly illuminating?" I called on a shy girl in the back whose hand was barely raised. "María?"
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
      <p>The door in the back of the lecture hall opened, and to my surprise, Alice Gilman slid in and
      took a seat towards the back. I nodded to her in acknowledgment, but she didn't respond.</p>
      <p>I addressed the class again. "Remember," I said, "this was time before refrigeration, when
        food products were frequently spoiled or adulterated. The idea of substituting real foods with
      artificial ones was considered a huge step forward."</p>
      <p>
        "Many of the actual utopian communities of the time practiced vegetarianism," Lillian added.
        "And believed science was an absolute good."
      </p>
      <p>"With reason," Gilman said, unexpectedly. A couple students turned around and glared at her.</p>
      <p>"Still," María ventured, "I understand vegetarianism, but why go to the extreme of
        eradicating all of them. Didn't people have pets—"</p>
      <p>"Because animals stink," Gilman said. "Civilized people shouldn't live with that filth."</p>
      <p>"Thank you for joining us, Ms. Gilman," I said, <ListCard tag="c6_smiling"
        expansions={["smiling"]} card={<span>Through gritted teeth.</span>} />. <Map from={inventory.c5_direction}
          to={{
            there: "I'd already decided I needed to speak to her, so I asked her to stay through the end of lecture.",
            burglary: "I'd planned on breaking into Lynn's office after class, so I'd need to send her on some kind of errand to keep her out of the way.",
            archaeologist: "I was annoyed she interrupted my class but I didn't need her for what I planned next."
          }} /> "Other common themes that you found surprising?" I asked the students.
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
        being formed in the mid-1800s. And while we might take universal free education for granted as
        obvious social good, some thinkers
        in the 19th century—even women—saw education mostly as an opportunity to <ListCard expansions={["remake"]}
          tag="c6_remake" card={<span>Or worse—many of these utopian novels are enthusiastically eugenicist. I wasn't
          quite ready to tackle that topic with the class.</span>} /> minority and immigrant populations
      in their own idealized image."</p>
      <p>Gilman was frowning and sat with her arms crossed, but remained silent. It was María who spoke up
      again: "Can I read from something else?"</p>
      <p>
        "Of course!"
      </p>
      <p>
        "Ella Merchant, the librarian, gave me this the other day, when I was helping her set up the exhibit. She
        knew I was taking this class and thought we might find it interesting." She stood up, and read
        in a <ListCard expansions={["more confident voice"]} tag="c6_voice" card={<span>I admit,
          I was proud.</span>} nextUnit="section"/>.
      </p>
    </section>,
    <section>
      <blockquote>
        <p>As the village awakened, I was aware of a profound absence: I saw no men at all.
          Had they all been eliminated in
          this time and place? Eventually they did appear, but so few, doing mostly menial work, while
          tall women in strange clothing—some wearing trousers, or next to nothing at all—drift
          impassively along without a care in the world.
        </p>
      </blockquote>
      <p>"Isn't that interesting, Ms. Fuller?" she asked me. "It reminded me of the one by Annie Cridge—"</p>
      <p>Gilman had risen, her arm outstretched. "María," she said, "may I see that—" </p>
      <p>But I was closer and took the paper from her first. "No need, Ms. Gilman. <Map from={inventory.c5_direction}
        to={{
          there: "Perhaps we can return this to Lynn's other documents, after lecture?",
          burglary: "I'll ensure this is kept somewhere safe.",
          archaeologist: "I'll ensure this is kept somewhere safe."
        }} />"
      </p>
      <p>
        I <List expansions={[["looked down"], ["looked down"]]} tag="c6-page" /> at the page, confirming that it was from Cadwell's journal.
      </p>
    </section>,
    <section>
      <p>This was no facsimile, and
        was heavily annotated with pencil in a familiar hand:
      </p>
      <Reader inventory={inventory} docs={[docs.frag4]} note={true} />
    </section>,
    <section>
      <p>Lots of conversations were happening at once now. María was asking if anyone else though the story sounded like a
        description of Blithesdale itself. Charlotte was asking if this book was on the assigned reading list.
        Lillian was saying nothing, but was sitting very still.
      </p>
      <p>"Thank you, María," I said, watching as Gilman slowly backed towards the door. "I found that very illuminating."</p>
      <p>
        Now I really didn't believe Professor Ignatius Cadwell had built a bomb.
      </p>
      <NextChapter chapter={7} />
    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
