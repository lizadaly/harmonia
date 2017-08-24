const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, ManyMap, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'
import * as actions from '../actions'
import ListCard from '../components/listCard'
import Reader  from '../components/reader'
import { docs } from '../docs'

export default ({currentSection, inventory, cards}) => {
  const sections = [
    <section>
      <p>
        I was a <ListCard expansions={["puff"]}
          tag="c10-d1"
          forceDir="down"
          card={<span>of <ListCard expansions={["atoms"]}
            tag="c10-d2"
            forceDir="left"
            card={<span>rushing through a tunnel
            </span>} /> <Map from={inventory["c10-d2"]}
              to={{
                _undefined: "",
                _any: <span>or a cloud of <ListCard expansions={["dust"]}
                  tag="c10-d3"
                  forceDir="right"
                  card={<span>floating in a hot room
                  </span>} />
                </span>

              }} />

          </span>} />
      </p>
    </section>,
    <section>
      <heading>
        <h2>Chapter 10</h2>
        <h3>November 20, 1889</h3>
        <blockquote>
          "I would not exchange this life for any I have ever led. I could not feel content with the life of
          isolated houses and the conventions of civilization."<br/>
          —Personal letter, Marianne Dwight, resident of Brook Farm (1844)
        </blockquote>
      </heading>
      <p>
        When I returned to myself, I felt completely numb, like I'd slept on all my limbs simultaneously.
        I was lying on the floor of the chamber. There was no roar of the machine; the room was silent and still.
      </p>
      <p>
        I managed to drag myself onto the wooden platform, now magically intact. The wood was new but not
        perfectly hewn. I could see because the room was dotted with small kerosene lamps. They were flickering,
        soon to go out.
      </p>
      <p>
        I descended the platform carefully, mostly crawling. I fell the last few feet off the ladder and landed
        in a heap. I was lucky to not twist an ankle.
      </p>
      <p>
        The machine gleamed; so much shiny brass and copper that the weak lamps were amplified in a brilliant
        gold glow.
      </p>
      <p>
        In a far corner, a dead man was slumped against the wall. He had exuberant brown muttonchops that were tinged with gray,
        and was dressed in a simple wool vest, collared shirt, and trousers. I assumed this was Ignatius Cadwell.
      </p>
      <p>
        I was able to stand now, barely, and made my way across the cavern like a toddler, grabbing pieces of the
        device for stability as I went. Next to <ListCard expansions={["Cadwell"]}
          tag="c10-cadwell"
          card={<span>I'd seen the dead, but only at funerals. I avoided looking directly at him,
            but I didn't see any obvious wound or injury. I assumed, like Lynn had, that he'd died of <ListCard expansions={["dehyrdration"]}
              tag="c10-dehydr" forceDir="down"
              card={<span>And if he'd been trapped down here, I was too.</span>} />.
          </span>}/> lay a bucket, a tin cup, and, crucially, a <List expansions={[["journal"], ["journal"]]} tag="c10-journal" />.
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.frag7]} />
    </section>,
    <section>
      <p>
        I recognized that handwriting. "Lynn?" I called out, my voice echoing in the massive chamber.
      </p>
      <p>
        A weak voice replied from far off: "In here."
      </p>
      <p>The tunnel from which I'd entered the cavern was fully blocked, but the other entrance had been
        imperfectly cleared. I kicked bricks and boards aside and pushed my way through until the
        tunnel was clear. I'd forgotten to bring a lamp; everything was absolutely black. I emerged
        in   <Map from={inventory.c5_direction}
          to={{
            archaeologist: "what I recognized as the old cellar beneath the Science Center",
            _any: "an old root cellar, flanked on one side by a wooden trough full of sand and wooden storage crates on the other"
          }}
             />.
      </p>
      <p>
        <Map from={inventory.c5_direction}
          to={{
            archaeologist: "Instead of ending in a hole that led to a modern basement, the storage room ",
            _any: "The storage room "
          }}
        /> ended in an earthen staircase topped with wood boards, and closed door. The space was lit by
        a flickering gas lantern and a tantalizing rectangle of sunlight around the doorframe.
      </p>
      <p>
        A man I presumed was Professor Jeffrey Lynn lay at the top of the stairs. He looked much more
        like an idealized college professor than I did, with a Santa Claus white beard and serious
        glasses. His wild
        expression suggested he thought he was hallucinating.
      </p>
      <p>"My name's Abby Fuller," I said. "I'm your substitute teacher."</p>
      <p>
        He barked a laugh and struggled to sit up. "Does my substitute teacher have any water?"
      </p>
      <p>
        "I'm afraid I didn't pack appropriately." I nodded at the door. "May I?"
      </p>
      <p>
        The knob turned freely but the door didn't budge when I pushed on it. "I think it's barracaded on the other side,"
        Lynn said. "I spent, I dunno, a day, maybe, just getting through the bricks. I was just too tired to—"
      </p>
      <p>
        "I'm not tired," I lied. I <List
          tag="c10-door" expansions={[["pushed—"], ["pushed hard—"], ["rolled my eyes and slammed into the door with my shoulder."]]} />
      </p>
    </section>,
    <section>
      <p>
        A metal bar that had been braced up against it clattered to the floor, and the cellar door popped open.
      </p>
      <p>
        Immediately my senses were assaulted by the foul smell of burnt wood and rubber. The room itself was
        stone and had survived the worst of it, but everything was covered in a layer of blackened soot.
        It was sunlit because the ceiling had collapsed, and all the windows were empty of glass. I could see through to more
        broken rooms, arranged around a central space completely littered with the remains of the roof.
        The peak of the Astrolith was just visible among the ruins. Nobody was around.
      </p>
      <p>
        "Ah, yes, the <ListCard tag="c10-hall"
          expansions={["Great Hall"]}
          card={<span>Even with a time machine, Lynn had arrived too late to witness his life's passion.</span>} />," Lynn said sourly. He slid himself out through the doorway but then rested against the lintel.
      </p>
      <p>
        "I'll find some water," I said. I noticed that he was dressed archaically, with a
        simple vest and pocketwatch. "I guess you're better dressed for the occasion."
      </p>
      <p>
        "We agreed I'd go for just an hour—" he said, his voice a whisper. "But I knew when I saw her face as she threw the
        lever; she had no intention of bringing me back."
      </p>
      <p>
        I nodded grimly. "I'll have to try not to be seen," I said. "But I'll be back soon, I promise."
      </p>
    </section>

  ]

  return <RenderSection currentSection={currentSection} sections={sections}  />
}
