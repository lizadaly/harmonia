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
      <heading>
        <h2>Chapter Nine</h2>
        <blockquote>
          "There were no policemen, for there was no disorder, but thrift, sobriety, and decorum ruled,
          and the days passed in calm monotony."<br/>
          —<i>A Divided Republic</i>, Lillie Blake (1887)
        </blockquote>
      </heading>
      <p>
        Right by the tunnel entrance there were signs of modern intrusion: plastic milkcrates, some rubber gloves, a few
        empty bags of potato chips, a gas generator. The milkcrates were stuffed full of
        notebooks and papers. I knelt down, flashlight tucked under one arm, and almost wept with joy.
        I'd been collecting these one-by-one like a scavenger hunt and here was a small library.
      </p>
      <p>
        I greedily snatched a folder off the top of one—it had a recent date in Lynn's hand. The first page
        was an original issue of The Circular, <ListCard expansions={[["annotated"], ["annotated"]]}
          tag="c9_paper"
          nextUnit="section"
          card={<span>This edition was from the end of the community's existence, when the full-length newspaper had
          shrunk to a single double-sided broadsheet.</span>} /> by Lynn:
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.paper4]}/>
    </section>,
    <section>
      <p>
        There was another paper behind the broadsheet. It was also old:
      </p>
      <Reader inventory={inventory} docs={[docs.diagram1]}/>
    </section>,
    <section>
      <p style={{marginTop: "20em"}}>
        I put the folder aside, my hands shaking a little, and cast the flashlight on the gas generator.
        I closed my eyes, took a deep breath, and <List expansions={[["pulled the starter cord—"], ["pulled the starter cord."]]} tag="c9-start1" />
      </p>
    </section>,
    <section>
      <p>
        The motor shuddered but didn't rev up. I shook out my arm, then heard a <ListCard expansions={["thud"]}
          tag="c9-thud" card={<span>A door slam?</span>} /> upstairs. I waited, but there was only silence.
          I <List expansions={[["pulled"], ["pulled"]]} tag="c9-start2" /> again.
      </p>
    </section>,
    <section>
      <p>
        The generator roared to life and three tripod-mounted spotlights lit up in sequence.
        What I saw made me need to sit down.
      </p>
      <p>
        I was, in fact, within an enormous cavern—surely natural in origin—sunken deep into the slope on which the
        college was built. The space was dominated by a pockmarked black boulder the size of a house,
        which protruded from the ceiling and disappeared into the floor, half its girth buried in the wall of
        the cavern. It look like an immense ebony tooth wrapped in brass and iron, just like in the drawing.
      </p>
      <p>"The Astrolith," I murmured. The color and composition of the rock was the same, and the shape of the <ListCard expansions={["peak"]} tag="c9-tip"
        card={<span>The plaque by the meteorite estimated its weight at 30 tons, assuming the bulk of it was
          above-ground. The drawing demonstrated that this was laughably wrong.</span>} /> in the sketch was unmistakable.
      </p>
      <p>
        The machinery depicted in the drawing was all here but in serious disrepair. Rubber tubes had cracked or
        sprung from their sockets. The
        brass cranks and gears were coated in a thick patina. The wooden platform looked especially unstable,
        and the enormous wheel and crankshaft
        were wrapped in copper wire which had oxidized to a dull green. Debris was everywhere.
      </p>
      <p>
        And yet, <ListCard expansions={["someone"]} tag="c9_repair"
          nextUnit="section"
          card={<span>Lynn, surely, though he must've been pretty handy for an English professor.</span>} /> had
          been fixing it. All along the edge of the cavern were modern tools and
          materials—shiny new wire spools, a tablesaw, neat stacks of fresh lumber.
      </p>
    </section>,
    <section>
      <p>
        I approached the machine. Surely this was no bomb.
        Up close, I could see that the wooden platform was partially rebuilt. There was a new handle on the enormous lever by the base,
        mounted on a half-moon track like a <ListCard expansions={["giant 'on' switch"]} tag="c9_switch"
          card={<span>The original mechanism was, in fact, a railroad switch stand.</span>} />.
          A handcart full of fresh coal rested next to a cast-iron stove.
      </p>
      <p>Tantalizingly, the ladder led up to a two-stage platform which seemed to disappear into the
        meteor itself. <Map from={inventory.c9_search || inventory.c9_climb}
          to={{
            _undefined: <span>I hesistated, wondering if I should stick to what I knew best
             and <List expansions={[["search"], ["search"]]}
                tag="c9_search" /> through that trove of archives</span>,
            _any: `I hesistated, wondering if I should stick to what I knew best
              and search through that trove of archives`
          }}  />
          <Map from={inventory.c9_climb || inventory.c9_search}
            to={{
              _undefined: <span>, or throw caution to the wind and <List expansions={[["climb"], ["climb"]]}
                tag="c9_climb" /> right up.</span>,
              _any: ", or throw caution to the wind and climb right up."
            }}  />
          </p>
    </section>,
    <section>
      <Map from={inventory.c9_climb || inventory.c9_search}
        to={{
          climb: <div>
            <p>
              I'd risked so much already, why stop now?
            </p>
            <p>
              I shook the ladder—hard. It wobbled but held. There were new steps and shiny anchors bolted to the surface of the meteorite.
              I climbed up a few
              tentative steps, and it held. I continued to ascend.
            </p>
            <p>
              At the top of the main platform was a small work area. Another milkcrate, this time flipped upside-down for use as a
              seat, next to a gas camping lamp and a notebook. I was close to the huge
              wheel-like mechanism and could make out gleaming new copper threads interwoven with the old.
              It was obvious how much the machine had been pieced together
              from spare parts.
            </p>
            <p>
              I picked up the notebook. It had a recent date on the cover in Lynn's handwriting. It was largely
              blank, just three short fragments, hastily written:
            </p>
            <Reader inventory={inventory} docs={[docs.lynn1]} />
            <Reader inventory={inventory} docs={[docs.lynn2]} />
            <Reader inventory={inventory} docs={[docs.lynn3]} />
          </div>,
          search: <div>
            <p>
              With effort, I turned back to the crates of documents and located a notebook with a recent date
              on it in Lynn's handwriting. It was largely blank, just three short fragments, hastily written:
            </p>
            <Reader inventory={inventory} docs={[docs.lynn1]} />
            <Reader inventory={inventory} docs={[docs.lynn2]} />
            <Reader inventory={inventory} docs={[docs.lynn3]} />
          </div>
        }} />
    </section>,
    <section>
      <p>
        I heard another loud door slam, probably the cellar door this time. I put the paper down, and watched, without surprise,
        as Alice Gilman emerged through the passage.
      </p>
      <p>
        "You're <ListCard expansions={["Elsie Cadwell"]} tag="c9-short"
          card={<span><i>Elsie</i> is a diminitive for both Elizabeth, which I'd known, and Alice,
          which I'd forgotten.</span>} />," I said. "I suppose Gilman is your maiden name?"
      </p>
      <p>
        She shrugged.
      </p>
      <p>
        There were two entrances to the cavern, <Map from={inventory.c9_climb || inventory.c9_search}
          to={{
            climb: "both unreachable from the platform where I stood",
            search: " and one was nearby, but when I looked inside, it was bricked up. With new bricks"
          }} />.
      </p>
      <p>
        "And this device is—"
      </p>
      <p>
        "I think you'd call it a time machine. We called it the Instrument."
      </p>
      <p>
        "And <List expansions={[["how did Cadwell create—"], ["how did—"]]} tag="c9-made it" />
      </p>
    </section>,
    <section>
      <p>
        "<i>I</i> created it," she corrected me. "Ignatius was an idiot, a college dropout who never did a hard day's work in his life.
        He dreamt up nonsense and left it to me to make it a reality."
      </p>
      <p><Map from={inventory.c9_climb || inventory.c9_search}
        to={{
          climb: "She was almost at the base of the platform. I scrambled up the steps to the top level.",
          search: `I backed away from her, but there was nowhere to go but the wooden platform. I scrambled up the
          ladder to the first level, praying the thing would hold my weight.`
        }} />
      </p>
      <p>Gilman seemed to ignore me, and began calmly feeding coal into the stove. </p>
      <p>"What happened to Lynn?" I called down.</p>
      <p>"He was obsessed with the past. I gave it to him."</p>
      <p>"And Cadwell?"</p>
      <p>Even from here I could see her scowl. "He didn't belong here."</p>

      <p>She finished loading the stove and struck a match to light it. Smoke began leaking out of the seams in its chimney.
        She crossed over to the main mechanism and began winding it.
      </p>
      <p>
        "You can't believe it until you experience it," she said.
      </p>
      <p>
        "Experience what?" I could feel the hair on my arms begin to <ListCard expansions={["stand up"]}
          tag="c9-hair" card={<span>I thought this was fear, but then realized it was the air—static electricity
          was building up around the machine.</span>} />.
      </p>
      <p>
        "The past," she said. "Everything you take for granted." She turned a crank with tremendous effort and
        the machine leapt to a shuddering start. The huge wire-wrapped wheel beneath me began to spin,
        the attached arm rotating along with it faster and faster. The static discharge intensified; my
        clothes seemed to float away from my body. The entire platform vibrated, and over the roar of the
        device I could hear the ping-ping of rivets popping out of their sockets. I wasn't sure this
        machine could run for long without tearing itself apart.
      </p>
      <p>
        Gilman moved to the massive lever, leaning on it but not yet pushing. "Get inside," she yelled.
      </p>
      <p>
        "No."
      </p>
      <p>She sighed and reached into the satchel slung around her chest. She pulled out a skinny antique
        pistol and aimed it upwards, almost indifferently. "Trust me," she shouted, "it's a lot less old than it looks."
      </p>
      <p>
        <Map from={inventory.c9_climb || inventory.c9_search}
          to={{
            climb: `I glanced behind me at the
            chamber inside the meteorite. `,
            search: `I clambered backwards up the stairs to the last platform where I could finally see inside the chamber.`
          }} /> Thickly-woven metal fibers descended from the ceiling, ending in a
          copper handle. There was a matching copper plate on the floor. All of them were
          shiny and new. I stepped towards it, but didn't cross the threshold.
      </p>
      <p>"You <ListCard expansions={["want to go in"]}
        tag="c9-want"
        nextUnit="section"
        card={<span>She was right, of course. I mean, wouldn't you?</span>} />! How can you not?" she yelled. "Either way, I'm not
        going back, and I won't be made a freak. Get in, or stay where you are and watch me brick up the last entrance."
        She gestured around the space. "You see how unstable this all is. Those bulldozers will start work tomorrow morning,
        expecting an ordinary boulder, and this will all cave in. And if it doesn't, well, I've set off explosives before."
        </p>
    </section>,
    <section>
      <p>
        "What will happen to Lillian?" I said, taking the smallest of steps backwards into the chamber. The shaking
        had gotten worse. One of the supports on the platform snapped in two and the lower platform heaved
        violently. The upper platform groaned in response and I wasn't even sure I
        could get back down now if I wanted to.
      </p>
      <p>
        "Nothing will happen to her. After tomorrow, this will be a caved-in pile of broken metal, another example of laughable utopian
        pseudo-science. Without proof I'll have nothing to fear.
      </p>
      <p>
        "You'll be fine too, you know. I mean, probably. Better chance there than here." Despite her outward calm, her nerves must've
        finally snapped because she held
        up the gun at me with both hands and shouted, "Do it, now!"
      </p>
      <p>
        I closed my eyes, stepped back, and blindly gripped the handle.
      </p>
      <p>I couldn't hear it over the roar of the machine, but I guess she pushed that lever.</p>
      <NextChapter chapter={10} />
    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />

}
