const React = require('react')
import { List, Map } from 'windrift'
import ListCard from '../components/listCard'

export const frag1 = ({nextDoc, prevDoc, inventory}) =>  {
  return <div>
    <h1>September 30, 1889</h1>
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
      debris. I freed myself from the earth and set about exploring <ListCard expansions={["this miraculous place"]}
        tag="frag1_first"
        author="lynn"
        card={<span>Historical Committee brought this novel? manuscript? letter? to my attention. Did
          one of the Futurians write it? Where are the rest of the pages?
          <br/>      <br/>
          [Cataloged as SP-X05-4]
        </span>} /> again.
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
      below-ground, I eliminated the danger of prying eyes (and ears), but progress has slowed due to
      the poor lighting down there and the need to further enlarge the natural work-space.
    </p>
  </div>
}

export const frag3 = ({inventory}) =>  {
  return <div>
    <h1>November 22, 1889</h1>
    <p>
      I write in haste and with great fatigue—I can barely recall what sleep feels like. But there is
      no more work to be done, and no turning back. The device is complete.
    </p>
    <p>
      This community was founded with the goal of realizing the Perfect Future. It is clear
      that we have failed. The pull of the <i>now</i> is too great, my founding family has left us,
      and our once-great experiment dissolves faster each day.
    </p>
    <p>E— and I will descend beneath the Phalanstery, where I will say my final words to this world,
      and together we will operate the device. I only hope to find a way for her to <ListCard
        author="elsie"
        tag="frag3-z"
        nextUnit="section"
        expansions={["join me"]}
        card={<span>You always were an insufferable fool</span>} /> in the next world, the true Futuria.
    </p>
  </div>
}

export const frag4 = ({inventory, note=false}) =>  {

  const card1 = note ? <ListCard expansions={["morning chores"]}
    tag="frag4_chores"
    author="elsie"
    card={<span>As if you ever did such work yourself.</span>}/> : <span>morning chores</span>

  const card2 = note ? <ListCard expansions={["eliminated"]}
    tag="frag4_eliminated"
    author="elsie"
    card={<span>Perhaps they should have been.</span>} /> : <span>eliminated</span>

  const card3 = note ? <ListCard expansions={["young women"]}
    tag="frag4_women"
    author="elsie"
    card={<span>Because it is a college for women! Arrogant mule.</span>} /> : <span>young women</span>

    const card4 = note ? <ListCard expansions={["miasma of beasts"]}
      tag="frag4_beasts"
      author="elsie"
      nextUnit="section"
      card={<span>Animals stink. We are well-rid of them.</span>} /> : <span>miasma of beasts</span>

  return <div>
    <h1>October 13, 1889</h1>
    <p>I arrive this time in daylight and not darkness. To fully convey the strangeness of my journey, I shall
      describe each sense's impression in turn:
    </p>
    <p>It was dawn, yet there was a deep
      quiet—no roosters, nor soft murmuring of cows, nor sounds of my neighbors
      performing their {card1}.
    </p>
    <p> As the village awakened, I was aware of a profound absence: I saw no men at all.
      Had they all been {card2} in
      this time and place? Eventually they did appear, but so few, doing mostly menial work, while
      tall {card3} in strange clothing—some wearing trousers, or next to nothing at all—drift
      impassively along without a care in the world.
    </p>
    <p>Then all at once, I became aware of my sense of smell. Gone was the {card4}, and it was not replaced with coal-smoke or even the
      scent of wood fire. There was only the sweet odor of trees and fresh air.
    </p>
  </div>
}

export const frag5 = () =>  (
  <div>
    <h1>June 2, 1887</h1>
    <p>
      Is there anything more beautiful than Futuria in the summer? We are in high spirits, as yet more members
      have <ListCard author="lynn" expansions={["joined"]} tag="frag-pop" author="lynn"
        card={<span>This would be the high point of the population for them. Most of these new recruits were gone by winter.</span>} /> us our grand experiment this Spring. The new men are strong and
      capable; their wives and sisters handsome. I am confident our harvest this year will be sufficient
      to all but eliminate our dependence on supplies from North Adams and elsewhere.
    </p>
    <p>
      This month was my turn at the <ListCard author="lynn" expansions={["digging"]} tag="frag-digging"
        card={<span>More evidence of a network of supply tunnels and cellars for root storage.
        Do these still exist?</span>} /> work-group. Of course I was too busy with my <ListCard  author="lynn" expansions={["galvanic experiments"]}
          tag="frag-mit"
          nextUnit="section"
          card={<span>Only one Futurian was known to be an engineer: I. Cadwell. Dropped out of MIT in 1878, no record except marriage certificate in
          1882, joined Futuria at the founding in 1883.</span>} /> to waste time with manual labor; I prevailed upon E- to find me a replacement, and she succeeded as she does
      all things. She is so devoted to my work—an example to all of our husbands and wives who seek a more
      Scientific marriage.
    </p>
  </div>
)

export const frag6 = () =>  (
  <div>
    <h1>February 25, 1887</h1>
    <p>Have completed our trials with chickens and then dogs.  For the most part, they have all returned
      successfully, and as such I am convinced of the readiness of the device for a human being.
    </p>
    <p>Of course, it would be foolish for <i>me</i> to be the first to enter—if something were to go awry,
      it would hardly be possible for E- to fix it! After much consternation, I convinced E- of the rightness of my plan. If only all our wives were so rational in their thinking,
      we would not have seen the departure of so many families this year.
    </p>
    <p>
      As I have detailed in the <ListCard author="lynn" expansions={["blueprint"]}
        tag="frag-blueprint" card={<span>Cataloged as SP-05-9. Given the sensitivity, I am keeping this
          in my personal collection for now.</span>} />, the device requires two to operate (a flaw I will address in a subsequent
      design). After a final disagreeable conversation, we entered the work-space via
      the <ListCard author="lynn" expansions={["eastern tunnel"]}
      tag="frag-tunnel" card={<span>No excavation of this tunnel to date, if the work-space is where I believe it to be.</span>} />. E- ascended to the platform, and I engaged the galvanic
      engine. While achieving sufficient rotational speed, the engine exceeds the tolerance of its
      brass enclosure—stronger rivets are required, I believe. But I succeeded, and E- underwent
      the <ListCard author="lynn" expansions={["transfiguration"]}
        nextUnit="section"
        tag="tag-transformation" card={<span>Frustrating lack of detail here!</span>} /> of her spirit
         as planned, and I returned her to our world as we agreed, no more than ten minutes thence.
    </p>
    <p>
      "I have no words," she said, upon return, all her former doubts extinguished, "Truly it is a New Eden."
    </p>
  </div>
)
