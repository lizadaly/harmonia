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
      <h5>Themes</h5>
      <ul>
        <li>Optimism:
          USA was seen as a blank slate, lacking historical European class baggage
        </li>
        <li>Feminism: Many utopias were envisioned with women's suffrage in mind,
        but traditional gender roles persisted</li>
        <li>Racism and xenophobia: Despite liberal attitudes about women, many
        utopians were enthusiastic eugenists or segregationists.</li>
        <li>Industrialization: Dual-edged sword, mechanization was seen as a way
          to free workers from drudgery and enable collective society, but also
          as a threat to creativity.</li>
        <li>
          The devastation of the Civil War and the failure of earlier utopian
        communities meant that many of these stories were set in the "far future"
        (e.g. year 2000)</li>
      </ul>
      <p>
        Reading list
      </p>
      <ul>
        <li><ListCard expansions={["Looking Backwards"]}
          tag="r1-bellamy"
          card={<span>I thought this was a natural choice: it's pretty
          readable and it was wildly popular at the time.</span>} />, Bellamy (1888)</li>
          <li><ListCard expansions={["A Crystal Age"]}
            tag="r1-hudson"
            card={<span>Creepy utopian romance about a guy who meets a post-apocalyptic family of
            de-sexualized agarians.</span>} />, Hudson (1887)</li>
          <li>???</li>
      </ul>
      <p className="lynn-font">Reminder: look up that manuscript from the college archives!</p>
    </div>
}

export default notes
