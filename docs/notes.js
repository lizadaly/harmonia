const React = require('react')
import ListCard from '../components/listCard'

const notes = ({nextDoc, prevDoc}) => {

    return <div>
      <p>Introduction to Utopian literature:</p>
      <ul>
        <li>Optimism:
          USA was seen as a blank slate for utopians without historical European class baggage
        </li>
        <li>Many early 19th c US utopian communities had failed (e.g. Owenism) or were shrinking
          (Shakers)</li>
        <li>Devastation of Civil War and dehumanizing effects of industrial revolution</li>
        <li>As a result many utopian stories were set in the future, but based in the real
          communities of the beginning of the century</li>
      </ul>
      <p>
        Reading list for first weeks?
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

      </ul>
      <p>Reminder: look up that manuscript from the college archives</p>
    </div>
}

export default notes
