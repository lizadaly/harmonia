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
        <h2>Chapter Five</h2>
        <blockquote>
          "It was a beautiful world, but it was not my world."
          <br/>
          —<i>Moving the Mountain</i>, Charlotte Perkins Gilman (1911)
        </blockquote>
      </header>
      <p>
        Lillian sent me away with a heavy load of books, papers, and troubled thoughts. I retreated to my
        room, my things still largely unpacked, and went through <ListCard expansions={["her documents"]}
          tag="c5-docs" card={<span>It did not escape my notice that
          my student had given me homework.</span>} />,
        one by one.
      </p>
      <p>
        Her hypothesis that there had been a deliberate violent act
        towards the community was suggestive but not quite convincing. <ListCard expansions={["Ignatius Cadwell"]}
          tag="c5-ignatius" card={<span>This was the "Professor C—" chastised for his experiments in the newspaper column.</span>} /> was
        indeed one of the founding members of the Harmonians. He'd answered a <List expansions={[["classified ad"], ["classified ad"]]}
                                                                               tag="c5-ad" /> for recruits posted in one of the many
        Spiritualist newspapers at the time. Lynn had a copy:
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.paper2]} />
      <p>
        Cadwell and his <ListCard tag="c5-wife" expansions={["wife"]} card={<span>Despite being a colony that
        ostensibly treated women as equals, Elsie Cadwell was featured only sparsely in the records.</span>} /> Elsie moved to the
        nascent Harmonia community in 1885, along with about 75 other would-be utopians. The population waxed and waned
        for several years, peaking at 110 in the summer of 1888, until an irreversible slide meant that only 20
        families remained at the time of the Great Hall fire in November 1889.
      </p>
      <p>
        There was ample evidence in her documents that Cadwell was building something that he wished to keep secret, something
        that caused rumbles in the night, acrid smells, and prolonged absences from community obligations. The
        Harmonians <ListCard tag="c5-trade" expansions={["traded"]} card={<span>Like many intentional communities, the
        population was dominated by intellectuals, not farmers, and struggled to feed itself through the long winters.</span>} /> extensively
        with the local villages, and Cadwell's purchases were quite strange for a fledgling farm community: large quantities of
        copper wire, yards of "India rubber," and so many pounds of brass sheeting that "the horse-carts
        struggled for hours to climb the steep roads to the village." But I wasn't sure he was building a bomb.
      </p>
      <p>
        I kept coming back to that journal fragment I found in Lynn's office the night I arrived.
        Both Lynn and I had assumed it was a draft of a fantastical story, and that made for curious timing.
        Who takes a break from
        their grand destructive plan to <ListCard expansions={["work on their novel"]}
          card={<span>My efforts to put off my dissertation notwithstanding.</span>}
                                          tag="c5-dream" />?
      </p>
      <p>I needed to get that fragment back and find more of them, if they existed. Surely Lynn, an academic, kept a journal of
        his own—at the very least he'd have extensive documentation of the materials recovered from the construction.
      </p>
      <p>
        Collecting my thoughts, I <ListCard expansions={["jotted down"]} tag="c5-options"
        card={<span><Map from={inventory.c2_pen}
        to={{
          _undefined: "Personal motto: Always have a pen.",
          _any: "I said I always have a pen!"
        }} /></span>} /> three options:
      </p>
      <p className="card-inline">
      1. <List expansions={[["Convince"], ["Convince"]]}
          tag="c5_alice" />  Lynn's assistant, the elusive Alice Gilman, to let me go through his papers.
    </p>
  </section>,
  <section>
    <p>In fact I should've done this already—I really needed that syllabus—but I was was sensing that this woman
      was avoiding me.
    </p>
    <p className="card-inline">
      2. <List expansions={[["Break"], ["Break"]]}
           tag="c5_break" /> into his office myself.
    </p>
  </section>,
  <section>
    <p id="target-c5_testline">Did I know how to do this? I did not.</p>
    <p className="card-inline">
      3. <List expansions={[["Forget"], ["Forget"]]}
           tag="c5_explore" /> Lynn's existing papers and search the campus for others.
    </p>
  </section>,
   <section>
     <p>I could start with the Science Center expansion. <Map from={inventory.c2_direction}
       to={{
         curiosity: "There were those stairs to the basement, after all.",
         dean: "Surely the tunnels that the Historical Community were excavating hadn't been completely exhausted."
       }} />
     </p>
     <p>
       There was technically a fourth option:
     </p>
     <p className={'card-inline ' + (inventory.c5_drop ? 'strikethrough ': '')}>
        4. Just <List expansions={[["drop it"], ["drop it"]]} tag="c5_drop" />, keep my head down, and
        teach this class.
     </p>
   </section>,
   <section>
     <p>Almost inevitably, this investigation would lead to a dead-end, so I'd come to this choice eventually,
       and I couldn't bare to disappoint Lillian so soon.
       I was left to choose between <List expansions={[
       ["talking my way in there", "committing some light burglary", "playing archaeologist"],
       ["talking my way in there", "committing some light burglary", "playing archaeologist"],
     ]} conjunction="or" tag="c5_direction" />.
     </p>
   </section>,
   <section>
     <p>I might regret it, but at least I had a plan.</p>
     <NextChapter chapter={6} />
   </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
