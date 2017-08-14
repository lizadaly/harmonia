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
        <h2>Chapter Seven</h2>
        <blockquote>
          "What is the breath of life?" I ask at last.<br/>
          "Oh, I can answer that; I have found it out since I have been here. It is, my
          dear, electricity, which we assimilate into spirit."<br/>
          —<i>Arqtiq</i>, Anna Adolph (1899)
        </blockquote>
      </heading>

      <Map from={inventory.c5_direction}
        to={{
          there: <div>
            <p>Gilman slipped out moments later but the students didn't object when I cut class a few minutes short.
              I quietly told Lillian to talk to the librarian and sweep up any more journal entries she might've found.
              As I left the room I heard Charlotte say to a friend, "Well, that was pretty weird."
            </p>
            <p>
              The quad was empty and it was easy to follow Gilman as she stalked across it. She was dressed about the
              same as when I met her, except her hair was pulled back now, in a tightly wound bun. The weather had
              turned back to icy rain again but the woman seemed impervious. I didn't bother waiting behind as she
              entered the English department offices and grabbed the open door before it swung shut.
            </p>
            <p>
              "Hi, Alice!" I said. "I meant it when I said wanted to catch up after class."
            </p>
            <p>
              She spun around, her eyes darting from side-to-side as if looking to escape. Several <ListCard
                expansions={["faculty"]} tag="c7-faculty" card={<span>I recognized one who'd spurned me in
                the dining hall. I doubted they liked Gilman any more than they liked me.</span>} /> were
              in the halls; a few paused, sensing tension.
            </p>
            <p>
              I was happy to have the audience. "Let's talk in Professor Lynn's office." I smiled. "At the Dean's request."
            </p>
            <p>Gilman was trapped and she knew it. She unlocked and <ListCard expansions={[["opened the door."],
            ["opened the door, and then we were alone."]]} tag="c7_opendoor" /></p>
          </div>,
          burglary: <div>
            <p>Gilman slipped out moments later and I let her go. There was a good chance she was headed to
              Lynn's office now and I'd just have to hope there was still material to find after she'd done a sweep.
              I'd just have to wait for her to leave, and anyway I needed time to figure out how one broke into an office.
            </p>
            <p>
              I finished class, a little distracted, and took Lillian aside to tell her to meet with the librarian. "Obviously
              there were more pages from Cadwell's journal than Lynn found," I said. "See what else she hasn't cataloged yet."
            </p>
            <p>
              The weather had turned icy-wet again, so I bundled up and skulked out by the quad where I could get a
              good view of the English department. There were student protestors setting up tables <ListCard expansions={["signs"]}
                tag="c7-tables"
                card={<span>"Rally tomorrow: rain or shine!"</span>} /> by the meteorite;
              someone had draped the little backhoe in origami birds and Tibetan prayer flags. One of the students
              handed me a flyer printed on cardstock, adorned with a sticker:
            </p>
            <Reader inventory={inventory} docs={[docs.paper3]} />

          </div>,
          archaeologist: ""
        }} />

    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div></div>,
          burglary: <div>
            <p>After a cold and damp wait, I saw Gilman exit the building through a rear door and disappear behind
            the gymnasium. I made my move.</p>
            <p>
              It was late afternoon now, and many faculty members were packing up to drive home or down to the village.
              I <List expansions={[["tried"], ["tried"]]}
                nextUnit="none"
                  tag="c7_door" /> Lynn's door<Map from={inventory.c7_door}
                    to={{
                      _undefined: ", ",
                        _any: <List expansions={[[" again, "], [" again, "]]}
                                tag="c7_door_again" />
                    }} /> rattling the handle.
              <Map from={inventory.c7_door}
                to={{
                            _undefined: "",
                              _any: <span> <ListCard expansions={["Nothing"]} tag="c7_nothing" card={<span>Unfortunately,
                                "try opening the door" was about as far as I'd gotten formulating my burglary plan.</span>} />.</span>
                }} />
            </p>
          </div>,
          archaeologist: <div></div>
        }} />

    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div></div>,
          burglary: <div>
            <p>This time the noise attracted a woman in the office across the hall. I didn't <ListCard tag="c7_reminded"
              expansions={["recognize"]} card={<span>Though she had a strong working-class Boston accent that
                painfully reminded me of home.</span>} /> her from any of my
              dining hall visits. "Oh,
              are you Abby Fuller?" she asked.
            </p>
            <p>Her name was __ and she taught Creative Writing. Since she already knew who I was,
              I didn't bother with the long implausible story
              I'd been formulating in case I was caught, and simply said I'd lost Lynn's key.
            </p>
            <p>"I'm afraid all the locks are different so my key won't help," she said, and then added, slyly, "But the windows don't lock at all."</p>
            <p>Minutes later I was murmuring thanks to 20th century building codes, and dropped into Lynn's office through
            a window off the fire escape.</p>
            <p>
              "Nice meeting you," I heard her yell out. "<ListCard expansions={["Call me"]}
                nextUnit="section"
                tag="c7_numbers" card={<span>Reader, I got her number.</span>} /> sometime!"
            </p>
          </div>,
          archaeologist: <div></div>
        }} />

    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div></div>,
          burglary: <div>
            <p>Lynn's office was a mess now. The neat stacks of paper were pooled on the floor, all sense of
              order destroyed. I assumed Gilman had been through these as thoroughly as I could be, so I
              started looking in places she hadn't checked: <List expansions={[["behind cabinets", "under desks", "in drawers"],
              ["behind cabinets", "under desks", "in drawers"]]}
                tag="c7_search"
                                                            />.

            </p>

          </div>,
          archaeologist: <div></div>
        }} />
    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div></div>,
          burglary: <div>
            <p>
              I found what I was looking for in the <FromInventory from={inventory.c7_search} />, hidden inside
              some <ListCard expansions={["library books"]} tag="c7_library" card={<span>Now quite overdue.</span>} />:
              two journal entries, heavily annotated by Lynn himself:
            </p>
            <Reader inventory={inventory} docs={[docs.frag5]} />
          </div>,
          archaeologist: <div></div>
        }} />
    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div></div>,
          burglary: <div>
            <p>
              Lynn's annotations were undated, but this seemed to be an early find. The second set of notes were
              obviously made more recently:
            </p>
            <Reader inventory={inventory} docs={[docs.frag6]} />
          </div>,
          archaeologist: <div></div>
        }} />
    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div></div>,
          burglary: <div>
            <p>
              I was startled by the door to Lynn's office unlocking and opening. I didn't have time to
              even consider hiding before Lillian and <Map from={inventory.c2_direction}
                to={{
                  curiosity: "an older woman",
                  dean: "Ella Merchant" }} /> entered.

            </p>
            <p>
              "How did you get in?" I said.
            </p>
            <p>
              "I have a key," <Map from={inventory.c2_direction}
                              to={{
                                curiosity: "the woman said.",
                                dean: <span>Ella replied. "You know, if you need to get in somewhere in the school, just ask."
                                She eyed the open window. "Unless that would spoil the adventure.</span>}} />


            </p>
            <Map from={inventory.c2_direction}
                              to={{
                                curiosity:  <div>
                                  <p>"Who are you?" I said, holding the papers slightly behind my back.</p>
                                  <p>"This is Ms. Merchant," Lillian said, in a tone that suggested I should've known this.</p>
                                  <p>"You're the librarian?" I said.</p>
                                  <p>"Archivist." She eyed the open window and my flushed appearance. "You know if you ever need to get anywhere
                                    in the school, just ask." She paused. "I'll probably say yes."</p>
                                  </div>
                              }} />
            <p>
              "We didn't find any more journal entries," Lillian said. "Though it looks like you did."
            </p>
            <p>I gave the papers to Lillian and asked Ella, "Do you know where Lynn lived?"</p>
            <p>"<ListCard expansions={["Adams House"]} tag="c7_house"
              card={<span>The five extant utopian homes were named after the families who had built them.</span>} />," she said. The name didn't mean anything to me.</p>
            <p>"Wait, really?" Lillian said.</p>
            <p>I looked between them. "What's that?"</p>
            <p>"It's right on campus," Lillian said. "One of the original stone Futurian buildings."</p>
            <p>"I don't have keys to people's homes," Ella said.</p>
            <p>"Sure," I said. "But does his home have a window?"</p>
            <NextChapter chapter={8} />
          </div>,
          archaeologist: <div></div>
        }} />
    </section>


  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
