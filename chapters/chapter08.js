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
        <h2>Chapter Eight</h2>
        <blockquote>
          "It will be obvious that the old state of society
          will not bear one moment’s comparison with the new, and that
          the only practical difficulty will be to restrain men from
          rushing too precipitously from the old to the new." <br/>
          —<i>A New View of Society</i>, Robert Owen (1813)
        </blockquote>
      </heading>

      <Map from={inventory.c5_direction}
        to={{
          archaeologist: <div>
            <p>
              I wasn't here a week and I already felt like I was running out of time.
            </p>
            <p>
              Dean Orellana hadn't orchestrated Lynn's disappearance, but now that he
              was conveniently out of the way, she had a window in which to get
              the construction project back on track before winter set in.
            </p>
            <p>The construction crew had unearthed the smaller, secondary tunnel
              sometime this summer. Lynn saw significance in it, but it had
              been <ListCard tag="c8-bricked"
                expansions={["bricked up"]}
                card={<span>Why, and by whom?</span>} /> in the utopians' era.
              Lynn had also felt the pressure of time,
              and without waiting for permission,
              smashed through it. I didn't get to see what was inside.
            </p>
            <p>
              The notebook ended in August, but he didn't disappear until at least a week into
              September. Surely he had more <ListCard tag="c8-notes"
                expansions={["notes"]}
                card={<span>If he was anything like me, his work was spread over
                multiple notebooks, computer files, and napkins.</span>}/> on the artifacts he recovered from whatever
              device it was that he found in the chamber beyond the tunnel.
            </p>
            <p>I <ListCard expansions={["jumped"]} card={<span>I hadn't even realized I had a phone.</span>} tag="c8-phone" /> as the phone in my room rang. "Hello?"
          </p>
          <p>"It's me," said Lillian. "Listen, I think I know where Professor Lynn might've kept more documents."</p>
          <p>When she didn't immediately continue, I said, "Okay, where?"</p>
          <p>"Just—" I heard her cover the phone and talk to someone else. "Meet me down by Adams House."</p>
          <p>"I have no idea where that is."</p>
          <p>"One of the stone houses by the gymnasium. I'll wait for you outside. Bring a <ListCard expansions={["flashlight"]} tag="c8-light"
            nextUnit="section"
            card={<span>At least I had one of these.</span>} />."</p>
          </div>,
          burglary: <div>
            <p>
              We waited until after dark to meet up by the row of picturesque stone houses along the west side
              of campus, by the main thoroughfare. They were four, all neatly hewn stone cubes that, over the
              years, had been extended and renovated in slightly different ways. Lynn's house was one of the
              smaller ones, set back a bit.
            </p>
            <p>
              "Are we all okay with doing this?" I asked.
            </p>
            <p>Ella Merchant looked unsure, but then sighed. "Jeffrey would want us to find out what happened to him," she said.
            Lillian nodded in agreement.</p>
            <p>"Okay then."</p>
            <p>Lillian had brought flashlights for all of us, and we took turns circling the property.
              "Looks like our options are <List expansions={[["a window above the trash barrels", "a bulkhead door", "the rear entrance"],
                ["a window above the trash barrels", "a bulkhead door", "the rear entrance"]
              ]} tag="c8_entrances" />," she said.
            </p>
          </div>,
          there: <div></div>
        }} />
    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          archaeologist: <div>
            <p>* * * *</p>

            <p>
              When I remembered her telling me that the old stone homes were faculty residences, it was immediately obvious where I was going.
              Why hadn't I <ListCard expansions={["thought"]} tag="c8-thought" card={<span>Maybe because my experience in burglary was on par with my
              professorial ones.</span>} /> to search Lynn's house?
            </p>
            <p>
              Lillian was shuffling her feet in the cold crisp air, flashlight pointed at the ground. Standing very close to her
              was <Map from={inventory.c2_direction}
                to={{
                                  curiosity: "Walter, to my surprise",
                dean: "a young man, much to my surprise" }}  />.
            </p>
            <Map from={inventory.c2_direction}
              to={{
                curiosity: <div>
                  <p>I tilted my head curiously and he took a couple of steps away from her, looking embarrassed. I suppressed a smile.</p>
                  <p>Lillian said, "Walter told me what you found in the cellar. I wish I'd gone down there sooner."</p>
                </div>,
                dean: <div>
                  <p>"This is Walter," Lillian said. "Dean Orellana's assistant."</p>
                  <p>"Nice to meet you," I said. He was a little older than Lillian, probably my age, with a serious-looking face
                  and a dapper winter coat. "I assume the Dean doesn't know you're here?"</p>
                  <p>"No," Lillian said with emphasis.</p>
                  <p>"Don't worry about me," I said. "I'm sure I'll need to call in a favor from you sometime." I tried to smile at him reassuringly.</p>
                  <p>Lillian continued, "Ella told me what you found in the cellar. I wish I'd gone down there sooner."</p>
                </div> }}  />
            <p>
              "Do you think it's safe now?"
            </p>
            <p>
              "It doesn't matter, the entrance has been locked," Walter said. "City orders, it's off-limit now except for the construction crew."
            </p>
            <p>"So that's why we're going to break into Lynn's house?"</p>
            <p>"No need," Lillian said, looking up a little adoringly at Walter. "We have a key."</p>
            <p>"Technically that's<List expansions={[[" still breaking—"], ["—"]]} tag="c8_breaking" nextUnit="none"/>"</p>
            <Map from={inventory.c8_breaking}
              to={{
                _undefined: "",
                  _any: <div>
                    <p>
                      "So it's fine, let's go," Lillian said, leaving the two of us behind and walking straight into Lynn's house.
                    </p>
                    <p><Map from={inventory.c2_direction}
                      to={{
                      dean: "My new buddy " }} /> Walter and I exchanged a look and followed her, turning on our flashlights as we
                      entered the home.
                    </p>
                    <p>
                      The house was smaller than some apartments I've had—just one floor, and three rooms with a modern addition containing the bathroom.
                      The furnishings were generic and had probably come with the housing. I was disappointed as there were no signs of scholarly
                      work happening here; he must've done it all at the office.
                    </p>
                    <p>
                      I went into the kitchen following the <ListCard tag="c8-spoiled-food" expansions={["scent of spoiled food"]} card={<span>It was a relief
                      to smell nothing worse.</span>} />. The flashlight beam illuminated a barely stocked kitchen, consistent with someone who mostly
                      at the dining hall. One thing stuck out—a  <List expansions={[["cellar door"], ["cellar door"]]} tag="c8_door" /> that had been
                      left open.
                    </p>
                  </div>
              }} />
          </div>,
          burglary: <div>
            <Map from={inventory.c8_entrances}
              to={{

                barrels: <div>
                  <p>"Do these old houses have air conditioning?" I asked.</p>
                  <p>"If they did, it'd be a window unit," the archivist said.</p>
                  <p>"It was still warm when he disappeared. That one's probably not locked." I motioned to Lillian, who stabilized one of the plastic bins while I
                    clambered awkwardly up onto it. It wobbled in an alarming way, but I was able to
                    slide the window up and hoist myself through.
                  </p>
                  <p>Lynn's bed was pushed up directly under it so I tumbled in without harm. The house was
                    barely bigger than an apartment, indifferently decorated in the way of furnished rentals.
                    I was disappointed to find no sign of scholarly work being done; he must've taken it all to the office.
                    I let the others in through the front door; <Map from={inventory.c2_direction} to={{curiosity: "Merchant", dean: "Ella"}} /> went straight to the kitchen, following the smell of spoiled food.
                  </p>
                  <p>
                    "The Dean really should've reported him missing," I heard her say. Then, "Ally? The cellar door is <List expansions={[["open"], ["open"]]} tag="c8-open1" />."
                  </p>
                </div>,
                entrance: <div>
                  <p>"Let's try the back door first," I said. The rear entrance was hidden by thick foilage, and though it
                    was locked, the door was old and flimsy—and had a window. "Stand back," I said, wincing, and punched
                  through the glass with my flashlight.</p>
                  <p>It broke with a satisfying crunch. Lillian unrolled her scarf and used it to wipe the remaining
                  glass away, then unlocked the door through the open pane.</p>
                  <p>"That was exciting," <Map from={inventory.c2_direction} to={{curiosity: "Merchant", dean: "Ella"}} /> said.</p>
                  <p>
                    We entered through the kitchen, which smelled horrible. Lillian cracked open the fridge and then
                    recoiled. "Spoiled milk," she said, "I think."
                  </p>
                  <p>
                    The archivist cast her flashlight beam around the room and shook her head. "The Dean really should've
                    reported him missing," she said. Then, "Ally? The cellar door is <List expansions={[["open"], ["open"]]} tag="c8-open1" />."
                  </p>
                </div>,
                door: <div>
                  <p>
                    "Where does this bulkhead go?" I asked.
                  </p>
                  <p>"These houses would've had root cellars originally," said <Map from={inventory.c2_direction} to={{curiosity: "Merchant", dean: "Ella"}} />.
                    "They probably put the furnaces and such in them."
                  </p>
                  <p>The bulkhead door was rusted, but not very old. I pulled on the handle with force, and nearly
                  fell backwards as it flew open easily.</p>
                  <p>"That could've been worse," <Map from={inventory.c2_direction} to={{curiosity: "Merchant", dean: "Ella"}} /> said.</p>
                  <p>A few concrete steps led down, and then a primitive wooden door, about half-size, was set into the
                  foundation. I wasn't even sure I could fit through.</p>
                  <p>
                    "I'll go," Lillian said, immediately disappearing into the cellar.
                  </p>
                  <p>The archivist and I waited by the entrance for several long minutes. Just as I started to worry,
                    Lillian opened the front door, her face grave. "You're gonna want to see this."
                  </p>
                </div>
              }} />
          </div>,
          there: <div></div>
        }} />

    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          archaeologist: <div></div>,
          burglary: <div>
            <p>
              The cellar door was next to the old stone hearth, now filled with boxes of unpacked belongings rather than
              a spit and cast-iron bots. It was a small door, obviously original, and very dark.
            </p>
            <p>
              I thanked <Map from={inventory.c2_direction} to={{curiosity: "Merchant", dean: "Ella"}} /> for her help in
              getting us inside and told her to go home. "I don't want anyone else losing their job over this." She looked
              grateful and promised to assist us in any way with whatever materials we came back with.
            </p>
            <p>
              I turned to Lillian. "You too."
            </p>
            <p>
              "No way, I—"
            </p>
            <p>
              "You'll get expelled, and good luck getting into another school. Go home."
            </p>
            <p>
              "No," she said, folding her arms.
            </p>
            <p>
              "Then wait outside."
            </p>
            <p>
              "It's freezing."
            </p>
            <p>
              "Then go <ListCard tag="c8-gohome" expansions={["home"]} nextUnit="section" card={<span>I guess I was so adamant because I
              recognized how stupid this was.</span>} />."
            </p>

          </div>,
          there: <div></div>
        }} />

    </section>,
    <section>
      <p>
        The cellar wasn't deep—only about five shallow steps and I was standing on a packed earth floor.
        The <Map from={inventory.c8_search}
          to={{
            _undefined: "ceiling",
              _any: <span><ListCard expansions={["ceiling"]} tag="c8_ceiling" card={<span>Nailed-studded
              struts, interrupted by an occasional load-bearing brick pillar.</span>}/></span>
          }} />  brushed
        the top of my head. The <Map from={inventory.c8_search}
          to={{
            _undefined: "floor",
              _any: <span><ListCard expansions={["floor"]} tag="c8_floor" card={<span>When I aimed the flashlight
              beam directly on the floor, a set of prints emerged, clustered around one of the boxes in the far corner.</span>}/></span>
          }} />  had been filling with earth over time, probably after successive floods, and the
        various  <Map from={inventory.c8_search}
          to={{
            _undefined: "boxes",
              _any: <span><Map from={inventory.c8_floor}
                to={{
                  _undefined: <ListCard expansions={["boxes"]} tag="c8_box1" card={<span>Cracked wooden crates,
                  mostly empty or full of more dirt-covered tools.</span>}/>,
                  _any: <ListCard expansions={["boxes"]} tag="c8_box1" card={<span>Cracked wooden crates,
                    mostly empty or full of more dirt-covered tools.<br/><br/>
                    The footprints were clustered around one box pushed up against the cellar <List expansions={[["wall"], ["wall"]]}
                                                                                                tag="c8_move_box" />.
                  </span>}/>
                }} /></span>
          }} /> and tools were all partially buried, and coated in a thick layer of brown dirt. Nothing looked new
        enough to have belonged to Lynn.
      </p>
      <p>
        Yet the door had been <List expansions={[["open"], ["open. Someone had been down here. I'd have to search"]]} tag="c8_search"
                                nextUnit="none" />.
      </p>
    </section>,
    <section>
      <p>I slid the box away from the wall, which was quite easy as it had clearly been dragged this way before. Moving
        the box revealed a narrow tunnel into further darkness<Map from={inventory.c5_direction}
          to={{
            archaeologist: `, a fact which did not surprise me in the least. It was the size and shape of the bricked-up
                     tunnel under the science center, but this one was open. `,
            _any: "."
          }} />
      </p>
    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />

}
