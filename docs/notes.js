const React = require('react')
import ListCard from '../components/listCard'

const notes = ({nextDoc, prevDoc}) => {

    return <div>
      <p>
        Coined by Thomas More, <i>Utopia</i> (1516), utopian literature flourished
        in the late 19th century. Often intertwined with real-life intentional communities.
        Many stories are thin narrative window-dressing over socialist tracts—heavy
        on excruciating detail about food production, civic engagement, gender politics.
      </p>
      <p>Students should come away with an understanding of the political landscapes
      that shaped utopian thinking, and be prepared to discuss their influence on later
      fantasy/science fiction/dystopian writing.
      </p>
      <h6>
        Preliminary reading list
      </h6>
      <ul>
        <li><ListCard expansions={["Looking Backwards"]}
          tag="r1_bellamy"
          nextUnit="section"
          card={<span>I thought this was a natural choice: it's pretty
          readable and it spawned many imitators.</span>} />, Bellamy (1888)</li>
          <li><i>A Crystal Age</i>, Hudson (1887)</li>
          <li></li>
      </ul>
      <p className="lynn-font">(Include the unknown manuscript from the college archive? Might be fun for students!)</p>
    </div>
}

export default notes
