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
        I realized I hadn't eaten all day and,
        <Map from={inventory.c2_direction}
          to={{
            curiosity: " after asking Walter for directions, stopped by  ",
            dean: " after promising to meet Lillian at the library as soon as I could, stopped by "
          }} />

        the faculty dining room. This late in the afternoon, only a few professors still at lunch. They greeted me
        coolly—more so, I felt, after I recited my <ListCard expansions={["academic credentials"]} tag="c4-creds"
          card={<span>All state and commuter schools, but I still worked my ass off.</span>} />. After a round of
        polite introductions and tepid small talk, they went back to their private conversations. I finished lunch
        in silence.
      </p>
      <p>
        I found Lillian seated on the steps leading up to the library, seemingly oblivious to the
        blistery weather. <Map from={inventory.c2_direction}
          to={{
                    curiosity: `"I tried to catch up with you at the dean's office, but the dean's assistant said you'd gone to lunch," she explained.`,
                    dean: `"It's sunny," she shrugged. "I decided to just wait for you here."`
          }} />
      </p>
      <p>
        "I'm supposed to be meeting with Alice Gilman
        <Map from={inventory.c2_direction}
          to={{
            curiosity: " here.",
              dean: " now."
          }} />"</p>
      <p>
        "We'll find her later. This is important." She handed me a worn old book, opened towards the front:
      </p>
      <Reader inventory={inventory} docs={[docs.brooks]} />
    </section>,
    <section>
      <p>"This book belonged to Lynn," I said.</p>
      <p>"Yes, how did you know?"</p>
      <p>"I recognize his handwriting. What is SP-X05, a catalog number? Lynn referenced it in a note."</p>
      <p>"It's part of our special collections," she said, taking the book back. "That's what I want
      to show—"</p>

      <p>A student with a clipboard and a stack of flyers suddenly accosted us. "Help save the Blithesdale Astrolith!"
      </p>
      <Reader inventory={inventory} docs={[docs.astrolith1]} />
    </section>,
    <section>
      <p>"Thanks," Lillian said dismissively, crumpled the flyer in her hand, and pulled open the doors to the library.</p>
      <p>"You don't agree?"</p>
      <p>"I do, but not for the same reasons," she said, without elaborating.</p>
      <p>
        The current library building <ListCard expansions={["dated"]}
          tag="c4-library-date"
          card={<span>The Futurians, I would learn, had an impressive library for a farming community,
            but that small wooden structure had been
          replaced many times over.</span>} />  back to the 60s, with the accompanying hints of Brutalism,
        but it was generally a quiet and pleasant place to study, with abundant natural
        light and a view overlooking the small apple orchard at the edge of campus.
      </p>
      <p>Naturally we were headed for the windowless basement.
      </p>
      <p>
        "Most of the utopians' buildings were wood," Lillian explained. "It was the one resource they had in abundance.
        They were all replaced by the 1930s." She unlocked a door marked <i>Library Personnel Only</i> and
        led me in. "The only original buildings left are the few that were made of stone, and most of those are
        faculty residences. They let me use this room for my independent study."
      </p>
      <p>
        The office was barely bigger than a storage closet and was crammed with equal volume of library books and
        janitorial equipment. "What did you want to show me?" I said, trying to hurry this along.
      </p>
      <p>
        "Here, <List expansions={[["read"], ["read"]]} tag="c4-read" /> these," she said. She watched me carefully as I did.
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.frag2]} />
    </section>,
    <section>
      <Map from={inventory.c2_direction}
        to={{
          dean: <div>
            <p>"I've seen The Circular," I said. "It was the utopians' newsletter."</p>
          </div>,
          curiosity: <div>
            <p>"The Circular?" I asked.</p>
            <p>"The utopians published a monthly newsletter. The library has almost a complete archive."
              From one of her folders she produced a reproduction of a broadsheet:
            </p>
            <Reader inventory={inventory} docs={[docs.paper1]} />
          </div>
        }} />
      <p>"Professor Lynn found dozens of those journal fragments, dating from between 1895 and 1899.
        He was quite sure they belonged to a community member named Cadwell, an amateur scientist and one of the founding members.
        Not all of the fragments were recoverable—some were damaged by water or mold. Many were singed by fire."
      </p>
      <p>"The fire that destroyed the building over the quad? The <List expansions={[["Phila—"], ["Phono—"], "Phanto—"]} tag="c4-phila" />"</p>
    </section>,
    <section>
      <p>Lillian rolled her eyes. "The Phalanstery, yes." She nodded towards the second paper in
        my hand. "<List expansions={[["Look"], ["Look"]]}
                    tag="c4-look" /> at the other journal entry."
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.frag3]} />
    </section>,
    <section>
      <p>I pointed out the note in the
      margin, in colored pencil and almost illegible. "Who wrote this?"</p>
      <p>"I don't know, maybe another utopian? Does it matter?" She tapped the page. "On November 23, 1889—the day
        after this was written—the Phalanstery burned down. It took a lot of other
        structures with it, and some livestock, maybe even some people. The community went
        bankrupt.<Map from={inventory.c2_brook} to={{_undefined: "", _any: " Just like Brook Farm did."}} />"</p>
      <p>"But the fire was probably an accident."</p>
      <p>"Was it? If you read between the lines there—<i>there's no turning back</i>—that sounds like
      something planned. What if this guy Cadwell decided his community wasn't going to make it, and wanted to—"</p>
      <p>"Take everyone with him? Like a suicide pact?"</p>
      <p>"I don't think anyone else was involved. Many of them stayed to rebuild and
      found Blithesdale. Cadwell and his wife, though, they disappear from the historical record after this."</p>
      <p>"So you think he set fire to their hall?"</p>
      <p>"Or blew it up," she said. Even though all these people were long dead, I admit I got chills.</p>
      <p>Lillian snatched the papers from my hands and shook them. "What if Professor Lynn found something
        that Cadwell built that was dangerous or still explosive?  Maybe he didn't disappear—maybe he's hurt down there,
      in some old cellar. People accidentally dig up old mines all the time."</p>
      <p>"Well, yes, in some places but even then I'd hardly say it was<List expansions={[[` all the time—`], "—"]}
        tag="c4-time" />"</p>
    </section>,
    <section>
      <p>"You're not listening! They're going to resume construction on the Science Center any day now. What if
      they rupture something explosive? People could get injured or worse."</p>
      <p>I sighed. "Lillian, what do you expect me to do? I just got here two days ago!"</p>
      <p>"As his replacement, you have access to Lynn's private papers. I've asked for them, but Ms. Gilman won't let me see them, and
      I can't go to the Dean without any iron-clad evidence. Please," she said, "I don't know who else to ask."</p>
      <p>I'd like to say that in her passion and conviction she reminded myself of her when I was
        younger, but she wasn't that much younger than me. I felt old before my time, a washed-up English professor
        just a few years out of school.
      </p>
      <p>"Okay," I said finally. "Let me see what you've got."</p>
      <NextChapter chapter={5} />

      </section>

  ]

  return <RenderSection currentSection={currentSection} sections={sections}  />
}
