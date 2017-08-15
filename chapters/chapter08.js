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
        <h2>Chapter Eight</h2>
        <blockquote>
          "It will be obvious that the old state of society
          will not bear one moment’s comparison with the new, and that
          the only practical difficulty will be to restrain men from
          rushing too precipitously from the old to the new." <br/>
          —<i>A New View of Society</i>, Robert Owen (1813)
        </blockquote>
      </heading>

    <Map from={inventory.c5_direction}
      to={{
        archaeologist: <div>
          <p>
            I wasn't here a week and I already felt like I was running out of time.
          </p>
          <p>
            Dean Orellana hadn't orchestrated Lynn's disappearance, but now that he
            was conveniently out of the way, she had a window in which to get
            the construction project back on track before winter set in.
          </p>
          <p>The construction crew had unearthed the smaller, secondary tunnel
            sometime this summer. Lynn saw significance in it, but it had been
            <ListCard tag="c8-bricked"
              expansions={["bricked up"]}
              card={<span>Why, and by whom?</span>} /> in the utopians' era.
              Lynn also felt the pressure of time,
              and without waiting for permission,
              smashed through it.
          </p>
          <p>
            The notebook ended in August, but he didn't disappear until at least a week into
            September. Surely he had more <ListCard tag="c8-notes"
              expansions={["notes"]}
              card={<span>If he was anything like me, his work was spread over
              multiple notebooks, computer files, and napkins.</span>}/> on the artifacts he recovered from whatever
            device it was that he found in the chamber beyond the tunnel.
          </p>
          <p>

          </p>
        </div>

      }} />


    </section>

  ]


  return <RenderSection currentSection={currentSection} sections={sections}  />

}
