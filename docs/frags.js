const React = require('react')
import { List, Map } from 'windrift'
import ListCard from '../components/listCard'

export const frag1 = ({nextDoc, prevDoc, inventory}) =>  {
  return <div>
    <h1>October 30, 1890</h1>
    <p><ListCard expansions={["A TRUE BREAKTHROUGH"]}
      tag="frag1_first"
      author="lynn"
      card={<span>[The Archivist] brought this to my attention. Logically it
        must have belonged to one of the Harmonists; were they the author?</span>} />

    </p>
    <p> At last! The veil between the worlds seemed especially
    thin, the weather fine, and my spirits uplifted. I was determined that this was the day to
    try again. Z— was less willing, but ever is she so. What will it take to convince her?
    </p>
    <p>Once the machine was engaged, the familiar shadow fell across my vision and the
      nerves in my extremities became excited. I felt the roots of the cellar floor grow up beneath
      my legs, enveloping my feet and then my upper legs. At the same time I could feel myself pulled upward,
      toward the great rock.
    </p>
    <p>I was pinned in place between these two forces of Nature. How long
      this went on I cannot say, but at last the cosmic force receded and I was released.
      My sensibilities
      were wholly in the New Paradise.
    </p>
    <p>Z— of course, was gone, and everything around me was covered in a thick layer of dust and
      debris. I freed myself from the earth and set about exploring this miraculous place again.
    </p>
    <p>I was struck this time by the carriages: great enclosures of iron and glass, which moved without the aid
      of <Map from={inventory.frag1_first}
            to={{ _undefined: "beasts or men, and which gave off no steam.",
                _any: <span>
                        <List tag="frag1_last"
                          expansions={[["beasts or men, and which gave off no steam."], ["beasts or men—"]]}
                           />
                      </span>
          }} />
      </p>
    </div>
}
