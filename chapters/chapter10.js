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
                    atoms: <span>and a cloud of <ListCard expansions={["dust"]}
                      tag="c10-d3"
                      forceDir="right"
                      card={<span>floating in a still room
                      </span>} />
                    </span>
              }} />
            <Map from={inventory["c10-d3"]}
              to={{
                    _undefined: "",
                      _any: <span><br/><br/> and a spray of <ListCard expansions={["mist"]}
                        tag="c10-d4"
                        forceDir="center-down"
                        nextUnit="section"
                        card={<span>from a wave.
                        </span>} />
                      </span>
              }} />
          </span>} />
      </p>
    </section>,
    <section>
      <heading>
        <h2 style={{marginTop: "15em"}}>Chapter 10</h2>
        <h3>November 20, 1889</h3>
        <blockquote>
          "I would not exchange this life for any I have ever led. I could not feel content with the life of
          isolated houses and the conventions of civilization."<br/>
          —Personal letter, Marianne Dwight, resident of Brook Farm (1844)
        </blockquote>
      </heading>
      <p>
        When I returned to myself my body was a useless marionnette, like I'd slept on all my limbs at once.
        I was lying on the floor of the chamber. There was no roar of the machine; the room was silent and still.
      </p>
      <p>
        The chamber door was unlocked now; I clumsily fumbled it open and dragged myself out. The upper platform
        was intact and smelled of fresh wood. Small kerosene lamps lit the cavern but they were flickering,
        soon to go out.
      </p>
      <p>
        I descended the platform mostly by crawling. I fell the last few feet off the ladder and landed
        in a <ListCard expansions={["painful heap"]} tag="c10-heap"
          card={<span>I was lucky to not twist an ankle.</span>}/>. Feeling was coming back in my extremities,
        along with a powerful thirst.
      </p>
      <p>
        The machine gleamed with so much shiny brass and copper that the cavern was saturated by a warm
        gold glow.
      </p>
      <p>
        By the eastern tunnel, a dead man was slumped against the wall. He had exuberant brown muttonchops that were tinged with gray,
        small silver-framed glasses, and was dressed in a simple wool vest, collared shirt, and trousers. I assumed this was Ignatius Cadwell.
      </p>
      <p>
        I was able to stand now, barely, and made my way across the cavern like a toddler, grabbing at
        objects hand-over-hand for stability. Next to Cadwell's <ListCard expansions={["body"]}
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
        I recognized the handwriting in that note. "Lynn?" I called out, my voice echoing in the massive chamber.
      </p>
      <p>
        A weak voice replied from far off: "In here."
      </p>
      <p>I'd entered from the southern tunnel and it was indeed fully blocked, but the other was just
        barely passable. I kicked rocks and boards aside and squeezed my way through, emerging

        in   <Map from={inventory.c5_direction}
          to={{
            archaeologist: "what I recognized as the old root cellar beneath the Science Center",
            _any: "an old root cellar, flanked on one side by a wooden trough full of sand and wooden storage crates on the other"
          }}
             />.
      </p>
      <p>
        <Map from={inventory.c5_direction}
          to={{
            archaeologist: "This time, the storage room ",
            _any: "The storage room "
          }}
        /> ended in an earthen staircase leading to a closed door. The stairwell was lit by
        a flickering gas lantern and a tantalizing rectangle of sunlight around the doorframe.
      </p>
      <p>
        A man I presumed was Professor Jeffrey Lynn lay at the top of the stairs. He looked much more
        like an idealized college professor than I did, with a Santa Claus beard and a crumpled bowtie.
        His wild
        expression suggested he thought I was a hallucination.
      </p>
      <p>"My name's Abby Fuller," I said. "I'm your substitute teacher."</p>
      <p>
        He barked a laugh and struggled to sit up. "Does my substitute teacher have any water?" His voice was in tatters.
      </p>
      <p>
        "I'm afraid I didn't pack appropriately." I pointed at the door. "May I?" He nodded and slid over to accommodate
        me at the top of the steps.
      </p>
      <p>
        The knob turned freely but the door didn't budge when I pushed on it. "I think it's barracaded on the other side,"
        Lynn said. "I spent, I dunno, a day, maybe more, just getting through the tunnel. I was just too tired to—"
      </p>
      <p>
        "I'm not tired," I lied. I <List
          tag="c10-door" expansions={[["pushed—"], ["pushed hard—"], ["rolled my eyes and slammed into the door with my shoulder."]]} />
      </p>
    </section>,
    <section>
      <p>
        A scorched metal bar had been braced up against it; it clattered to the floor and the cellar door popped open.
      </p>
      <p>
        Immediately my senses were assaulted by the foul smell of burnt wood and rubber. The walls were
        stone and had survived the worst of it, but everything was covered in a layer of blackened soot.
        Sunlight streamed down through the collapsed ceiling, and all the windows were empty of glass. I could see through to more
        broken rooms, arranged around a central space completely littered with the remains of the roof.
        The peak of the Astrolith was just visible among the ruins.
      </p>
      <p>Nobody was around. The air was drier and
        warmer than—when I'd left.
      </p>
      <p>
        "Ah, yes, the <ListCard tag="c10-hall"
          expansions={["Great Hall"]}
          card={<span>Even with a time machine, Lynn had arrived too late to witness his life's passion.</span>} />," Lynn said sourly. He slid himself out through the doorway but then rested against the lintel.
      </p>
      <p>
        "I'll find some water," I said. I noticed that he was dressed archaically, with a
        simple <ListCard expansions={["vest"]}
          tag="c10-dressed" card={<span>A pocketwatch dangled from his vest, which I found obscurely
          charming yet, in a way, fundamentally useless.</span>} /> and wool pants. "I guess you were prepared to meet the locals."
      </p>
      <p>
        "We agreed I'd go for just an hour, my first time," he said, his voice a whisper. "But I saw her face as she threw the
        lever; she had no intention of bringing me back."
      </p>
      <p>
        I nodded grimly. "I'll have to try not to be seen," I said. "But I'll be back soon, I promise."
      </p>
    </section>

  ]

  return <RenderSection currentSection={currentSection} sections={sections}  />
}
