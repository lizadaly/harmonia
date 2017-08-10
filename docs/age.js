const React = require('react')
import { List } from 'windrift'
import ListCard from '../components/listCard'

const age = ({nextDoc, prevDoc}) =>  {
  return <div>
    <h1>A Crystal Age</h1>
    <h4>by</h4>
    <h3>W.H. Hudson</h3>
    <p>
      <br/>
      I do not quite know how it happened, my recollection of the whole matter ebbing in a somewhat clouded condition.
      While hunting for some variety of plants in the mountains, I sat down to rest on the edge of a ravine.
      The ground suddently gave way all about me,
      precipitating me below. The fall was a very considerable one—probably thirty or forty feet, or more,
      and I was <ListCard author="lynn"
        tag="age1-unconscious"
        expansions={["rendered unconscious"]}
        card={<span>Another case of "fall asleep, wake in future." Discuss with class!</span>}
                />.
    </p>
    <p>
      How long I lay there under the heap of earth and stones carried down in my fall
      it is impossible to say: perhaps a long time; but at last I came to myself and struggled up from the debris,
      like a mole coming to the surface of the earth to feel the genial sunshine on his dim eyeballs.
    </p>
    <p>
      I found myself standing in an immense pit. It looked as if the solid earth
      had been indulging in some curious transformation during those moments of insensibility.
      I had a great mass of small fibrous rootlets tightly woven about
      my whole person; it appeared as if the <ListCard expansions={["grown round me"]}
        tag="age1-roots"
        author="lynn"
        nextUnit="section"
        card={<span>Echoes of Manuscript SP-X05? Did this work influence that novel?</span>} />.
    </p>
  </div>
}
export default age
