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
        <h2 style={{marginTop: "10em"}}>Chapter 10</h2>
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
              card={<span>And if we were both trapped down here, I might too.</span>} />.
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
        "Ah, yes, the Great Hall," Lynn said <ListCard tag="c10-hall"
          expansions={["sourly"]}
          card={<span>I understood his despair. Even if a time machine, he didn't get to see the subject of his life's work.</span>} />.
        He slid himself out through the doorway but then rested against the lintel.
      </p>
      <p>
        "I'll find some water," I said. I noticed that he was dressed archaically, with a
        simple <ListCard expansions={["vest"]}
          tag="c10-dressed" card={<span>A pocketwatch dangled from his vest, which I found obscurely
          charming yet, in a way, fundamentally useless.</span>} /> and wool pants. "I guess you were prepared to meet the locals."
      </p>
      <p>
        "It was my first time through; we agreed I'd go for just an hour," he said, his voice a whisper. "But I saw her face as she threw the
        lever; she had no intention of bringing me back."
      </p>
      <p>
        I nodded grimly. "I'll have to try not to be seen," I said. "But I'll <List expansions={[["return"], ["return"]]}
                                                                                tag="c10-return" /> soon, I promise."
      </p>
    </section>,
    <section>
      <p>***</p>
      <p>
        It was a bright, cloudless day, warm but with a stiff cool breeze, probably late September. Without the
        Astrolith as an anchor I'd have never recognized where I was. The imposing brick edifices were gone, as were
        most of the tall trees. Instead of a tidy monolithic green lawn, the ground was covered in a patchwork of
        dirt, clover, and crabgrass. The air smelled of horses.
      </p>
      <p>
        Cadwell described the future as quiet, but I suppose it's what you're used to. For me, this was true quiet—
        no distant
        buzz of airplanes, low-frequency hum of HVAC systems, or slopping idling of trucks.
        The laughter of crows, the sigh and shuffling of farm animals,
        the sound of a slow wagon crunching over gravel, that was the modern cacophany of life for him.
        To me, these were the sounds of peace, and retreat.
      </p>
      <p>
        The slope was steeper now, and even the flatter areas were sinuous and bumpy. Where the gymnasium stood for
        me was here a large vegetable garden, shaded by a few twisted pear trees and bordered on one end by
        row of yews. A woman in a plain white
        cap was pulling up greenish pumpkins from a mass of vines. I let her see me.
      </p>
      <p>
        "Hello," I said, cautiously. I smiled and held out my hands, palms up.
      </p>
      <p>
        "Hello," she said. She eyed my clothes, lingering on my jeans, but said nothing more.
      </p>
      <p>
        "Do you know where I could get some water?"
      </p>
      <p>
        "There's no more running water since the Phalanstery burned. There's a cistern there," she said, nodding
        towards the row of <ListCard expansions={["stone houses"]} tag="c10-houses"
          card={<span>I hadn't noticed them behind the yew trees. There were eight now. </span>} />.
        "Here, take this," and emptied a pail of
      pears into her basket of pumpkins.</p>
      <p>I leaned into the garden and took the pail from her gratefully. She was at least a head shorter than me.
        Tendrils of her blonde hair poked out from beneath the cap,
        and up close I could see that her neck was deeply <ListCard expansions={["scarred"]} tag="c10-scar"
          card={<span>Remnants of some infection I almost certainly had never needed to worry about.</span>} />.
        "Which community are you from which allows such reformed attire?"
      </p>
      <p>
        "Blithesdale Farms," I improvised. "Please excuse me, I need to bring this to my friend urgently." My own thirst
        was now overwhelming.
      </p>
      <p>
        She nodded, disappointed. "If you want my advice, you'll leave soon as you can," she said, in a low voice.
        "This is no place for a woman like you."
      </p>
      <p>
        I wanted to say I'd return to thank her again, but I didn't want to lie. I just nodded, and scrambled over a hedgerow
        and between the yew trees. A young girl in a neat brown dress, about six years old, and a boy of the same age were playing in the dirt behind the Adams
        house; they saw me, wide-eyed, but said nothing.
      </p>
      <p>
        The cistern was just a circular stone hole, roughly mortared inside, next to the largest of the stone houses
        (which didn't exist in my time). A lead pipe ran down the length of the house and disappeared into the
        hole. I couldn't see any water inside, but there was a rope with a <List expansions={[["hook"], ["hook"]]}
                                                                             tag="c10-hook" /> affixed nearby.
      </p>
    </section>,
    <section>
      <p>
        I put the hook over the handle on my pail and lowered it hand-over-hand while the girl watched. Eventually I
        felt it hit the surface of water I could tell the pail just flopped over and floated. The lightweight tin wasn't heavy
        enough.
      </p>
      <p>
        Almost sobbing I pulled it back up again and gratefully drank the inch of sandy water at the bottom.
        The girl had approached me, and I saw she held a heavy smooth stone in his hand. For one wild moment I
        thought she meant to hit me with it, but when she  <List expansions={[["held it out"], ["held it out"]]}
                                                           tag="c10-held" /> I understood.
      </p>

    </section>,
    <section>
      <p>I dropped the stone in the bucket and lowered it again. This time I heard the satisfying <i>plunk</i> as
        the pail sunk below the water. Once full, it was surprisingly heavy. I braced myself against the side of the cistern
        and pulled harder. The girl, who had still said not a word, reached down and pulled with me. The boy
        just watched from afar.
      </p>
      <p>
        When the pail emerged into daylight I reached down and hoisted it the rest of the way. This time the water,
        drawn from further below, was clean and cool.
      </p>
      <p>
        "Thank you," I said to her. The pail was still mostly full and I carefully retraced my steps towards the Great Hall,
        trying not to spill. She trotted along beside me, the boy forgotten.
      </p>
      <p>
        "What's your name?" I said.
      </p>
      <p>
        "Lillian," she replied.
      </p>
      <p>
        "I know a young woman named Lillian," I said. "You <List expansions={[["remind me a little of her—"], ["remind me—"]]}
                                                             tag="c10-remind" />
      </p>
    </section>,
    <section>
      <p>The girl grabbed my arm suddenly. "This way," she said. Instead of crossing the broad open field to the burnt-out
        husk, she pulled me into a narrow one-story clapboard building, shaped like a stable.
      </p>
      <p>
        The interior was effectively a single room, a long communal kitchen. A dozen women, most dressed in loose pants
        under skirts, moved between the two stone hearths and several massive work tables. There were stations for bread
        and stations for soup and large cabinets full of white plates; I didn't see any meat. Most women were bare-headed, their hair
        tied back in loose buns. I
        stopped short at the entrance,
        and they slowly began to notice me, pausing their work to just stare at me.
      </p>
      <p>
        "Come through here," little Lillian urged. I weaved between the women, muttering apologies. The girl led me out a wide
        barn-like doorway, where a few horses and wagons were tied, and then immediately into another large
        communal building.
      </p>
      <p>
        "This is the Children's Hall," she explained. The rooms reminded me a bit of my faculty residence, but
        rather than individual bedrooms, each was filled with cots and cradles. "I live here," she added.
      </p>
      <p>
        "You don't live with your parents?" I asked, and she looked at me with such confusion that I changed
        tack. "Why did you take me this way?"
      </p>
      <p>
        We exited through the other end of the nursery and arrived at rear of the
        Great Hall. "So the men wouldn't find you," she said.
      </p>
    </section>

  ]

  return <RenderSection currentSection={currentSection} sections={sections}  />
}
