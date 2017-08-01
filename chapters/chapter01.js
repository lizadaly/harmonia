const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'
import * as actions from '../actions'
import ListCard from '../components/listCard'

export default ({currentSection, inventory, cards}) => {
  const sections = [
    <section>
      <heading>
        <h2>November 3, 1990</h2>
        <blockquote>
          I have neither power, time, nor occasion to be a great conqueror.
          Since Fortune and the Fates would give me none,
          rather than never be mistress of a world, I have <i>made a World of my own</i>. <br/><br/>
          — Preface to <i>The Blazing World</i>, Margaret Lucas Cavendish (1666)
        </blockquote>
      </heading>
      <p>It was nearly midnight when I finally arrived on campus. The last hour had been a
        slow drive into the
        deeply forested mountains, with virtually no signs of life. <ListCard expansions={["Blithedale College"]}
          tag="c1-college-name"
          card={<span>An obscure women's college, tucked in the upper corner of
          Massachusetts like a bookmark.</span>} />, in this remote place, would be my home now.
      </p>
      <p>
        At this point in my career I would've taken any kind of teaching job, but a one-semester emergency
        substitute position, at an obscure, semi-rural women's college, no less, was maybe not
        an ideal toehold in academia.
        I'd received a letter extending the offer and had a brief phone call with
        the <ListCard expansions={["dean"]}
          tag="c1-dean"
          card={<span>Dean Orellana had made it clear: if I didn't accept the offer
          promptly, she had plenty more takers on hand.</span>} />.
        I'd packed up a few essentials and left this morning, stopping twice when the icy rain
        escalated to zero visibility.
      </p>
      <p>
        The road to campus was steep and barely paved, and on this night the early winter
        snow had turned it into a slippery mess. My
        beat-up old car was fishtailing everywhere and I nearly sideswiped a
        couple trees.</p>
      <p>
        I'd hoped to arrive hours earlier, to <ListCard expansions={["sip warm mugs of cider"]}
          tag="c1-cider"
          card={<span>I admit I was hazy on what professors did in their free time.</span>} /> with
        the rest of the faculty and argue about transcendalism. At the very least I needed to
        know where I'd be sleeping. Nobody was here to welcome me; the buildings were dark and
        shuttered, their windows narrow slits against the storm.
      </p>
      <p>
      I couldn't find the main entrance, but spotted a sign for the English department and
      parked in front of it.

      I unclenched my hands from the steering <nobr>wheel—they</nobr> ached from my death grip—and hurried up
      to the entryway. <List
        expansions={[["The front door was unlocked"], ["The front door was unlocked and no alarms rang as I stepped into the building"]]}
        tag="c1-doorknob"/>.
    </p>
  </section>,
  <section>
    <p>The interior looked like I expected: old money New England, wood-panelled walls, rows of office doors embossed with the the names of
    professors and adjuncts.</p>
    <p>I called out a hello, but no one answered.</p>
  <p>I recognized a few names here and there but I was hunting for one door in particular—the professor I'd been hired to
    replace. I found it at the
    end of the row: <ListCard expansions={['"Professor Jeffrey Lynn"']}
    tag="c1-scholar"
        card={<span>
          Lynn's area of scholarship was 19th century mysticism. Mine was Civil War-era proto-feminist
          movements. Close enough, I guess.
        </span>}
      />. His door was <List expansions={[["ajar"], ["ajar, so I let myself in and flipped on a light"]]} tag="c1-in" />.
    </p>
  </section>,
  <section>
    <p>
      Lynn's office was small, stuffed with an absolute riot of folders, loose notes, and library books.
      A few old architectural maps were tacked to the walls. Despite these signs of life, it felt abandoned.
    </p>
    <p>
      His desk was a special kind of academic disaster, but a small worktable by the doorway held just a single stack of papers.
      I recognized a draft of my class syllabus and <ListCard expansions={["picked it up"]}
        tag="c1_syllabus"
        card={<span>Look if he didn't want me going through his things, he shouldn't have disappeared.</span>}
        nextUnit="chapter" />:

    </p>

  </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
