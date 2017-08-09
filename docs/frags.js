const React = require('react')
import { List, Map } from 'windrift'
import ListCard from '../components/listCard'

export const frag1 = ({nextDoc, prevDoc, inventory}) =>  {
  return <div>
    <h1>September 30, 1889</h1>
    <p><ListCard expansions={["A TRUE BREAKTHROUGH"]}
      tag="frag1_first"
      author="lynn"
      card={<span>Historical Committee brought this novel? manuscript? letter? to my attention. Did
        one of the Futurians write it? Where are the rest of the pages?
        <br/>      <br/>
        [Cataloged as SP-X05-4]
      </span>} />

    </p>
    <p> At last! The veil between the worlds seemed especially
      thin, the weather fine, and my spirits uplifted. I was determined that this was the day to
      try again. E— was less willing, but ever is she so. What will it take to convince her?
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
    <p>E— of course, was gone, and everything around me was covered in a thick layer of dust and
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

export const frag2 = ({inventory}) =>  {
  return <div>
    <h1>September 17, 1889</h1>
    <p>
      I resume after a lull in my work; our neighbors were becoming more <ListCard author="lynn"
        tag="frag2-vocal"
        expansions={["vocal"]}
        card={<span>See <List expansions={[["The Circular"], ["The Circular"]]}
               tag="frag2-circular" /> for numerous examples: reports of strange explosions, sounds, smells!</span>} /> in their
      complaints. I admit difficulty in containing some of the experiments—there have been fires, and I have had
      to resort to stealing scraps of metal and wood to replace my damaged equipment. By moving the entire apparatus
      below-ground, I eliminated the danger of prying eyes (and ears), but has progress slowed due to
      the poor lighting and the need to further enlarge the natural work-space.
    </p>
  </div>
}

export const frag3 = ({inventory}) =>  {
  return <div>
    <h1>November 22, 1889</h1>
    <p>
      IT IS COMPLETE
    </p>
    <p>
      I write in haste and with great fatigue—I can barely recall what sleep feels like. But there is
      no more work to be done, and no turning back.
    </p>
    <p>
      This community was founded with the goal of realizing the Perfect Future. It is clear
      that we have failed. The pull of the <i>now</i> is too great, and our once-great
      experiment dissolves faster each day.
    </p>
    <p>E— and I will descend beneath the Phalanstery, where I will say my final words to this world,
      and together we will operate the device. I only hope to find a way for her to <ListCard
        author="zenobia"
        tag="frag3-z"
        nextUnit="section"
        expansions={["join me"]}
        card={<span>You always were an insufferable fool</span>} /> in the next world, the true Futuria.
    </p>
  </div>
}
