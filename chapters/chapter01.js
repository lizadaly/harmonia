const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'

import ListCard from '../components/listCard'
import Reader  from '../components/reader'
import { docs } from '../docs'

export default ({currentSection, inventory, cards}) => {
  const sections = [
    <section>

      <header>

        <div className="title">
          <h1>Harmonia</h1>
        </div>
        <blockquote>
          I have neither power, time, nor occasion to be a great conqueror.
          Since Fortune and the Fates would give me none,
          rather than never be mistress of a world, I have made a World of my own. <br/><br/>
          — Preface to <i>The Blazing World</i>, Margaret Lucas Cavendish (1666)
        </blockquote>

        <p className="begin">
          <List expansions={[["Begin"], [""]]} tag="c1-begin" />
        </p>
      </header>
    </section>,
    <section>
      <header>
        <figure className="chapter-1">
          <img src="images/opening.jpg" alt="A pencil sketch of a college campus, with trees and paths in the foreground. In the distance are brick buildings, and a black pointed rock." />
        </figure>
        <h2>Chapter One</h2>
        <h3>November 3, 1998</h3>
      </header>

      <p>It was midnight when I arrived on campus and the weather was
        getting worse. Hours of driving led to a dark and lonely ascent into
        deeply forested foothills. I hadn’t seen a town for miles when I finally
        came upon the sign for <ListCard expansions={["Blithedale College"]}
          tag="c1-college-name"
          card={<span>An obscure women’s college, tucked in the upper corner of
          Massachusetts like a bookmark.</span>} />. This far-away place would be my home now.
      </p>
      <p>
        A substitute teaching position was not the big break I’d been hoping for,
        but it was consistent with my academic credentials, work experience, and current finances: unimpressive.

        I’d received a letter extending the offer, had a brief phone call with
        the <ListCard expansions={["dean"]}
          tag="c1-dean"
          card={<span>Dean Orellana had made it clear: if I didn’t accept the offer
          promptly, she had plenty more takers on hand.</span>} />, and, unencumbered by
        other employment, had started packing.
        I had left Boston this morning, stopping whenever the icy rain
        left zero visibility.
      </p>
      <p>
        The road to campus was steep and barely paved, and by now the early winter
        snow had turned it into a slippery mess. My
        aging car was fishtailing everywhere and I nearly sideswiped a
      couple trees.</p>
      <p>
        I’d hoped to arrive hours earlier, to <ListCard expansions={["sip warm brandy"]}
          tag="c1-cider"
          card={<span>I admit I was hazy on what real professors did in their free time.</span>} /> with
        the faculty and argue about transcendentalism. At the very least I needed to
        know where I’d be sleeping. Nobody was here to welcome me; the buildings were dark and
        shuttered, with only slivers of weak light holding the night at bay.
      </p>
      <p>
        I couldn’t find the main entrance but I spotted a sign for the English department and
        parked there.

        I unclenched my hands from the steering wheel, took a deep breath, and hurried up
        to the entryway. The front door was <List
          expansions={[["unlocked"], ["unlocked and no alarms rang as I stepped into the building"]]}
                                              tag="c1-doorknob"/>.
      </p>
    </section>,
  <section>
    <p>The interior looked like I expected: old money New England, wood-paneled walls, rows of office doors embossed with the names of
    professors and adjuncts. I called out a hello, but no one answered.</p>
    <p>I recognized a few names here and there but I was hunting for one door in particular—the absent
      instructor I’d been hired to
      replace. I found it at the
      end of the row: <ListCard expansions={['“Professor Jeffrey Lynn”']}
        tag="c1-scholar"
        card={<span>
          Lynn’s area of scholarship was 19th century mysticism. Mine was Civil War-era proto-feminist
          movements. Close enough, I guess.
        </span>}
      />. His door was <List expansions={[["ajar"], ["ajar, so I let myself in and flipped on a light"]]} tag="c1-in" />.
    </p>
  </section>,
  <section>
    <p>
      Lynn’s office was a cramped, almost windowless jumble of mismatched furniture all piled with folders, loose notes, and <ListCard expansions={["books"]}
        tag="c1-books"
        card={<span>An odd mix of monographs on 19th century literature and foundational engineering texts.</span>} />.
      Old surveyor maps of the region were tacked to the walls. The few decorative items were 19th century junk store
      relics like rusty iron cranks and wooden spindles, repurposed as paperweights.
      Despite the clutter, the room felt abandoned.
    </p>
    <p>
      Remarkably, a small worktable by the doorway held just a single stack of papers.
      I recognized a draft of his class syllabus and <ListCard expansions={["picked it up"]}
        tag="c1_syllabus"
        nextUnit="section"
        card={<span>Look, if he didn’t want somebody going through his things, he shouldn’t
        have unexpectedly disappeared.</span>}
                                                    />:

    </p>

  </section>,
  <section>
    <Reader inventory={inventory} docs={[docs.notes]} />
  </section>,
  <section>
    <p>I flipped the page over and read the excerpt Lynn had picked out. It was from
      chapter three of the novel:
    </p>
    <Reader inventory={inventory} docs={[docs.bellamy]} />
  </section>,
  <section>
    <p>The next excerpt was from an English utopian novel. I assumed he intended to
      lecture on the mechanisms by which these travelers
      discover their "perfect" society:
    </p>
    <Reader inventory={inventory} docs={[docs.age1]} />
  </section>,
  <section>
    <p>Curious, I turned to the final page in the pile. It wasn’t the third novel from the syllabus,
      but instead what looked to be an original draft of a different one,     <ListCard expansions={["handwritten"]}
        tag="c2_writing"
        card={<span>I’ve reproduced it here in type to make it more readable.</span>} />  in a looping, archaic style:
    </p>
    <Reader inventory={inventory} docs={[docs.frag1]} />
  </section>,

  <section>
    <p>The papers were abruptly snatched out of my hand.
    </p>
    <p> “Excuse me, what are you doing?” A woman was silhouetted in the doorway,
      regarding me with suspicion.
      Her hair was long and plain; she wore an ankle-length solid blue dress
      and carried a flashlight and leather satchel.
      The beam was pointed directly at my face.
    </p>
    <p>I reminded myself that I was invited here and didn’t need to <ListCard
      expansions={["apologize"]}
      tag="c2-apologize"
      card={<span>I guess technically I was trespassing in someone's office.</span>} />.
      “I’m Abby Fuller. I’m substituting for Jeffrey Lynn.”
    </p>
    <p>Something about this answer rattled her, but she lowered the flashlight. “Oh, of course.”
    </p>
    <p>
      “Thanks,” I said cautiously. “There was no one here when I arrived and—
      look, do you know where I’m supposed to be staying? I’m very tired.”
    </p>
    <p>“I assume the guest faculty quarters. I can take you to them.” She returned the papers to the table, face-down,
      and locked the door on her way out.
    </p>
    <p>We went back to my car to get my things. She didn't offer to help with my <ListCard expansions={["bags"]} tag="c2-bags"
      card={<span>They were pathetically few of them anyway. Shouldn’t a grown woman have more <em>stuff</em>?</span>} />.
      At least the snow had stopped, turning to a fine, cold mist.
    </p>
    <p>
      The faculty residence was as dark and quiet as the rest of the campus. If anyone else was living there,
      they kept to themselves. “You can stay here,” she said, gesturing at a room with a single small window
      and <ListCard expansions={["spartan"]} tag="c2-room"
        card={<span>Honestly I was just happy I wasn’t in a snow-filled ditch on the side of the road.</span>} /> wood furnishings.
      I dropped everything on the floor, mumbled my thanks, and collapsed on the bed as she closed the door. Only
      as I was drifting off did I realize she’d never
      told me her name.
    </p>

    <NextChapter chapter={2} />
  </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
