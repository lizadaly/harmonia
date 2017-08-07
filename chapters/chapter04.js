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
        <h2>Chapter Four</h2>
        <blockquote>
          Hills and valleys, and sparkling cities veiled in foliage, with their numberless parks and
          fountains and statues sleeping in the soft light, gleaming lakes and wandering rivers that
          glittered and danced in the glorious atmosphere like prisoned sunbeams, greeted us like the
          alluring smile of love, and yet, for the first time since entering this lovely land, I felt myself a prisoner.
           <br/>           <br/>
          —<i>Mizora</i>, Mary E. Bradley (1890)
        </blockquote>
      </heading>
      <p>
        I realized I hadn't eaten all day and
        <Map from={inventory.c2_direction}
          to={{
            curiosity: " after asking Walter for additional directions to  ",
            dean: " after promising to meet Lillian in her cubicle at the library, located "
          }} />

          the faculty dining room. By this time there were only a few professors left. Mostly
          women, they greeted me coolly—more so, I felt, after I recited my academic
          credentials, which were entirely state and commuter schools. After a few minutes of
          polite introductions, they went back to their private conversations, and I ate
          in silence.
      </p>
      <p>
        Lillian was seated on the steps leading up to the library, seemingly oblivious to the
        blistery weather. <Map from={inventory.c2_direction}
                  to={{
                    curiosity: `"I tried to catch up with you at the dean's office, but Walter said you'd gone to lunch," she explained.`,
                    dean: `"It's sunny," she shrugged. "I decided to just wait for you here."`
                  }} />
      </p>
      <p>
        There was a book in her lap, which she handed to me when she saw me looking:
      </p>
      <Reader inventory={inventory} docs={[docs.brooks]} />
    </section>,
    <section>
        <p>"This is Lynn's book." I said.</p>
        <p>She took it back from me slowly. "How did you know?"</p>
        <p>"I recognize his handwriting. What is SP-X? I've seen that catalog number before."</p>
        <p>"Special collections," she said. "That's what I want to <List expansions={[[`show you."`], [`show you. Come inside the library."`]]}
          tag="c4-steps" /></p>
    </section>,
    <section>
      <br/>      <br/>      <br/>      <br/>      <br/>
      <p>
        Lillian explained that the library dated back to the original community, but the property itself had been
        rebuilt on the same site several times. No trace existed of the original wood-framed structure, which was only a
        single room.
      </p>
      <p>
        "Did it burn down in the fire?"
      </p>
      <p>
        "Oh good, someone told you about that?" The current incarnation of the library obviously dated back to the 60s—there
        were a few Brutalist touches—but it was generally a quiet and pleasant place to be. Naturally we went
        down to the basement, which was less pleasant and more Brutal.
      </p>
      <p>
        "It wasn't caught in the fire, no," she continued. "Most of the community buildings were wood—it was the one resource they had in abundance.
        They were all replaced with brick in the 1900s." She unlocked a door marked "Library Personnel Only" and
        led me in. "The only original buildings left are the few that were made of stone, and most of those are
        faculty offices. Professor Lynn has—had one."
      </p>
    </section>
  ]

  return <RenderSection currentSection={currentSection} sections={sections}  />
}
