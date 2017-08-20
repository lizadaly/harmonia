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
        <h2  style={{marginTop: '10em'}}>Chapter Nine</h2>
        <blockquote>
          "There were no policemen, for there was no disorder, but thrift, sobriety, and decorum ruled,
          and the days passed in calm monotony."<br/>
          —<i>A Divided Republic</i>, Lillie Blake (1887)
        </blockquote>
      </heading>
    </section>
      ]

      return <RenderSection currentSection={currentSection} sections={sections}  />

}
