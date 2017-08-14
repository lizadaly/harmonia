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
            <p>Gilman slipped out moments later. I didn't want her to get far, so I <ListCard tag="c7-ended" expansions={["ended class"]}
              card={<span>The students raised no objections, unsurprisingly.</span>} /> early.
              I pulled Lillian aside and instructed her to talk to the librarian and collect any more stray journal entries.
            </p>
            <p>
              Most students were still in lecture halls so it was easy to track Gilman as she hurried across the quad. She was dressed about the
              same as when I met her, except her hair was pulled back now, in a tightly wound bun. The weather had
              turned to icy rain again but the woman seemed impervious. I was feeling bold, so when she
              entered the English department offices, I grabbed the open door before she could close it.
            </p>
            <p>
              "Hi, Alice!" I said. "I meant it when I said wanted to catch up after class."
            </p>
            <p>
              She stiffened and looked as if she wanted to escape. Two <ListCard
                expansions={["faculty members"]} tag="c7-faculty" card={<span>I recognized one who'd spurned me in
                the dining hall. I doubted they liked Gilman any more than they liked me.</span>} /> were
              in the halls; they paused, sensing tension.
            </p>
            <p>
              I was happy to have the audience. "Let's talk in Professor Lynn's office." I smiled. "At the Dean's request."
            </p>
            <p>Gilman was trapped and she knew it. I followed her down the hall. She unlocked and <List expansions={[["opened the door."],
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
              good view of the English department. There were student protestors setting up tables and <ListCard expansions={["signs"]}
                tag="c7-tables"
                card={<span>"Rally tomorrow: rain or shine!"</span>} /> by the meteorite;
              someone had draped the little backhoe in origami birds and Tibetan prayer flags. One of the students
              handed me a flyer printed on cardstock, adorned with a sticker:
            </p>
            <Reader inventory={inventory} docs={[docs.paper3]} />

          </div>,
          archaeologist: <div>
            <p>Gilman slipped out moments later and I let her go. There was a good chance she was headed to
              Lynn's office now, but I was assuming she'd already removed the interesting material there anyway.
              Besides, I had a friend to visit.
            </p>
            <p>
              I finished class, a little distracted, and took Lillian aside to tell her my plan. "Just go to your
              classes as usual. I'll stop by your dorm room later."
            </p>
            <p>
              The weather had turned ice-wet again, so I bundled up and trudged across the quad.
              There were student protestors setting up tables and <ListCard expansions={["signs"]}
                tag="c7-tables"
                card={<span>"Rally tomorrow: rain or shine!"</span>} /> by the meteorite;
              someone had draped the little backhoe in origami birds and Tibetan prayer flags. One of the students
              handed me a flyer printed on cardstock, adorned with a sticker:
              </p>
              <Reader inventory={inventory} docs={[docs.paper3]} />
          </div>
        }} />

    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div>
            <p>"Thank you for helping me the other night," I said, even as I walked around his office, casually
            browsing through the papers on his desks.
          </p>
          <p>"Of course," she replied. Her accent was hard to place.</p>
          <p>
            "Where did you study before you came to assist Professor Lynn?"
          </p>
          <p>"I don't have an undergraduate degree. The Dean is waiving my tutition
            while I support Professor Lynn's research."
          </p>
          <p>
            That was unexpected. "Why would she <ListCard expansions={["do that"]}
              tag="c7-do-that" card={<span>The Dean did not strike me as a particularly generous woman, especially when it
              came to school fees.</span>} />?"
          </p>
          <p>"I'm a <ListCard expansions={["legacy admission"]}
            tag="c7-legacy" nextUnit="section"
            card={<span>American colleges have a tradition of admitting descendants of alumni, often without regards for
            merit. Kids like me hate legacy admissions.</span>} />," she said, lifting her chin. I stared at her incredulously.</p>
          </div>,
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
          archaeologist: <div>
            <p>I thanked the girl and followed the downhill path to the administration building.
              The Dean wasn't in, which was fine as I wasn't looking for her.
            </p>
            <p>
            <Map from={inventory.c2_direction}
              to={{
                curiosity: <span>
                  "Hi Walter," I said, when her assistant came out to greet me.
                </span>,
                dean: <span>
                  "Hi Ella," I said, poking my head into the Exhibit Hall.
                </span>
              }} /> "Say, can I <ListCard expansions={["ask"]} tag="c7-ask" nextUnit="section"
                card={<span>One of the simplest things you can do to be successful is befriend the people who are always crapped on.</span>} /> you
                 a favor?"
            </p>
          </div>
        }} />

    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div>
            <p>"Your mother went to Blithesdale?"</p>
            <p>"We <i>founded</i> Blithesdale," she hissed. Before I could respond, a student appeared in the doorway, grinning.
          </p>
          <p>"Rally at dawn to save the astrolith!" she said, pushing a flyer at me. "Construction resumes tomorrow if we don't stop it!" It was a reproduction of the
            utopian newsletter, with a cheerful sticker in one corner:
          </p>
          <Reader inventory={inventory} docs={[docs.paper3]} />
          </div>,
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
          archaeologist: <div>
            <heading>
              <h6>* * * </h6>
            </heading>
            <p>
              I didn't want <Map from={inventory.c2_direction}
                to={{
                  curiosity: "Walter",
                  dean: "the archivist"
                }} /> to get into trouble for letting me down into the Science Center excavation so I refused the kind
                offer to accompany me. I did accept a flashlight and a key to the storage crate
                where construction workers had been told to put any material that might be of interest to the Historical
                Committee.
            </p>
            <p>
              The basement beneath the Center was modern, if unfinished, with multiple exits in all directions.
              A car-sized hole had been punched out of the
              concrete wall, revealing narrow earthen tunnel framed by timber. It was easy to forget that these
              utopians had no real machinery of any kind—everything they built had to be done by hand. I put my
              palm up against one of the struts; it felt damp but strong.
            </p>
            <p>
              There was some hand-penciled graffiti on one of the struts. I leaned in to <List expansions={[["examine"], ["examine"]]}
                tag="c7-beam" /> it.
            </p>
          </div>
        }} />

    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div>
            <p>Gilman's face was contorted with something like fury. "What construction? The digging was halted at least until the spring."</p>
            <p>The girl stepped back into the hall. "I dunno, that's just what everybody's saying. Guys with hardhats, inspectors—they're
              all over the Science Center now."
            </p>
            <p>
              The student glanced at me, probably looking for support, but I was as confused as she was. While I stood there
              dumbly, Gilman pushed past both of us, only to run straight into Lillian and <Map from={inventory.c2_direction}
                to={{
                  curiosity: "an older woman",
                  dean: "Ella, the archivist"
                }} />.
            </p>
            <p>
              "What is going on?" Lillian said. Gilman disappeared down the hall. Lillian abruptly shut Lynn's door in the student's face, which would've been
              funny under any other circumstance.
            </p>
            <Map from={inventory.c2_direction}
              to={{
                curiosity: <div>
                  <p>"Who's this?" I said, jerking my head at the woman.</p>
                  <p>"I'm Ella Merchant, the college archivist," the woman said kindly. Her voice was soothing and I apologized for being brusque.</p>
                  <p>She smiled. "It seems like you've got a lot on your plate."</p>
              </div>
              }} />
              <p>"Did you find Lynn's papers yet?" Lillian cut in.</p>
              <p>I rolled my eyes. "No, I haven't had much time to search—I was dealing with Ms. Gilman and
                I <List expansions={[["can't find anything in this mess—"], ["can't find—"]]} tag="c7-find" />
              </p>

          </div>,
          burglary: <div>
            <p>Lynn's office was a mess now. The neat stacks of paper were pooled on the floor, all sense of
              order destroyed. I assumed Gilman had been through these as thoroughly as I could be, so I
              started looking in places she hadn't checked: <List expansions={[["behind cabinets", "under desks", "in drawers"],
              ["behind cabinets", "under desks", "in drawers"]]}
                tag="c7_search"
                                                            />.

            </p>

          </div>,
          archaeologist: <div>
            <blockquote className="elsie-font">May the beam lead me only forward. — November 23, 1889</blockquote>
            <p>I was quite sure by now that this handwriting belonged to Elsie Cadwell, Ignatius Cadwell's wife.</p>
            <p>
              The tunnel extended another ten feet, before ending at an even rougher hole that disappeared into
              darkness and was surrounded by loose bricks. An old trough ran along one side, half-filled with <ListCard tag="c7-sand" expansions={["sand"]}
              card={<span>Turnips and other root vegetables would have been buried here; the sand would keep out the natural damp.</span>} />.
              A modern wooden <List expansions={[["crate"], ["crate"]]} tag="c7-crate" /> was pushed up the opposite wall.
            </p>
          </div>
        }} />
    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div>
            <p>"In this cabinet," Merchant said, pulling open an utterly unremarkable drawer, as if at random, and
              producing a library book. Two journal entries were shoved inside it. Lillian and I gaped at her.
            </p>
            <p>"Well, it <i>is</i> my job. You only needed to ask."</p>
            <p>
              We laid them out on a table and read them together:
            </p>
            <Reader inventory={inventory} docs={[docs.frag5]} />
          </div>,
          burglary: <div>
            <p>
              I found what I was looking for in the <FromInventory from={inventory.c7_search} />, hidden inside
              some <ListCard expansions={["library books"]} tag="c7_library" card={<span>Now quite overdue.</span>} />:
              two journal entries, heavily annotated by Lynn himself:
            </p>
            <Reader inventory={inventory} docs={[docs.frag5]} />
          </div>,
          archaeologist: <div>
            <p>
              I lowered the flashlight to retrieve <Map from={inventory.c2_direction}
                to={{
                  curiosity: "Walter's",
                  dean: "Ella's"
                }} /> key and had the first twist of real fear when the tunnel was swallowed up in darkness. The crate
                contained mostly old <ListCard tag="c7-metal" expansions={["pieces of metal"]} card={<span>Most were
                identifiable, if primitive, nails and clasps, but some were twisted or charred beyond recognition.</span>} /> and
                other junk, but I found what I was really looking for: <List expansions={[["Lynn's notebook"], ["Lynn's notebook"]]}
                  tag="c7_lynn_notebook" />.
            </p>

          </div>
        }} />
    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div>
            <p>
              "Lynn's annotations are undated, but this looks to be one of his earlier finds," Merchant said. "This second set
              was made more recently—I'm sure of that because I cleaned this paper myself."
            </p>
            <Reader inventory={inventory} docs={[docs.frag6]} />
          </div>,
          burglary: <div>
            <p>
              Lynn's annotations were undated, but this seemed to be an early find. The second set of notes were
              obviously made more recently:
            </p>
            <Reader inventory={inventory} docs={[docs.frag6]} />
          </div>,
          archaeologist: <div>
            <Reader inventory={inventory} docs={[docs.lynn1]} />
          </div>
        }} />
    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div>
            <p>"What did you think this was when you found it?" I asked.</p>
            <p>Merchant looked puzzled. "An unpublished fantastical novel," she said. "Jeffrey and I agreed that it
              wasn't surprising to find. Many of the community members were literary, and after <i>Looking Backward</i> these
              stories were hugely popular. It's natural that the Futurians would try out their ideas in story form."
            </p>
            <p>
              Lillian and I exchanged a look, but said nothing.
            </p>
          </div>,
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
          archaeologist: <div>
            <p>There was a loose page in the middle and the paper felt stiff and dry, but before I could inspect it, I
                heard <Map from={inventory.c2_direction}
                              to={{
                                curiosity: "Walter",
                                dean: "Ella" }} /> call
                                my name, softly, followed by a crash. I hurried back out of the tunnel, the notebook safely in my arms.
            </p>
            <p>"Are you okay?" I asked.</p>
            <p>
              <Map from={inventory.c2_direction}
                              to={{
                                curiosity: <span>"I'm fine," he said, grimacing. "I gave you my only flashlight."</span>,
                                dean: <span>"Thank you, I'm all right," she said, rubbing her shin. "I didn't have time to find my other flashlight." </span>
                              }} />
            </p>
            <p>
              "Look, I found <List expansions={[["Lynn's journal—"], ["—"]]} tag="c7_journal" />"
            </p>

          </div>
        }} />
    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div></div>,
          burglary: <div></div>,
          archaeologist: <div>
            <p>"There isn't time," <Map from={inventory.c2_direction} to={{curiosity: "he", dean: "she" }} /> said. "Some inspectors from the city are on their way
            down into the basement.
            I heard them in the Dean's office. She's going ahead with the next phase of the construction project tomorrow."</p>
            <NextChapter chapter={8} />
          </div>
        }} />
    </section>


  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
