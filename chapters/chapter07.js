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
              When I got outside I spotted Gilman hurrying across the quad. She was dressed about the
              same as when I met her—long skirt, leather bag, plain brown boots—but now her hair was pulled back in an
              elaborate coil that made her stand out among the students. The weather had
              turned to icy rain again which stung my face as I trotted after her. I was feeling bold, so when she
              reached the doors of the English department, I stepped in before she could close them.
            </p>
            <p>
              "Hi, Alice," I said. "You know, I meant it when I said wanted to catch up after class."
            </p>
            <p>
              She stiffened. Two <ListCard
                expansions={["faculty members"]} tag="c7-faculty" card={<span>I recognized one who'd spurned me in
                the dining hall. I doubted they liked Gilman any more than they liked me.</span>} /> were
              in the halls; they paused, sensing tension.
            </p>
            <p>
              "Let's talk in Professor Lynn's office." I smiled. "At the Dean's request."
            </p>
            <p>Gilman was trapped and she knew it. "All right," she said. I followed her down the hall, where
              she <List expansions={[["unlocked Lynn's office."],
              ["unlocked Lynn's office. We were finally alone."]]} tag="c7_opendoor" /></p>
          </div>,
          burglary: <div>
            <p>Gilman slipped out moments later and I let her go. There was a good chance she was headed to
              Lynn's office now and I'd just have to hope there was still material to find after she'd done a sweep.
              Anyway I needed time to figure out how one broke into an office.
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
              Lynn's office to clean it out, but I hoped there were more journal entries to be found elsewhere.
              Besides, I had a friend to visit.
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
            <p>"Thank you for your help the other night," I said, even as I walked around his office, casually
              browsing through the papers on his desks.
            </p>
            <p>"You're welcome," she replied. </p>
            <p>
              "Forgive my curiosity, but where are you from? I don't recognize your accent."
            </p>
            <p>
              The question was rude and she responded in kind. "Not far from here. You're from, where? Lowell?"
            </p>
            <p>
              "<ListCard expansions={["Something"]} tag="c7-lowell"
                nextUnit="section"
                card={<span>Exactly like that, but I didn't want to give her the satisfaction.</span>} /> like that."
            </p>
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
            <p>Before she could respond with what I assumed would be snobbery, a student appeared in the doorway, grinning and
              full of annoying verve.
            </p>
            <p>"Rally at dawn to save the Astrolith!" she said, pushing a flyer at me. "Construction resumes tomorrow if we don't stop it!"
              The flyer was a reproduction of the
              utopians' newsletter; a student had placed a cheerful sticker in one corner:
            </p>
            <Reader inventory={inventory} docs={[docs.paper3]} />
          </div>,
          burglary: <div>
            <p>This time the noise attracted a woman in the office across the hall. I didn't <ListCard tag="c7_reminded"
              expansions={["recognize"]} card={<span>Like me, she had a working-class accent—maybe Brooklyn?</span>} /> her from any of my
              dining hall visits. "Oh,
              are you Abby Fuller?" she asked.
            </p>
            <p>Her name was Lois and she taught Creative Writing. I'd come up with a long implausible story
              in case I was caught, but in the moment I panicked and simply said I'd lost Lynn's key.
            </p>
            <p>"I'm afraid all the locks are different so my key won't help," she said, and then added, slyly, "But the windows don't lock at all."</p>
            <p>She lead me around the back of the building and waited to see if I made it, all despite the freezing rain. Minutes later, thanks to 20th century building codes, I had dropped into Lynn's office through
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
              The basement beneath the Center was modern, if unfinished, and notable for one reason:
              the car-sized <ListCard expansions={["hole"]}
                tag="c7_punched" card={<span>
                  <Map from={inventory.c2_direction}
                    to={{
                      curiosity: "Walter",
                    dean: "Ella"
                  }} /> had said that its discovery was an accident, revealed when the construction team had gone in to
                  extend the foundation.</span>} /> that been punched out of the
              concrete wall, revealing an earthen tunnel framed by timber.
            </p>
            <p> It was easy to forget that these
              utopians had no motorized machinery of any kind—everything they built had to be done by hand. I put my
              palm up against one of the struts; it felt damp but strong.
            </p>
            <p>
              I switched on the flashlight, ducked, and entered the tunnel. As it narrowed, I observed
              some hand-penciled graffiti on one of the support posts. I leaned in to <List expansions={[["examine"], ["examine"]]}
                tag="c7-beam" /> it.
            </p>
          </div>
        }} />

    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div>
            <p>"What construction?" Gilman said, her voice wavering a bit. "The digging was halted at least until the spring."</p>
            <p>The girl shrugged. "I dunno, that's just what everybody's saying. Guys with hardhats, inspectors—they're
              all over the Science Center now."
            </p>
            <p>
              Gilman stormed past both of us, startling the girl, only to run straight into Lillian and <Map from={inventory.c2_direction}
                to={{
                  curiosity: "an older woman",
                  dean: "Ella, the archivist"
                }} />. She nudged them aside without a word and disappeared down the hall.
            </p>
            <p>
              "What was that about?" Lillian said, exasperated, then abruptly <ListCard tag="c7-shut"
                card={<span>This would've been funny under any other circumstance.</span>} expansions={["shut"]} /> Lynn's door in the bewildered student's face.

            </p>
            <Map from={inventory.c2_direction}
              to={{
                curiosity: <div>
                  <p>"Who's this?" I said, jerking my head at the other woman.</p>
                  <p>"I'm Ella Merchant, the college archivist," she said kindly. "It seems like you're having a tough first week."</p>
                  <p>I apologized for being brusque.</p>
                </div>
              }} />
            <p>"Did you find Lynn's papers yet?" Lillian cut in.</p>
            <p>"No, I was dealing with Gilman and
              I <List expansions={[["can't find anything in this mess—"], ["can't find—"]]} tag="c7-find" />"
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
            <blockquote className="elsie-font">May the beam lead me only <ListCard expansions={["forward"]}
              tag="c7_forward"
              card={<span>I was quite sure by now that this handwriting belonged to Elsie Cadwell, Ignatius Cadwell's wife.</span>} />
            . — November 23, 1889</blockquote>

            <p>
              The tunnel extended another ten feet, before ending at an even rougher hole that disappeared into
              darkness and was surrounded by loose bricks.
            </p>
            <p>An old trough ran along one side of the corridor, half-filled with <ListCard tag="c7-sand" expansions={["sand"]}
              card={<span>Turnips and other root vegetables would have been buried here; the sand would keep out the natural damp.</span>} />.
              A modern plastic crate, secured with a <List expansions={[["padlock"], ["padlock"]]} tag="c7-crate" />, was pushed up the opposite wall.
            </p>
          </div>
        }} />
    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div>
            <p>"His current research is kept in this cabinet," Merchant said, pulling open an unmarked drawer, as if at random, and
            producing two annotated journal entries from among other paperwork.</p>
            <p>"Thanks," I said, feeling stupid.</p>
            <p>"Next time just ask! Finding documents is my job."</p>
            <p>
              We laid them out on a table and read them together:
            </p>
            <Reader inventory={inventory} docs={[docs.frag5]} />
          </div>,
          burglary: <div>
            <p>
              I found what I was looking for, hidden inside
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
                }} /> key and the tunnel was briefly swallowed up in darkness. The crate
              contained mostly old <ListCard tag="c7-metal" expansions={["pieces of metal"]} card={<span>Most were
              identifiable as primitive nails and clasps, but some were twisted or charred beyond recognition.</span>} /> and
              other junk, but I found what I was really looking for: a notebook that belonged to Lynn.
            </p>
            <p>
              Most of the pages were scarcely used, with meaningless scribbles, phone numbers, or illegible class notes.
              Two loose pages <List expansions={[["fell out"], ["fell out"]]}
                  tag="c7_lynn_notebook" />:
            </p>

          </div>
        }} />
    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div>
            <p>
              "Lynn's annotations are undated," Merchant said, "but this looks to be one of his earlier finds." She
              held up the second document. "These notes were
              made more recently. I recovered this fragment myself, in late August."
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
            <Reader inventory={inventory} docs={[docs.frag5]} />
            <Reader inventory={inventory} docs={[docs.frag6]} />
          </div>
        }} />
    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          there: <div>
            <p>"What did you think this was when you found it?" I asked.</p>
            <p> <Map from={inventory.c2_direction} to={{curiosity: "Merchant", dean: "Ella"}} /> looked puzzled. "One of the colonists drafting a fantastical story,"
              she said. "Jeffrey and I agreed that it
              wasn't surprising to find. It's natural that the Harmonians would try out their ideas in <ListCard expansions={["story"]}
                tag="c7-backward" card={<span>This cross-pollination between fiction and real-life communities
                  happened frequently. Whole societies rose and fell around stories like <i>Looking Backward</i> and
                  <i>Travels in Icaria</i>.</span>} /> form."
            </p>
            <p>
              Lillian and I exchanged a look, but said nothing.
            </p>
            <p>
              "Where are those tunnels that Lynn refers to in his note?"
            </p>
            <p>
              "If he was writing in August, he was probably talking about the one under the Science Center. He
              halted the expansion of the foundation when they broke through into an old root cellar." She paused.
              "That's when Jeffrey started going down there alone. I didn't like it, but I couldn't stop him
              without involving the Dean."
            </p>
            <p>"The last entry mentions a blueprint. <Map from={inventory.frag_blueprint}
              to={{
                _undefined: "Lynn's note says he put it in his private collection.",
                _any: "If Lynn put that in a 'private collection,' where would that be?"
              }} /> Would he have kept papers like that here?"
            </p>
            <p>"No, Dean had me catalog all the college property in his office after he disappeared and I
            don't recall anything like a blueprint. His home, maybe? He lived in Adams House."</p>

            <p> The name was meaningless to me. "That's right on campus," Lillian explained. "One of the <ListCard expansions={["original"]} tag="c7_house"
              card={<span>The five extant utopian homes were named after the families who had built them.</span>} /> stone Harmonian buildings."</p>
            <p>"I have keys to some offices," <Map from={inventory.c2_direction} to={{curiosity: "Merchant", dean: "Ella"}} /> said, "but not to anyone's private residence."</p>
            <Map from={inventory.c2_direction}
              to={{
                curiosity: <p>I said, "If it's on campus, I know someone who can get us in."</p>,
                dean: <p>"I talked my way through one locked door," I said. "I can figure out another one."</p>
              }} />
            <NextChapter chapter={8} />
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
                                  She eyed the open window. "Unless that would spoil the adventure."</span>}} />


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
            <p>"Adams House," she said. The name didn't mean anything to me.</p>
            <p>"Oh, that's right on campus," Lillian explained. "One of the <ListCard expansions={["original"]} tag="c7_house"
              card={<span>The five extant utopian homes were named after the families who had built them.</span>} /> stone Harmonian buildings."</p>
            <p>"I don't have keys to people's homes," Ella said.</p>
            <p>"Sure," I said. "But does his home have a window?"</p>
            <NextChapter chapter={8} />
          </div>,
          archaeologist: <div>

            <p>"Ally?"</p>

            <p>It was  <Map from={inventory.c2_direction}
                              to={{
                                curiosity: "Walter",
                                dean: "Ella" }} />'s voice calling
                                my name, hesitantly, followed by a crashing sound. I looked longingly at the
                                narrow passage Lynn had dug out, but hurried back out of the tunnel.
            </p>
            <p>"Are you okay?" I asked.</p>
            <p>
              <Map from={inventory.c2_direction}
                              to={{
                                curiosity: <span>"I'm fine," he said, grimacing. "I gave you my only flashlight so I just tripped over some paint cans."</span>,
                                dean: <span>"Thank you, I'm all right," she said, rubbing her shin. "I didn't have time to find my other flashlight and I tripped over a paint can." </span>
                              }} />
            </p>
            <p>
              "Look, I found<List expansions={[[" Lynn's journal—"], ["—"]]} tag="c7_journal" />"
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
            <p>"You need to get out of here," <Map from={inventory.c2_direction} to={{curiosity: "he", dean: "she" }} /> interrupted. "Some inspectors from the city are on their way
            down in this basement—I heard them in the Dean's office. If they approve the permit, she's going ahead with
            the next phase of the construction project tomorrow. That tunnel will be demolished."</p>

            <NextChapter chapter={8} />
          </div>
        }} />
    </section>


  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
