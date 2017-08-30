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
        By my feet lay evidence of recent habitation: plastic milkcrates, some rubber gloves, a few
        empty bags of potato chips, a gas generator. The generator was off; something else was driving the mechanized
        drone filling the room. I followed the cables snaking out of it
        with my flashlight beam; they led to a series of tripod-mounted spotlights, all dark, positioned around the
        cave. Lying on top of the generator, as if deliberately placed there to be impossible to miss, was a manilla folder
        containing two papers. I opened it, tucking the flashlight under my arm to free both hands. The first
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
        I put the folder aside, my hands shaking a little. "All right," I hollered over the industrial din,
        "If there's someone in here, I'm turning on the lights now." I <List expansions={[["pulled the starter cord—"], ["pulled the starter cord."]]} tag="c9-start1" />
      </p>
    </section>,
    <section>
      <p>
        The motor shuddered but didn't rev up. I waited, but there was only that continual hum and room-filling vibration.
        "Okay this time I really mean it!" I <List expansions={[["yanked"], ["yanked"]]} tag="c9-start2" /> on the cord again,
        this time both harder and faster.
      </p>
    </section>,
    <section>
      <p>
        The generator roared to life and the spotlights lit up in sequence.
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
        above-ground. What I saw in front of me indicating this was laughably wrong.</span>} /> in the sketch was unmistakable.
      </p>
      <p>
        The machinery depicted in the drawing was all, in serious disrepair but demonstrably still functional. Rubber tubes had cracked or
        sprung from their sockets. The
        brass cranks and gears were coated in a thick patina. The wooden platform looked especially unstable,
        and the enormous wheel and crankshaft
        were wrapped in copper wire which had oxidized to a dull green. Debris was everywhere.
      </p>
      <p>
        Yet <ListCard expansions={["someone"]} tag="c9_repair"
          card={<span>Lynn, surely, though he must've been pretty handy for an English professor.</span>} /> had
        been restoring it. All along the edge of the cavern were modern tools and
        materials—shiny new wire spools, a tablesaw, neat stacks of fresh lumber.
      </p>
      <p>
        Someone restored it and now the machine was <List expansions={[["humming"], ["humming"]]}
                                              tag="c9-humming" /> and alive.
      </p>
    </section>,
    <section>
      <p>
        I approached the thig carefully, as one would a lion in a cage. Surely this was no bomb.
        Up close, I could see that the wooden platform was mostly rebuilt. There was a new handle on the enormous lever by the base,
        mounted on a half-moon track like a <ListCard expansions={["giant 'on' switch"]} tag="c9_switch"
          card={<span>The original mechanism was, in fact, a railroad switch stand.</span>} />.
        A handcart full of fresh coal rested next to a cast-iron stove.
      </p>
      <p>Tantalizingly, the ladder led up to a two-stage platform which seemed to disappear into the
        meteor itself. I climbed up a few rungs, just to get a <List expansions={[["better look over the edge—"], ["better look—"]]}
                                                                 tag="c9-look" />
      </p>
    </section>,
    <section>
      <p>
        On the first platform was a small work area. Another milkcrate, this time flipped upside-down for use as a
        seat, next to a gas camping lamp and a notebook. This was starting to feel staged, as if these notebooks were
        props leading me on. I <ListCard expansions={["climbed up"]}
          tag="c9-climbed"
          nextUnit="section"
          card={<span>I don't regret walking into this trap, not for one moment.</span>} /> anyway.
      </p>
    </section>,
    <section>
      <p>About ten feet up, I was close to the huge
        wheel-like mechanism and could make out gleaming new copper threads interwoven with the old.
        The wheel seemed designed to rotate freely but was just vibrating now, as if in anticipation.
        It was obvious how much the machine had been pieced together
        from spare parts.
      </p>
      <p>Looking up, I could see the meteorite disappear into the top of the cavern, which was
        held together just by packed dirt and a dense web of roots. I sensed that the cavern itself was natural,
        a pocket in the earth created when the meteorite crashed into the side of the valley, thousands of
        years ago.
      </p>
      <p>
        I picked up the notebook. It had a recent date on the cover in Lynn's handwriting. It was largely
        blank, just two short fragments, hastily written:
      </p>
      <Reader inventory={inventory} docs={[docs.lynn1]} />
      <Reader inventory={inventory} docs={[docs.lynn2]} />

      <p>
        I looked up towards the top of the platform, at the chamber that had been dug into the heart of the
        meteorite. A brass doorframe had been somehow affixed to it, and a glass-fronted door
        hung <List expansions={[["open"], ["open"]]}
               tag="c9-open"  /> in invitation.
      </p>

    </section>,
    <section>

      <p>
        The final platform was small, barely wider than the doorframe. Up this high, the vibration of the idling
        machine was intense; my teeth ached and the wooden structure on which I stood swayed noticably.
      </p>
      <p>
        Rubber cables snaked through the doorframe and attached to a socket in the chamber ceiling. A thickly-woven
        metal cord hung down, ending in a <ListCard expansions={["brass handle"]}
          tag="c9-handle"
          card={<span>Absurdly, I was reminded of an old-fashioned toilet flush.</span>} />. Directly over the handle
        was a floor-mounted brass plate.
      </p>
      <p>
        Naturally, lying on the plate was another journal <List expansions={[["entry"], ["entry"]]}
                                                            tag="c9-lastentry" /> in Lynn's hand.
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.lynn3]} />
    </section>,
    <section>
      <p>
        I felt a shove and I stumbled into the chamber. The chamber door was slammed shut. I heard a
        curious sucking noise and felt my ears pop. The rumble of the engine was still audible, but muted,
        yet I could also <i>feel</i> it, soothing and calm, through the meteor itself.
      </p>
      <p>
        Alice Gilman regarded me blankly through the glass of the chamber.
      </p>
      <p>
        "You're <ListCard expansions={["Elsie Cadwell"]} tag="c9-short"
          card={<span><i>Elsie</i> is a diminitive for both Elizabeth, which I'd known, and Alice,
          which I'd forgotten. I found out later that Gilman was her maiden name.</span>} />," I yelled, not caring if she couldn't hear me.
      </p>
      <p>
        She turned away from me. I pounded on the glass with my fists. She didn't respond, just climbed down the platform and
        out of sight.
      </p>
      <p>
        "I named it the Instrument," her voice said. I couldn't see her, but it clear as a bell resonating through the
        solid rock, as clear as if she whispered beside me. "I think you'd call it a time machine. If you want to survive
        you'll grab that handle. I'm going to pull the lever now."
      </p>
      <p>
        The chamber went utterly silent, a vaccuum of sound and perfectly still. I grasped the handle
        with both hands. I didn't hear a thing, but I guess she pulled that lever.
      </p>
      <NextChapter chapter={10} />
    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />

}
