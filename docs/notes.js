const React = require('react')
import ListCard from '../components/listCard'

const notes = ({nextDoc, prevDoc}) => {

    return <div>
      <h3>19th Century Utopian Literature</h3>
      <h4>ENG203, Fall Semester, Blithedale College</h4>
      <p>
        The term was first coined by Thomas More in <i>Utopia</i> (1516), but
        utopian literature truly flourished
        in the late 19th century. It often inspired or was inspired by real-life
        communes or intentional communities.
        Stories tend to be thin narrative window-dressing over socialist tracts—heavy
        on detail about food production, civic engagement, and gender politics, but low
        on storytelling and characterization.
      </p>
      <p>Students should come away with an understanding of the political landscapes
        that shaped utopian thinking, and be prepared to discuss utopians’ influence on later
        fantasy and science fiction.
      </p>
      <h4>
        Preliminary reading list
      </h4>
      <ul>
        <li><ListCard expansions={["Looking Backwards"]}
          tag="r1_bellamy"
          nextUnit="section"
          card={<span>I thought this was a natural choice: it’s pretty
          readable and it spawned many imitators.</span>} />, Bellamy (1888)</li>
        <li><i>A Crystal Age</i>, Hudson (1887)</li>
        <li><i>Earth Revisited</i>, Brooks (1893)</li>
      </ul>
    </div>
}

export default notes
