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
        Right by the tunnel entrance there were signs of modern intrusion: several plastic milkcrates, some rubber gloves, a few
        empty bags of potato chips, a gas generator. The milkcrates were stuffed full of
        notebooks and papers and as I knelt down, flashlight tucked under one arm, I almost wept with joy.
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
        The generator roared to life and three connected tripod-mounted spotlights lit up in sequence.
        My knees went weak and I had to sit down on a crate to take it all in. The drawing was real.
      </p>
      <p>
        I was, in fact, within an enormous cavern—surely natural in origin—sunken into the slope on which the
        college was built. The space was dominated by a pockmarked black boulder the size of a house,
        which protruded from the ceiling and disappeared into the floor, half still buried in the wall of
        the cavern.
      </p>
      <p>
        The machinery depicted in the sketch was all here, but in gross disrepair. Rubber tubes had cracked or
        sprung from their sockets. The
        brass cranks and gears were coated in a thick patina. The wooden platform looked especially unstable,
        and the enormous wheel and crankshaft
        were wrapped in copper wire which had oxidized to a dull green. Debris was everywhere.
      </p>
      <p>
        And yet, <ListCard expansions={["someone"]} tag="c9_repair"
          nextUnit="section"
          card={<span>Lynn, surely, though he must've been pretty handy for an English professor.</span>} /> had
          been repairing it. All along the edge of the cavern were modern tools and
          materials—shiny new wire spools, a tablesaw, neat stacks of fresh lumber.
      </p>
    </section>,
    <section>
      <p>
        I approached the great machine. Surely this was no bomb, or it would've been itself destroyed in the
        explosion. As I got closer, I realized I had been so distracted by the machine that I'd
        failed to really take in the massive <List expansions={[["rock"], ["rock"]]} tag="c9_rock" />.
      </p>
    </section>,
    <section>
      <p>"The Astrolith," I said, wonderingly. The <ListCard expansions={["tip"]} tag="c9-tip"
        card={<span>The estimate on the meteorite's plaque put its weight at 30 tons. It was more likely to be
        3,000.</span>} /> above the surface was unmistakable in its profile.
      </p>
      <p>
        Up close, I could see that the wooden platform had in fact already been repaired in places, and
        with some skill. Also repaired was the enormous lever by the base—it moved along a half-moon
        track like a <ListCard expansions={["railway switch"]} tag="c9_switch"
          card={<span>The original mechanism was, in fact, a railroad switch stand.</span>} />.
          A handcart full of fresh coal rested next to a cast-iron stove.
      </p>
      <p>Tantalizingly, the ladder led up to a two-stage platform which seemed to disappear into the
        meteor itself. <Map from={inventory.c9_search || inventory.c9_look}
          to={{
            _undefined: <span>I hesistated, wondering if I should stick to what I knew best
             and <List expansions={[["search"], ["search"]]}
                tag="c9_climb" /> through that trove of archives</span>,
            _any: `I hesistated, wondering if I should stick to what I knew best
              and search through that trove of archives`
          }}  />
          <Map from={inventory.c9_look || inventory.c9_search}
            to={{
              _undefined: <span>, or throw caution to the wind and <List expansions={[["climb"], ["climb"]]}
                tag="c9_look" /> right up.</span>,
              _any: ", or throw caution to the wind and climb right up."
            }}  />
          </p>
    </section>,
    <section>
      <Map from={inventory.c9_climb || inventory.c9_look}
        to={{
          climb: <div>climb</div>,
          search: <div>look</div>
        }} />
    </section>
    ]

      return <RenderSection currentSection={currentSection} sections={sections}  />

}
