const React = require('react')
import ListCard from '../components/listCard'
const notes = {
  notes01: [
    <div>
      <p>Introduction to American Utopian literature:</p>
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
        Reading list?
      </p>
      <ul>
        <li><ListCard expansions={["Looking Backwards"]}
          tag="r1-bellamy"
          card={<span>I thought this was a natural choice for a first reading on the topic: it's pretty
          readable</span>} />, Bellamy (1888)</li>
      </ul>
    </div>
  ]

}
export default notes
