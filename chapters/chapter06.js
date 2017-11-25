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
      <header>
        <h2>Chapter Six</h2>
        <blockquote>
          God did not make us perfect. He left us something to do for ourselves. <br/><br/>
          - <i>Unveiling a Parallel</i>, Alice Jones and E. Merchant (1893)
        </blockquote>
      </header>
      <p>
        “One of the unique properties of speculative fiction is the way it reflects the social
        context in which it was written,” I lectured. “Can anyone give me some examples from the
        readings that you found particularly illuminating?” I called on a shy girl in the back. “María?”
      </p>
      <p>
        “I was surprised by how many utopias are described as vegetarian,” she said in her quiet voice.
      </p>
      <p>
        “Good, can you find a relevant passage?” I asked.
      </p>
      <p>
        She nodded and <ListCard expansions={["read aloud"]} tag="c6-mizora"
          nextUnit="section"
          card={<span>I liked to ask shy kids to read out loud as a way of getting them comfortable
          with speaking in class.</span>} />:
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.mizora]} />
    </section>,
    <section>
      <p>“Thank you, María, that was an excellent example.” She blushed.</p>
      <p>The door in the back of the lecture hall opened, and to my surprise, Alice Gilman slid in and
      took a seat towards the back. I nodded to her in acknowledgment, but she didn’t respond.</p>
      <p>I addressed the class again. “Remember, this was time before refrigeration, when
        food products were frequently spoiled or adulterated. Strange as it seems to us, the idea of substituting real foods with
      artificial ones was considered a huge step forward.”</p>
      <p>
        “Many of the actual utopian communities, including ours here, practiced vegetarianism,” Lillian added.
      </p>
      <p>“With reason,” Gilman said, unexpectedly. A couple students turned around and glared at her.</p>
      <p>“I understand not wanting to eat meat,” María ventured, “but it’s hard to imagine anyone today wishing
      to eradicate all animals—”</p>
      <p>“Animals stink,” Gilman said. “Civilized people shouldn’t live with that filth.”</p>
      <p>
        There was an <ListCard expansions={["awkward"]} card={<span>Gilman must be fun at faculty parties.</span>} tag="c6-parties" /> silence.
      </p>
      <p>“Thank you for joining us, Ms. Gilman,” I said, <ListCard tag="c6_smiling"
        expansions={["smiling"]} card={<span>Through gritted teeth.</span>} />. <Map from={inventory.c5_direction}
          to={{
            there: `“Would you mind staying after class so we can speak?”`,
            burglary: "I‘d planned on breaking into Lynn’s office after class, so I’d need to send her on some kind of errand to keep her out of the way.",
            archaeologist: "I was annoyed she interrupted my class and since I decided not to seek her help, I’d rather have her out of my way while I went journal-hunting."
          }} />
      </p>
      <p>
        I returned to lecturing. “Other recurring themes that you found surprising?”
      </p>
      <p>
        “Education,” Charlotte volunteered. “A lot of novels mention the subject of universal schooling, especially
        in the books <ListCard tag="c6_authors" expansions={["authored by women"]} card={<span>I had expanded
        Lynn's male-dominated reading list quite a bit.</span>} />.”
      </p>
      <p>
        “Terrific point, and critical to understanding the history of this college. What’s an example?”
      </p>
      <p>
        Charlotte started to <List expansions={[["read"], ["read"]]} tag="c6_hence" />:
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.hence]} />
    </section>,
    <section>
      <p>“Education reform <i>was</i> important.” I said. “The system of state-run public schools that we know today was still
        being formed in the mid-1800s. And while we might take universal free education for granted as
        obvious social good, some thinkers
        in the 19th century—even women—saw education mostly as an opportunity to <ListCard expansions={["remake"]}
          tag="c6_remake" card={<span>Or worse—many of these utopian novels, and the real-life communities,
          were enthusiastically eugenicist.</span>} /> minority and immigrant populations
      in their own idealized image.”</p>
      <p>Gilman was frowning and sat with her arms crossed, but remained silent. It was María who spoke up
      again: “Can I read from something else?”</p>
      <p>
        “Of course!”
      </p>
      <p>
        “Ella Merchant, the librarian, gave me this the other day. She
        knew I was taking this class and wasn’t sure what book it was
        from—she’d just found it among some Harmonian papers.” She stood up, and read
        in a <ListCard expansions={["more confident voice"]} tag="c6_voice" card={<span>I have to admit,
        she made me proud.</span>} nextUnit="section"/>:
      </p>
    </section>,
    <section>
      <blockquote>
        <p>As the village awakened, I was aware of a profound absence: I saw no men at all.
          Had they all been eliminated in
          this time and place? Eventually they did appear, but so few, doing mostly menial work, while
          tall women in strange clothing—some wearing trousers, or next to nothing at all—drifted
          impassively along without a care in the world.
        </p>
      </blockquote>
      <p>“Isn’t that interesting, Ms. Fuller?” she asked me. “It reminded me of the novel we read last class, by Annie Cridge—”</p>
      <p>Gilman had risen. “María,” she said, “may I see that—” </p>
      <p>But I was closer and snatched the paper from the girl first. “No need, Ms. Gilman. <Map from={inventory.c5_direction}
        to={{
          there: "Perhaps we can return this to Lynn's full collection of documents, after lecture?",
          burglary: "Maybe you could find me similar examples for our next class?",
          archaeologist: "I'll ensure this is kept somewhere safe."
        }} />”
      </p>
      <p>
        I <List expansions={[["looked down"], ["looked down"]]} tag="c6-page" /> at the page. This was an original
        19th century document, written in one familiar hand and heavily annotated in another:
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.frag4]} note={true} />
    </section>,
    <section>
      <p>Many of the students were talking at once. Charlotte was asking if this book was on the assigned reading list.
        María noted that the story sounded like a
        description of Blithedale itself. Lillian was scowling, flipping through her own notes. I fixed my eyes on Gilman, who was
        backing out towards the door.
      </p>
      <p>“Thank you, María,” I said. “I did find that very illuminating.”</p>
      <NextChapter chapter={7} />
    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
