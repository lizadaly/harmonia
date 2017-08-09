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
        <h2>Chapter Five</h2>
        <blockquote>
          "It was a beautiful world, but it was not my world."
          <br/><br/>
          —<i>Moving the Mountain</i>, Charlotte Perkins Gilman (1911)
        </blockquote>
      </heading>
      <p>
        Lillian sent me away with a pile of books, papers, and troubled thoughts. I retreated to my
        room, my bed unmade and my things still largely unpacked, and went through <ListCard expansions={["her documents"]}
          tag="c5-docs" card={<span>It did not escape my notice that my student had given me homework.</span>} />,
        one by one.
      </p>
      <p>
        Her evidence was suggestive but not quite convincing. <ListCard expansions={["Ignatius Cadwell"]}
          tag="c5-ignatius" card={<span>This was the "Professor C—" chastised in the newspaper column.</span>} /> was
        one of the founding members of the Futurians. He'd answered an ad for recruits posted in one of the many
        Spiritualist newspapers at the time:
      </p>
      <blockquote className="advertisement">
        <h2>A New Paradise</h2>
        <p>Scholarly men, with full hearts, open minds, and sturdy backs! You are wanted for a new community.
          Join like-minded free thinkers as we build a futuristic way of living—as equals before God and Man,
          guided by Science and Spirit alike. Inquire at 10 Broad St. Boston, MA.
        </p>
      </blockquote>
      <p>
        He and his <ListCard tag="c5-wife" expansions={["wife"]} card={<span>Despite being a colony that
        ostensibly treated women as equals, Alice was featured only sparsely in the records.</span>} /> Alice moved to the
        nascent Futuria community in 1885, along with about 75 other would-be utopians. The population waxed and waned
        for several years, peaking at 110 in the summer of 1888, until an irreversible slide meant that only 20
        families remained at the time of the Great Hall fire.
      </p>
      <p>
        There was ample evidence that Cadwell was building something that he wished to keep secret, something
        that caused rumbles in the night, acrid smells, and prolonged absences from community meetings. The
        Futurians <ListCard tag="c5-trade" expansions={["traded"]} card={<span>Like many intentional communities, the
        population was dominated by intellectuals, not farmers, and struggled to feed itself through the long winters.</span>} /> extensively
        with the local villages, and Cadwell's purchases were strange: immense quantities of
        copper wire, yards of "India rubber," and so many pounds of brass sheeting that "the horse-carts
        struggled for hours to climb the steep sodden roads to the village." But I wasn't sure it was a bomb.
      </p>
      <p>
        I kept coming back to that journal fragment I found in Lynn's office the night I arrived. He'd catalogued
        it as SP-X05, same as Cadwell's journals, and what I remembered of the handwriting seemed to match.
        The fragment appeared to be a draft of a fictional story, but the timing was curious. If you're
        scheming day and night on your grand destructive plot, do you take time out to <ListCard expansions={["work on your novel"]}
          card={<span>Or perhaps Cadwell retreated into fantasy in response to the dissolution of the real utopian dream?</span>}
                                                                                         tag="c5-dream" />?
          </p>
    </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
