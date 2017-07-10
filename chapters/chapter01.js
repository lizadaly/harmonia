const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'
import * as actions from '../actions'
import ListCard from '../components/listCard'

export default ({currentSection, inventory, cards}) => {
  const sections = [
    <section>
      <h2>November 3, 1980</h2>
      <p>It was nearly midnight when I finally arrived on campus, after more than a thousand
        miles of solo driving. The days had gotten shorter and colder and lonelier the further
        I went from home. <ListCard expansions={["St. Isidore College"]}
          tag="c1-college-name"
          card={<span>A tiny Catholic college, tucked in the upper corner of
          Massachusetts like a bookmark.</span>} /> would be my home now.
      </p>
      <p>
        The road to campus was barely paved, and on this night the early winter
        snow turned it into a slippery mess. My
        old beater car was fishtailing everywhere and I nearly sideswiped a
        couple trees.</p>
      <p>
        I'd hoped to arrive hours earlier, to <ListCard expansions={["sip warm mugs of hard cider"]}
          tag="c1-cider"
          card={<span>I admit I was hazy on what New England professors did in their free time.</span>} /> with
        the rest of the faculty and argue about transcendalism. At the very least I needed to
        know where I'd be sleeping. Instead the buildings were dark and
        shuttered, their <ListCard expansions={["windows narrow slits"]}
          tag="c1-windows"
          card={<span>When I picture them now I see rows of squinting brick facades, judging my tardiness.</span>} />.
      </p>
      <p>
      I parked in the first lot I found, and in a stroke of good luck it faced the English literature department.
      I unclenched my hands from the steering wheel—they'd been in a death grip since Connecticut—and hurried up
      to the entryway. <List
        expansions={[["The front door was unlocked"], ["The front door was unlocked and no alarms rang as I stepped into the building"]]}
        tag="c1-doorknob"/>.
    </p>
  </section>,
  <section>
    <p>The interior looked like I expected: old money New England, wood-panelled walls, rows of office doors embossed with the the names of
    professors and adjuncts. I recognized a few names, but I was hunting for one door in particular. I found it at the
  end of the row, <ListCard expansions={['"Professor Jeffrey Lynn"']}
    tag="c1-scholar"
        card={<span>
          Lynn's area of scholarship was 19th century mysticism. Mine was Civil War-era pre-feminist
          movements. Close enough.
        </span>}
      />. His door was closed but <List expansions={[["not locked"], ["not locked, so I let myself in"]]} tag="c1-in" />.
    </p>
  </section>,
  <section>
    <p>
      Lynn's office was small, stuffed with an absolute riot of stacked papers, notes, and library books.
      It had the feel of having been abandoned by its owner.
    </p>
    <p>
      His desk was a disaster, but a small worktable by the doorway had just a single stack of papers
      with my class's syllabus on top. I set it aside and <ListCard expansions={["started to flip through the rest:"]}
        tag="c1-pile"
        card={<span>Look if he didn't want his stuff read, he shouldn't have gone AWOL.</span>} />

    </p>

  </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
