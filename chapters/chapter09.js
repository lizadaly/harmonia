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
        <h2>Chapter Nine</h2>
        <blockquote>
          "There were no policemen, for there was no disorder, but thrift, sobriety, and decorum ruled,
          and the days passed in calm monotony."<br/>
          —<i>A Divided Republic</i>, Lillie Blake (1887)
        </blockquote>
      </heading>
      <p>
        I looked down around me, and saw signs of modern intrusion: several plastic milkcrates, a flashlight, a few
        empty bags of potato chips. The milkcrates were stuffed full of
        notebooks and papers and as I knelt down, flashlight stuck under one arm, I almost wept with joy.
        I'd been collecting these one-by-one in a scavenger hunt and here was a small library.
      </p>
      <p>
        One crate was entirely full of issues of <i>The Circular</i>. Lynn had <List expansions={[["annotated"], ["annotated"]]}
                                                   tag="c9_paper" /> one on top, from late in the colony's history:
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.paper4]}/>
    </section>
  ]

  return <RenderSection currentSection={currentSection} sections={sections}  />

}
