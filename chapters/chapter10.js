const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, ManyMap, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'
import * as actions from '../actions'
import ListCard from '../components/listCard'
import Reader  from '../components/reader'
import { docs } from '../docs'

export default ({currentSection, inventory, cards}) => {
  const sections = [
    <section>
      <div>
        <p className="travel">
          I became a <ListCard expansions={["cloud"]}
            tag="c10-d1"
            forceDir="down"
            card={<span>of <ListCard expansions={["atoms"]}
              tag="c10-d2"
              forceDir="down"
              card={<span>rushing through a <ListCard expansions={["tunnel"]}
                tag="c10-d3"
                forceDir="right"
                card={<span>of stone and <ListCard expansions={["spirit"]}
                  tag="c10-d4"
                  forceDir="down"
                  card={<span>
                    until I landed with a <List expansions={[["sigh"], ["sigh"]]}
                                            tag="c10-sigh" />.
                  </span>} />

                </span>} />
              </span>} /></span>
            } />

        </p>
      </div>
    </section>,
    <section>
      <header>
        <h2 style={{marginTop: "500px"}}>Chapter Ten</h2>
        <h3>December 2, 1889</h3>
        <blockquote>
          They have great moments, now and then, when a few people are gathered together,
          and their thought becomes electrical and their minds mingle as you have seen the
          glances of eyes mingle in a language more eloquent than speech.
          We ourselves have such moments, but the difference is:
          they appreciate the value of them and hold them fast,
          while we open our hands and let them fly away like uncoveted birds, or worthless butterflies.<br/><br/>
          —<i>Unveiling a Parallel</i>, Alice Jones and E. Merchant (1893)
        </blockquote>
      </header>
      <p>
        When I returned to myself, I lay on floor of the chamber, my limbs numb and near-useless. The machine was still
        churning, emitting irregular banging sounds like a pair of shoes in a tumble dryer.
        Eventually the noise became less frequent, until there was a final clatter of metal on
        metal and a resigned wheeze of steam, and then the room was silent.
      </p>
      <p>
        The chamber door was unsealed. I clumsily fumbled it open and dragged myself out.
        The upper platform
        was intact and smelled of fresh wood. Small kerosene lamps lit the cavern but they were flickering,
        low on fuel.
      </p>
      <p>
        I descended the platform mostly by crawling. I fell the last few feet off the ladder and landed
        in a <ListCard expansions={["painful heap"]} tag="c10-heap"
          card={<span>I was lucky to not twist an ankle.</span>}/>. Feeling was coming back in my extremities,
        along with a powerful thirst.
      </p>
      <p>
        The machine gleamed with so much shiny brass and copper that the cavern was saturated by a warm
        gold glow. It was brand new, which meant I was really here, when this strange Instrument was born.
      </p>
      <p>
        By the eastern tunnel, a dead man was slumped against the wall. His face was framed by overgrown brown muttonchops
        that were tinged with gray, and small silver glasses, and was dressed in a simple wool vest, collared shirt, and trousers. I assumed this was Ignatius Cadwell.
      </p>
      <p>
        I was able to stand now, barely, and made my way across the cavern like a toddler, grabbing at
        objects hand-over-hand for stability. Next to Cadwell’s <ListCard expansions={["body"]}
          tag="c10-cadwell"
          card={<span>I’d seen the dead, but only at funerals. I didn’t like to examine him,
            but I didn’t see any obvious injury.
          </span>}/> lay a bucket, a tin cup, and, crucially, a <List expansions={[["journal"], ["journal"]]} tag="c10-journal" />.
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.frag7]} />
    </section>,
    <section>
      <p>
        I recognized the handwriting in that note. “Lynn?” I called out.
      </p>
      <p>
        A weak reply from far off: “In here.”
      </p>
      <p>I kicked rocks and boards aside and squeezed my way through the barely passable eastern tunnel, emerging

        in   <Map from={inventory.c5_direction}
          to={{
            archaeologist: "what I recognized as the old root cellar (not so old now) beneath the (not yet built) Science Center",
            _any: "a root cellar, flanked on one side by a trough full of sand and wooden storage crates on the other"
          }}
             />.  <Map from={inventory.c5_direction}
               to={{
                 archaeologist: "In this time, the storage room ",
                 _any: "The storage room "
               }}
                  /> ended in a staircase leading to a closed door. The cellar was lit by
        a flickering gas lantern and a tantalizing rectangle of sunlight around the doorframe.
      </p>
      <p>
        A man I presumed was Professor Jeffrey Lynn lay at the top of the stairs. He looked much more
        like a college professor than I did, with a Santa Claus beard and a crumpled bowtie.
        His wild
        expression suggested he thought I was a hallucination.
      </p>
      <p>“My name’s Abby Fuller,” I said. “I’m your substitute teacher.”</p>
      <p>
        He barked a laugh and struggled to sit up. “Does my substitute teacher have any water?” His voice was in tatters.
      </p>
      <p>
        “Not yet.” I pointed at the door. “May I?” He nodded and slid over to accommodate
        me at the top of the steps.
      </p>
      <p>
        The knob turned freely but the door didn’t budge. “I think it’s barricaded on the other side,”
        Lynn said. “I spent a day, maybe more, just getting through the tunnel. I was just too tired to—"
      </p>
      <p>
        “I’m not tired,” I lied. I <List
          tag="c10-door" expansions={[["pushed—"], ["pushed harder—"], ["slammed into the door with my shoulder."]]} />
      </p>
    </section>,
    <section>
      <p>
        A scorched metal bar had been braced up against it; it clattered to the floor and the cellar door popped open
        into the ruin of a pantry.
      </p>
      <p>
        The air stank of burnt wood and melted rubber. The sandstone walls had survived the worst of it, but
        everything else was singed or powdered in soot.
        Sunlight streamed down through the collapsed ceiling, and all the windows were empty of glass.
        I could see through to more
        broken rooms, arranged around a central space littered with the remains of the roof.
        The peak of the Astrolith was just visible among blackened beams and scorched furniture.
      </p>
      <p>
        I was inside the ruin of the Great Hall. I’d seen the Dean’s painting, but it did not adequately
        convey the scale of this place. The Hall had been an embodiment of their community, a massive building even by
        modern standards, all built by hand.
      </p>
      <p>
        “Ah, yes, finally, the Phalanstery,” Lynn said <ListCard tag="c10-hall"
          expansions={["sourly"]}
          card={<span>He arrived too late to see it, even with a time machine.</span>} />.
        He tried to stand but couldn’t, and rested against the lintel.
      </p>
      <p>
        “I’ll find some water,” I said. In the bright sunlight I could see how archaically he was dressed, with a
        simple vest, pocketwatch, and wool pants.
      </p>
      <p>
        “It was to be my first time through,” he said, his voice a whisper. “But I saw her face as she threw the
        lever; she had no intention of bringing me back.”
      </p>
      <p>
        I nodded grimly. “I’ll have to avoid being seen, but I’ll <List expansions={[["return"], ["return"]]}
                                                                    tag="c10-return" /> soon, I promise.”
      </p>
    </section>,
    <section>
      <header className="section-divider">
        <svg className="divider" fill="white" stroke="black">
          <line x1="0" y1="0" x2="100%" y2="0" />
        </svg>
      </header>
      <p>
        It was a bright, cloudless December day, with frost in the air. Without the
        Astrolith as a reference I’d have never recognized where I was. The solemn brick edifices of the college were absent,
        and the trees were few and small. Instead of a tidy green lawn, the ground was covered in a patchwork of
        dirt, clover, and crabgrass. The odor of horses and hay was noticeable.
      </p>
      <p>
        Cadwell described our future as quiet, but I suppose it’s what you’re used to.
        To him, the laughter of crows, the sighs and shuffling of farm animals,
        the sound of a slow wagon crunching over gravel, was the modern cacophony of life he sought to escape.
        What I heard most was an absence: no drone of distant airplanes, hum of ventilation systems, or trucks idling sloppily.
      </p>
      <p>
        In place of the college gymnasium was a large vegetable garden, shaded by a few gnarled pear trees and bordered on one end by
        a tidy hedge. A woman in a plain white
        cap was pulling up greenish pumpkins from a mass of vines.  <Map from={inventory.c10_woman || inventory.c10_men}
          to={{
            _undefined: <span>
              She looked otherwise alone, potentially safe to <List expansions={[["approach"], ["approach"]]}
                                                                tag="c10_woman" />.
              I could also hear men’s voices, many of them, from a nearby <List expansions={[["barn"], ["barn"]]}
                                                                            tag="c10_men" />.
            </span>,
            _any: <span>
              She looked otherwise alone, potentially safe to approach.
              I could also hear men’s voices, many of them, from a nearby barn.
            </span>
          }}
        />
      </p>
    </section>,
    <section>
      <Map from={inventory.c10_woman || inventory.c10_men}
        to={{
          approach: <div>      <p>
            “Hello,” I said, cautiously. I smiled and held out my hands, palms up.
          </p>
            <p>
              “Hello,” she said. She eyed my clothes, lingering on my jeans, but said nothing more.
            </p>
            <p>
              “Do you know where I could get some water?”
            </p>
            <p>
              “There’s no more running water since the Phalanstery burned. There’s a cistern there,” she said, nodding
              towards the row of <ListCard expansions={["stone houses"]} tag="c10-houses"
                card={<span>I hadn’t noticed them behind the hedges. There were eight now. </span>} />.
              “Here, take this,” and emptied a pail of
            pears into her basket of pumpkins.</p>
            <p>I leaned into the garden and took the pail from her gratefully. She was at least a head shorter than me.
              Tendrils of her blonde hair poked out from beneath the cap,
              and up close I could see that her neck was deeply <ListCard expansions={["scarred"]} tag="c10-scar"
                card={<span>Remnants of some infection I almost certainly had never needed to worry about.</span>} />.
              She was inspecting me in turn, which was only fair. She asked, “Which community are you from which allows such reformed attire?”
            </p>
            <p>
              “Blithedale Farms,” I improvised. “Please excuse me, I need to bring this to my friend urgently.” My own thirst
              was now overwhelming.
            </p>
            <p>
              She nodded, disappointed. “If you want my advice, you’ll leave soon as you can,” she said, in a low voice.
              “This is no longer a place for women.”
            </p>
            <p>
              I started to ask why but she stopped suddenly, listening. She then crouched, pointing at the hedgerow: <i>Make yourself
              scarce.</i> I did as she bid me, and heard the voices of men pass on the other side of the hedge.
            </p>
            <p>
              The first voice: “We can debate philosophy all day, and I know that you will, Owen. That does not change the fact
              that the bank is foreclosing on this land
              any day now. I intend to take back what I put in to this foolhardy experiment.”
            </p>
            <p>
              The reply, presumably from the man named Owen: “Then let us accept the offer from the ladies to
              incorporate the community school. They have raised over fifty-thousand
              from various benefactors in Albany and Boston. That should be more than sufficient to recoup your investments.”
            </p>
            <p>
              There was a braying and ugly laugh from a third voice. “A college for women will just breed more crones
              like Cadwell’s.”
            </p>
            <p>“What concern is that of yours?” Owen said. “Let them carp and heckle each other to death. Your wife has no such flaw.”
              The other man barked a laugh again. “This all sounds settled to me,” Owen concluded.
              “Tomorrow we will go down to the village and send word to the bank.”
            </p>
            <p>
              The voices faded, and I caught the eye of the woman. She nodded towards the houses, and
              I <List expansions={[["dashed"], ["dashed"]]} tag="c10-cross" /> across, wishing I could thank her better.
            </p>
          </div>,
          barn: <div>
            <p>
              The barn was huge, much bigger than the picturesque suburban barns I’d seen on my drive to Blithedale.
              It was painted chocolate brown and had few windows save for an unusual
              turret at one end, with windows on all sides. It looked disconcertingly like a prison watchtower.
            </p>
            <p>
              One side of the property was enclosed by a fence containing a few listless cows,
              so I ran around the other, towards the voices. Wagons and horses were tied up by an open doorway.
              The horses stood in front of a drinking trough; I was desperate enough to consider getting water from it,
              but it was <ListCard expansions={["dry"]}
                tag="c10-dry" card={<span>Many water sources had been emptied as part of the fruitless attempt to
                save the Great Hall.</span>} />. Further away, I could make out the row of stone houses,
              and what appeared to be a large well.
            </p>
            <p>
              I peeked into the doorway. Half a dozen men, all with luxurious facial hair,
              were having some kind of impromptu meeting. Some looked comfortable seated on hay bales and
              barrels; others stood, fussily adjusting their appearance and seeming to object to everything.
            </p>
            <p>
              “I don’t see a viable alternative to disbanding the trust,” one of the gruffer gentlemen complained.
              “We are wholly without capital,
              and I for one will not sink a single additional penny into this fever dream.”
            </p>
            <p>
              “You’d feel differently, Williams, if you’d embraced <ListCard expansions={["Scientific Marriage"]}
                tag="c10-marriage"
                card={<span>I'd encountered this term in the archives a few times now, but never found a definition.</span>} />.” This was said by a skinny
              young fellow
              reclining pointedly in the hay.
            </p>
            <p>
              “The community was doing fine before your like introduced that nonsense,” the other retorted.
              “The women won’t stand for it—"
            </p>
            <p>
              “We just needed more time,” a third man complained. “We should’ve expelled Cadwell and his harridan
              years ago—"
            </p>
            <p>
              The man named Williams scoffed. “Easy to say now, Owen. I recall your paper extolling him as an
              unsung genius not one year ago.”
            </p>
            <p>
              The <ListCard expansions={["young man"]}
                tag="c10-young-man"
                card={<span>He was sallow and oily, with a stupid blond mustache and a punchable face.</span>} /> laughed unpleasantly. “Whenever that oaf opened his mouth I wanted to cringe.
              And don’t get me started on his witch—I lay blame entirely at her feet for poisoning the minds of the other wives.”
            </p>
            <p>
              Williams raised his voice. “We can debate philosophy all day, and I know those of you who will if
              no one puts a stopper in you. That does not change the fact that the bank is foreclosing
              any day now. I intend to take back what I put in to this foolhardy experiment.”
            </p>
            <p>
              “Then let us accept the offer from the ladies to independently incorporate the community school,”
              Owen said, his hands held out in a calming gesture. Williams started to object, but was cut off: “They have raised over fifty-thousand
              from various benefactors in Albany and Boston. That should be more than sufficient to recoup your investments.”
            </p>
            <p>
              The young man laughed again. “A college for women will just breed more of the same.”
            </p>
            <p>
              “What concern is that of yours?” Owen said. “Let them carp and heckle each other to death. Your wife has no such flaw.”
              The other man bowed theatrically, as if acknowledging a compliment. “This all sounds settled to me,” Owen concluded.
              “Tomorrow we will go down to the village and send word to the bank.”
            </p>
            <p>
              The gathering was breaking up, but I’d heard enough anyway. While the men huddled close to shake hands
              and otherwise congratulate each other on escaping the paradise they’d built for themselves,
              I stole a nearby tin pail and <List expansions={[["dashed"], ["dashed"]]} tag="c10-cross" /> to the row of stone houses.

            </p>

          </div>
        }} />
    </section>,
    <section>
      <p>
        A young girl in a neat green dress, about six years old, and a boy of the same age were playing in the dirt behind
        what I recognized as the Adams
        house. When they saw me they stopped what they were doing but said nothing.
      </p>
      <p>
        The <Map from={inventory.c10_woman || inventory.c10_men}
          to={{
            approach: <span> cistern was </span>,
            barn: <span> large well was technically a cistern, </span>
          }}
            /> a circular stone hole, roughly mortared inside, next to the largest of the <ListCard expansions={["houses"]}
              tag="c10-largest"
              card={<span>In my time, this house was a squash court.</span>}/>.
        A lead pipe ran down the length of the house and disappeared into the
        hole. I couldn’t see any water inside, but there was a rope with a <List expansions={[["hook"], ["hook"]]}
                                                                             tag="c10-hook" /> affixed nearby.
      </p>
    </section>,
    <section>
      <p>
        I put the hook over the handle on my pail and lowered it hand-over-hand while the girl watched.  I
        felt it hit the surface of water and could tell that it just flopped over and floated. The lightweight tin wasn’t heavy
        enough.
      </p>
      <p>
        I moaned with frustration and pulled it back up again.
        The girl touched my arm and I saw she held a heavy smooth stone. For one wild moment I
        thought she meant to hit me with it, but when she  <List expansions={[["held it out"], ["held it out"]]}
                                                             tag="c10-held" /> I understood.
      </p>


      </section>,
    <section>
      <p>I dropped the stone in the bucket and lowered it again. This time I heard the satisfying <i>plunk</i> as
        the pail sunk below the water. Once full, it was surprisingly heavy. The girl, who had still said not a word,
        reached down and pulled with me. The boy
        just watched from afar.
      </p>
      <p>
        “Thank you,” I said to her, and gratefully drank straight from the pail. Together we refilled it, and then
        I began to return to the Great Hall by following a winding gravel road. She trotted along beside me, the boy forgotten.
      </p>
      <p>
        “What’s your name?” I said.
      </p>
      <p>
        “Lilly.”
      </p>
      <p>
        “I know a young woman named Lillian,” I said. “You <List expansions={[["remind me a little of her—"], ["remind me—"]]}
                                                             tag="c10-remind" />”
      </p>
    </section>,
    <section>
      <p>The sound of men’s voices carried over the fields, and the girl grabbed my arm. “Come this way,” she said. She pulled me into a narrow one-story clapboard building,
        long and low like a stable, painted white with black trim.
      </p>
      <p>
        The interior was effectively a single room, a long communal kitchen. A dozen women, most dressed in loose pants
        under skirts, moved between the two stone hearths and several massive work tables. There were stations for bread
        and stations for soup and large cabinets full of white plates; I didn’t see any meat. Most women were bare-headed, their hair
        tied back in loose buns. I
        stopped short at the entrance,
        and they slowly began to notice me, pausing their work to just stare.
      </p>
      <p>
        “Through here,” Lilly urged. I weaved between the women, muttering apologies. The girl led me out a wide
        barn-like doorway, where a few horses and wagons were tied, and then immediately into another large
        communal building.
      </p>
      <p>
        “This is the Children’s Hall where we live,” she explained. Like my faculty residence, it was made up of many individual
        bedrooms, but each was filled with cots and cradles.
      </p>
      <p>
        “You don’t live with your parents?” I asked.
      </p>
      <p>
        She looked at me with honest puzzlement. “What are those?”
      </p>
      <NextChapter chapter={11} />
    </section>

  ]

  return <RenderSection currentSection={currentSection} sections={sections}  />
}
