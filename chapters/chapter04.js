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
      <header>
        <h2>Chapter Four</h2>
        <blockquote>
          Hills and valleys, and sparkling cities veiled in foliage, with their numberless parks and
          fountains and statues sleeping in the soft light, gleaming lakes and wandering rivers that
          glittered and danced in the glorious atmosphere like prisoned sunbeams, greeted us like the
          alluring smile of love, and yet, for the first time since entering this lovely land, I felt myself a prisoner.
          <br/>           <br/>
          —<i>Mizora</i>, Mary E. Bradley (1890)
        </blockquote>
      </header>
      <p>
        I realized I hadn’t eaten all day and,
        <Map from={inventory.c2_direction}
          to={{
            curiosity: " after asking Walter for directions, I stopped by  ",
            dean: " after promising to meet Lillian at the library as soon as I could, I stopped by "
          }} />

        the faculty dining room. Only a few professors were still at lunch this late. They greeted me
        coolly—more so, I felt, after I recited my unremarkable <ListCard expansions={["academic credentials"]} tag="c4-creds"
          card={<span>All state and commuter schools, but I still worked my ass off.</span>} />. After a round of
        polite introductions and tepid small talk, they went back to their private conversations. I ate my lunch
        in silence.
      </p>
      <p>
        As I was putting away my tray, I saw Alice Gilman open the double doors to the dining hall, notice me, and then
        abruptly back out again.
      </p>
      <p>
        I found Lillian Horace, my helpful student, seated on the steps around the Astrolith, seemingly oblivious to the
        blistery weather. <Map from={inventory.c2_direction}
          to={{
                    curiosity: `“I tried to catch up with you at the dean's office, but Walter—I mean, the dean's assistant—said you'd gone to lunch.”`,
                    dean: `“It’s sunny,” she shrugged. “I decided to just wait for you here.”`
          }} />
      </p>
      <p>
        “I’m supposed to be meeting with Alice Gilman
        <Map from={inventory.c2_direction}
          to={{
            curiosity: " now.",
              dean: " now."
          }} />”</p>
      <p>
        “We’ll find her later. This is important.” She handed me a worn old book, <List expansions={[["opened"], ["opened"]]}
                                                                                    tag="c4-opened" /> towards the front:
      </p>
    </section>,
    <section>

      <Reader inventory={inventory} docs={[docs.brooks]} />
    </section>,
    <section>
      <p>“This book belonged to Lynn,” I said. “I recognize his handwriting. Who is Cadwell?”</p>
      <p>“That’s what I want
      to show—”</p>

      <p>A student with a clipboard and a stack of flyers suddenly accosted us. “Help save the Blithedale Astrolith!”
      </p>
      <Reader inventory={inventory} docs={[docs.astrolith1]} />
    </section>,
    <section>
      <p>“Yeah thanks,” Lillian said. Once the student was out of sight she crumpled the flyer in her hand
      and stalked off towards the library.</p>
      <p>“You don’t agree?” I asked, jogging to keep up.</p>
      <p>“I don’t have time.”</p>
      <p>
        The current library building was a Brutalist relic of the 1960s and didn’t exactly
        gel with the rest of the campus. In spite of that,
        it was a quiet and pleasant place to study, with abundant natural
        light and a wall of glass that overlooked the small orchard at the edge of campus.
        Naturally we were headed for the windowless basement instead.
      </p>
      <p>
        “Most of the utopians’ buildings were made out of wood; it was the one resource they had in abundance,” Lillian explained.
        “They were largely replaced when the college was founded.” She unlocked a door marked <i>Library Personnel Only</i> and
        led me in. “The only original structures that are still standing are a few stone houses used as
        faculty residences. Meanwhile I get this crappy little space for my independent study.”
      </p>
      <p>
        The office was barely bigger than a storage closet and was crammed with equal amounts of library books and
        janitorial equipment. <Map from={inventory.c2_direction}
          to={{
            curiosity: `“I saw a portrait of your grandmother by the dean’s office,” I said. “She looks remarkably like you.”`,
              dean: `“You mentioned your family attended Blithedale?”`
          }} />

      </p>
      <p>“Yeah, I come from a long line of <ListCard expansions={["alumna"]}
        tag="c7-legacy"
        card={<span>American universities give special preference to descendants of graduates. Not having illustrious ancestors of my own,
        I’m not a fan of the practice.</span>} />. Mom, grandmom, and great-grandmom—I’m named after her. She was in the first
        graduating class at Blithedale.
        They call us Founder’s Daughters; there’s a formal social club and everything. I find it all pretty boring.”
      </p>
      <p>
        “Not many people come from a line of women scholars, Lillian. It’s <ListCard expansions={["okay"]}
          tag="c4-okay"
          card={<span>God I sound so square sometimes.</span>} /> to be proud of that.”
      </p>
      <p>
        I’d clearly embarrassed her so she changed the subject. “Here, <List expansions={[["this"], ["this"]]} tag="c4-read" /> is what I wanted to show you.”
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.frag2]} />
    </section>,
    <section>
      <Map from={inventory.c2_direction}
        to={{

          curiosity: <div>
            <p>“The Harbinger?” I asked.</p>
            <p>“The utopians published a newsletter. The library has almost a complete archive.”
              From one of her folders she produced a reproduction of a broadsheet:
            </p>
            <Reader inventory={inventory} docs={[docs.paper1]} />
          </div>
        }} />
      <Map from={inventory.c2_direction}
        to={{
          dean: <div>
            <p>“I’ve seen The Harbinger,” I said. “It was the utopians’ newsletter.”</p>
          </div>

        }} />
      <p>“Professor Lynn found dozens of those journal fragments, dating from between 1895 and 1889. I’d been helping him
      analyze them all summer, trying to fit them to a timeline that matched with the decline of the community.”</p>
      <p>“Are you sure this is from someone’s journal?” I asked. “This looks like a page from a <i>novel</i> that
        I found with<List expansions={[[" Lynn's notes—"], ["—"]]}
                      tag="c4-notes" />”</p>
    </section>,
    <section>
      <p>“No, this is definitely the personal diary
        of a community member. His name was Ignatius Cadwell, some kind of amateur scientist. Bit of a blowhard if you ask me.”
      </p>
      <p>“Maybe he was also a frustrated novelist.”</p>
      <p>She laughed. “That’d explain a lot; he seemed
        to think he could do anything. Now <List expansions={[["read"], ["read"]]}
                                             tag="c4-look" /> the other one—this is from four months later.”
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.frag3]} />
    </section>,
    <section>
      <p>I pointed out the note in the
      margin, in colored pencil and almost illegible. “Who added this note? That’s not Lynn’s writing.”</p>
      <p>“I don’t know, maybe another utopian? Does it matter?” She tapped the page. “On November 23, 1889—the day
        after this was written—the Great Hall burned down. It took a lot of other
        structures with it, and some livestock, maybe even some people. The community went
        bankrupt.<Map from={inventory.c2_brook} to={{_undefined: "", _any: " Just like Brook Farm did."}} />”</p>
      <p>“But the fire was probably an accident.”</p>
      <p>“I’ve only found one first-person account of the fire and she mentions hearing an explosion, not some
        oil lamp tipping over. If you read between the lines there—<i>there’s no turning back</i>—that sounds like
      he was planning something extreme. Maybe Cadwell built a kind of bomb, to finish off a utopian dream that failed.”</p>
      <p>I didn’t know what to say to that.</p>
      <p>Lillian took the papers out of my hands. “Professor Lynn could have found something
        dangerous in those tunnels. I don’t think he was the kind of person who’d run off with stolen artifacts—maybe he was injured down
      in some cellar. People accidentally dig up old mines all the time.”</p>
      <p>“Well, yes, in some places, but even then I’d hardly say it was<List expansions={[[` all the time—`], "—"]}
        tag="c4-time" />”</p>
    </section>,
    <section>
      <p>“You’re not listening! They’re going to resume construction on the Science Center any day now. What if
      they rupture something explosive? People could get injured or worse.”</p>
      <p>I sighed. “Lillian, what do you expect me to do? I just got here two days ago!”</p>
      <p>“As his substitute, you have access to Lynn’s private papers. I’ve asked for them, but Ms. Gilman won’t let me see them, and
      the Dean isn’t interested in anything that delays the construction. Please,” she said, “I don’t know who else to ask.”</p>
      <p>I’d say that her passion and conviction reminded me of my younger self,
        but if I’m honest I was never very idealistic. It felt good to be needed, and I liked Lillian.
      </p>
      <p>“Okay,” I said finally. “Let me see what you’ve got.”</p>
      <NextChapter chapter={5} />

      </section>

  ]

  return <RenderSection currentSection={currentSection} sections={sections}  />
}
