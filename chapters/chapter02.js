const React = require('react')
import { connect } from 'react-redux'
import { Map, List, FromInventory, RenderSection, NextChapter, AllButSelection} from 'windrift'

import Reader  from '../components/reader'
import ListCard from '../components/listCard'

import { docs } from '../docs'

export default ({currentSection, inventory}) => {
  const sections = [
    <Reader inventory={inventory} docs={[docs.notes]} />,
    <section>
      <p>I flipped the page over and read the excerpt Lynn had picked out. It was from
        chapter three of the novel:
      </p>
      <Reader inventory={inventory} docs={[docs.bellamy]} />
    </section>,
    <section>
      <p>The next excerpt was from an English utopian novel. I assumed he was
        setting up a lecture on the mechanisms by which these travelers
        discover the "perfect society":
      </p>
      <Reader inventory={inventory} docs={[docs.age1]} />
    </section>,
    <section>
      <p>Curious, I turned to the last page on the pile. It wasn't a photocopy or
        printout like the others, but instead a fragile piece of
        yellowed writing paper, <ListCard expansions={["handwritten"]}
          tag="c2_writing"
          card={<span>I've reproduced it here in type to make it more readable.</span>} />  in a looping, archaic style:
        </p>
      <Reader inventory={inventory} docs={[docs.frag1]} />
    </section>,

    <section>
      <p>The papers were abruptly snatched out of my hand.
      </p>
      <p> "Excuse me, what are you doing?" I looked up to
        see a woman standing over me and regarding me with suspicion.
        Her hair was long and unstyled, and she wore an ankle-length plain blue dress and carried a flashlight.
        The beam was pointed directly into my face.
      </p>
      <p>I reminded myself that I was invited here and didn't need to <ListCard
        expansions={["apologize"]}
        tag="c2-apologize"
        card={<span>I guess technically I was trespassing in someone's office.</span>} />.
        "I'm Abby Fuller. I'm substituting for Jeffrey Lynn."
      </p>
      <p>"Oh," she said, lowering the light. "I heard someone was coming."
      </p>
      <p>
        "That's right," I said cautiously. "There was no one here when I arrived and—
        look, do you know where I'm supposed to be staying? I'm very tired."
      </p>
      <p>"I assume the guest faculty quarters. I can take you to them." She turned without saying anything further,
        tucking the papers under her arm and locking the door on her way out.
      </p>
      <p>We went back to my car to get my things. She didn't offer to help with my <ListCard expansions={["bags"]} tag="c2-bags"
          card={<span>They were pathetically few of them anyway. Shouldn't a grown woman have more <em>stuff</em>?</span>} />.
          At least the snow had stopped, turning to a fine, cold mist.
      </p>
      <p>
        The faculty residence was as dark and quiet as the rest of the campus. If anyone else was living there,
        they weren't night owls. "Let's put you in here," she said, gesturing into a room with a single small window
        and <ListCard expansions={["spartan"]} tag="c2-room"
        card={<span>Honestly I was just happy I wasn't in a snow-filled ditch on the side of the road.</span>} /> wooden furnishings.
        I dropped everything on the floor, mumbled my thanks, and collapsed on the bed as she closed the door. Only
        as I was drifting off did I realize she'd never
        told me her name.
      </p>
      <NextChapter chapter={3} />

    </section>
        ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}
