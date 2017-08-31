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
              The entries in that notebook stopped in August, but Lynn didn't disappear until at least a week into
              September. Surely he had more <ListCard tag="c8-notes"
                expansions={["notes"]}
                card={<span>If he was anything like me, his work was spread over
                multiple notebooks, computer files, and napkins.</span>}/> on whatever he found in the chamber beyond the tunnel.
            </p>
            <p>I <ListCard expansions={["jumped"]} card={<span>I hadn't even realized I had a phone.</span>} tag="c8-phone" /> as the phone in my room rang. "Hello?"
          </p>
          <p>"It's me," said Lillian. "Listen, I think I know where Professor Lynn might've kept more documents."
            I heard her cover the phone and talk to someone else. "Meet me down by Adams House."</p>
          <p>"I have no idea where that is."</p>
          <p>"One of the stone houses by the gymnasium. I'll wait for you outside. Bring a <ListCard expansions={["flashlight"]} tag="c8-light"
            nextUnit="section"
            card={<span>At least I had one of these.</span>} />."</p>
          </div>,
          burglary: <div>
            <p>
              We waited until after dark to meet up by the row of picturesque stone houses along the west side
              of campus, by the main thoroughfare. They were five, all neatly hewn stone cubes that, over the
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
          there: <div>
            <p>
              I was lucky that Walter picked up the phone before he left for the day, but he didn't much like my request.
            </p>
            <p>
              "I'd get fired if anyone found out I gave you those keys," he said, worried.
            </p>
            <p>
              "I'll make sure that doesn't happen."
            </p>
            <p>
              There was a long silence on the other end of the line. "They'll be in your <ListCard expansions={["faculty mailbox"]}
                tag="c8-mailbox" card={<span>I learned I have a faculty mailbox.</span>} /> in an hour."
            </p>
            <p>
              "Thank you Walter, I owe you one."
            </p>
            <p>
              I waited until after dark to meet up with my fellow burglars by the row of picturesque stone houses along the west side
              of campus. They were five neatly hewn stone cubes that, over the
              years, had been extended and renovated in slightly different ways. Lynn's house was one of the
              smaller ones, set back a bit.
            </p>
            <p>
              "Are we all okay with doing this?" I asked.
            </p>
            <p>Ella Merchant looked unsure, but then sighed. "Jeffrey would want us to find out what happened to him," she said.
            Lillian nodded in agreement.</p>
            <p>"Okay then."</p>
            <p>Lillian had brought flashlights for all of us. We kept them off until I put the key in the lock and <List expansions={[["opened"], ["opened"]]}
            tag="c8-breakin" /> Lynn's door.</p>
          </div>
        }} />
    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          archaeologist: <div>
            <p>* * * *</p>

            <p>
              I remembered that Lillian said the old stone homes were faculty residences and felt foolish.
              Why hadn't I <ListCard expansions={["thought"]} tag="c8-thought" card={<span>Maybe because my experience in burglary was on par with my
              professorial ones.</span>} /> to search Lynn's house?
            </p>
            <p>
              I found Lillian near the gym, shuffling her feet in the cold crisp air, flashlight pointed at the ground. Standing very close to her
              was <Map from={inventory.c2_direction}
                to={{
                                  curiosity: "Walter, to my surprise",
                dean: "a young man—not a common sight on this campus" }}  />.
            </p>
            <Map from={inventory.c2_direction}
              to={{
                curiosity: <div>
                  <p>I tilted my head curiously and he took a couple of steps away from her, looking embarrassed. I suppressed a smile.</p>
                  <p>Lillian said, "Walter told me what you found under the Science Center. Professor Lynn never let me accompany him, but I wish I'd gone anyway."</p>
                </div>,
                dean: <div>
                  <p>"This is Walter," Lillian said. "Dean Orellana's assistant."</p>
                  <p>"Nice to meet you," I said. He was a little older than Lillian, probably my age, with a serious-looking face
                  and a dapper winter coat. He didn't seem to entirely trust me.</p>
                  <p>Lillian continued, "Ella told me what you found under the Science Center. Professor Lynn never let me accompany him, but I wish I'd gone anyway."</p>
                </div> }}  />
            <p>
              "We could go back now."
            </p>
            <p>
              Walter shook his head. "The entrance has been locked. City orders, it's off-limit now except for the construction team."
            </p>
            <p>"So instead we break into Lynn's house?"</p>
            <p>"No need," Lillian said, looking up a little adoringly at Walter. "We have a key."</p>
            <p>"Technically that's<List expansions={[[" still breaking—"], ["—"]]} tag="c8_breaking" nextUnit="none"/>"</p>
            <Map from={inventory.c8_breaking}
              to={{
                _undefined: "",
                  _any: <div>
                    <p>
                      "Let's go," Lillian said, leaving the two of us behind and walking straight into Lynn's house.
                    </p>
                    <p><Map from={inventory.c2_direction}
                      to={{
                      dean: "My new buddy " }} /> Walter and I exchanged a look and followed her, turning on our flashlights as we
                      entered.
                    </p>
                    <p>
                      The whole house was smaller than some apartments I've had—just three rooms plus a small modern addition containing the bathroom.
                      The furnishings were generic and probably belonged to the college. It looked barely lived-in;
                      he must've spent most of his time at his office.
                    </p>
                    <p>
                      I explored the kitchen following the <ListCard tag="c8-spoiled-food" expansions={["scent of neglected garbage"]} card={<span>I was relieved
                      to smell nothing worse.</span>} />. The flashlight beam illuminated a barely stocked kitchen, consistent with someone who ate mostly
                      at the dining hall. A <List expansions={[["cellar door"], ["cellar door"]]} tag="c8_door" /> had been
                      left open.
                    </p>
                  </div>
              }} />
          </div>,
          burglary: <div>
            <Map from={inventory.c8_entrances}
              to={{

                barrels: <div>
                  <p>"It was still warm when he disappeared. That window might be unlocked." I motioned to Lillian, who stabilized one of the plastic bins while I
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
                    Lillian opened the front door, her face grave. "You're gonna want to <List expansions={[["come down"], ["come down"]]} tag="c8_see" /> into this basement."
                  </p>
                </div>
              }} />
          </div>,
          there: <div>
            <p>
              The whole house was smaller than some apartments I've had—just three rooms plus a small modern addition containing the bathroom.
              The furnishings were generic and had probably come with the housing. It looked barely lived-in;
              he must've spent most of his time at his office.
            </p>
            <p>
              I explored the kitchen following the <ListCard tag="c8-spoiled-food" expansions={["scent of neglected garbage"]} card={<span>I was relieved
              to smell nothing worse.</span>} />. The flashlight beam illuminated a barely stocked kitchen, consistent with someone who ate mostly
              at the dining hall. A <List expansions={[["cellar door"], ["cellar door"]]} tag="c8_door" /> had been
              left open.
            </p>
          </div>


        }} />

    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          archaeologist: <div>
            <p>"Nothing in his bedroom," Lillian said, entering. Walter stood behind her, looking uncertain.
            </p>
            <p>I nodded towards the cellar. "You should leave. I don't want anyone else losing their job over this."</p>
            <p>Walter nodded but didn't move, probably not wanting to leave his lady friend behind.</p>
            <p>"She's right," Lillian said. "I can say we crawled through a window or something. I'll call you tonight."</p>
            <p>
              I turned to Lillian. "You too."
            </p>
            <p>
              "No way, I—"
            </p>
            <p>
              "You'll get expelled, and I don't think the Dean will write a nice recommendation letter. Go home."
            </p>
            <p>"Thank you," Walter said to me.</p>
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
          burglary: <div>
            <p>
              The cellar door was next to the old stone hearth.  It was a small entrance, obviously original, and there was no light switch by the
              top of the stairs.
            </p>
            <p>
              "The bulkhead led straight down there through a different entrance," Lillian said. "I could hear something running, like a machine. Something big."
            </p>
            <p>
              I thanked <Map from={inventory.c2_direction} to={{curiosity: "Merchant", dean: "Ella"}} /> for her help in
              getting us inside and told her to go home. "I don't want anyone else losing their job over this." She looked
              grateful and promised to assist us in any way with whatever materials we recovered.
            </p>
            <p>
              I turned to Lillian. "You too."
            </p>
            <p>
              "No way, I—"
            </p>
            <p>
              "You'll get expelled, and I don't think the Dean will write a recommendation letter. Go home."
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
              "Then go <ListCard tag="c8-gohome" expansions={["home"]} nextUnit="section" card={<span>I felt responsible for the girl,
              despite the fact that she got me into this mess.</span>} />."
            </p>

          </div>,
          there: <div>
            <p>
              The door was next to the old stone hearth. The doorframe was narrow and low, obviously original to the property,
              and there was no light switch by the
              top of the stairs.
            </p>
            <p>
              I thanked <Map from={inventory.c2_direction} to={{curiosity: "Merchant", dean: "Ella"}} /> for her help so far and
              told her to go home. "I don't want anyone else losing their job over this." She looked
              grateful and promised to assist us in any way with whatever materials we came back with.
            </p>
            <p>
              I turned to Lillian. "You too."
            </p>
            <p>
              "No way, I—"
            </p>
            <p>
              "You'll get expelled, and I don't think the Dean will write a nice recommendation letter. Go home."
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
              "Then go <ListCard tag="c8-gohome" expansions={["home"]} nextUnit="section" card={<span>I felt responsible for the girl,
              despite the fact that she got me into this mess.</span>} />."
            </p>

          </div>
        }} />

    </section>,
    <section>
      <p>
        Lillian bit her lip. "I'll be in the library." Then she left. I was alone.
      </p>
      <p>
        The cellar was far smaller than a modern basement, and the <Map from={inventory.c8_search}
          to={{
            _undefined: "ceiling",
              _any: <span><ListCard expansions={["ceiling"]} tag="c8_ceiling" card={<span>Cobweb-infested
              struts, interrupted by an occasional load-bearing brick pillar.</span>}/></span>
          }} />  brushed
        the top of my head. The <Map from={inventory.c8_search}
          to={{
            _undefined: "floor",
              _any: <span><ListCard expansions={["floor"]} tag="c8_floor" card={<span>When I aimed the flashlight
              beam directly at the ground, a set of prints were visible, clustered around one of the boxes in the far corner.</span>}/></span>
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
          }} /> and tools were all partially buried in a thick layer of brown dirt. I could hear a rumbling deep in the earth—not necessarily below me, but almost
        all around me. Nothing looked new
        enough to have belonged to Lynn and I didn't see any other promising exits.
      </p>
      <p>
        Yet the door had been open—<em>someone</em> had been down here, and that sound—I'd just have to <List expansions={[["search"], ["search"]]} tag="c8_search"
                                nextUnit="none" /> carefully.
      </p>
    </section>,
    <section>
      <p>I slid the box away from the wall, which revealed a narrow tunnel into further darkness<Map from={inventory.c5_direction}
        to={{
            archaeologist: `, a fact which did not surprise me in the least. It was the same size and shape of the bricked-up
                     tunnel under the Science Center. `,
            _any: "."
        }} />
      </p>
      <p>
        The tunnel was obviously hand-dug, and surprisingly long; it wasn't just a connector to another nearby cellar.
        It was framed in wood, but inexpertly, with boards nailed together at all angles. The planks
        overhead sagged and a few had been split by tree roots which burst out from the cracks and hung
        freely. I was descending, and my sense of orientation told me I was moving <i>into</i> the
        slope of the hill. This did not feel safe.
      </p>
      <p>
        I inched through it carefully, trying to <List expansions={[["brush"], ["brush"]]} tag="c8_brush" nextUnit="none" /> the dangling roots and loose boards aside with minimal force.
        <Map from={inventory.c8_brush}
          to={{
            _undefined: '',
            _any: ` One of the boards fell off under my touch, landing on the ground with a dull thud. Soil spilled down
                  on my head and I held my breath, but the falling dirt gradually subsided and the tunnel was silent again.`
          }} />
      </p>
    <Map from={inventory.c8_brush}
      to={{
        _undefined: '',
        _any: <p>
              The board I'd dislodged had some <List expansions={[["handwritten graffiti"], ["handwritten graffiti"]]} tag="c8_graffiti" /> on it:
        </p>
    }} />
    </section>,
    <section>
      <blockquote className="elsie-font">Blessed are those who see the brightest <ListCard expansions={["light"]}
        tag="c8_light"
        nextUnit="section"
        card={<span>
          <Map from={inventory.c5_direction}
            to={{
              archaeologist: "Same handwriting as in the other tunnel: Elsie Cadwell.",
              _any: "I was quite sure by now that this handwriting belonged to Elsie Cadwell, Ignatius Cadwell's wife."
            }} /></span>} />. — November 23, 1889</blockquote>
    </section>,
    <section>

      <p>
        After five or six meters the tunnel made a sharp left-hand <ListCard expansions={["turn"]} card={[`I didn't even see the turn and walked straight into the wall. I yelped
      in surprise. There was no echo; the sound was deadened by the encroaching earth.`]} tag="c8-wall" /> and descended even further.
      </p>
      <p>
        Once I turned the corner, the deep mechanical humming intensified. From this point on the tunnel was getting wider, until I
        stumbled down a short step and I was no longer in a tunnel at all.
      </p>
      <p>
        I trained the flashlight around the room but the beam was insufficient and nothing I saw made any sense.  I could only perceive disjointed scenes that didn't form a coherent whole:
        curved metal plates, heavily corroded and pitted, vibrating furiously; cables and hoses snaking
        upwards and out of sight, giving off steam and dirty smoke. Motes of dust and soot churned in the air,
        and my weak light only served to reflect them back at me in a disorienting visual static. I called out
        but the sound of my voice was swallowed by the mechanical churning.
        I could not make out the scale of the space but the resonant sound told me the walls—and ceiling—were far, far away.
      </p>
      <p>
        I wasn't in a root cellar anymore. This was a cavern, filled with a great machine.
      </p>
      <NextChapter chapter={9} />
    </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />

}
