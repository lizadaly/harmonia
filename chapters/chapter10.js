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
      <p>
        I was a <ListCard expansions={["puff"]}
          tag="c10-d1"
          forceDir="down"
          card={<span>of <ListCard expansions={["atoms"]}
            tag="c10-d2"
            forceDir="left"
            card={<span>rushing through a tunnel
            </span>} /> <Map from={inventory["c10-d2"]}
              to={{
                  _undefined: "",
                    atoms: <span>and a cloud of <ListCard expansions={["dust"]}
                      tag="c10-d3"
                      forceDir="right"
                      card={<span>floating in a still room
                      </span>} />
                    </span>
              }} />
            <Map from={inventory["c10-d3"]}
              to={{
                    _undefined: "",
                      _any: <span><br/><br/> and a spray of <ListCard expansions={["mist"]}
                        tag="c10-d4"
                        forceDir="center-down"
                        nextUnit="section"
                        card={<span>from a wave.
                        </span>} />
                      </span>
              }} />
          </span>} />
      </p>
    </section>,
    <section>
      <header>
        <h2 style={{marginTop: "10em"}}>Chapter 10</h2>
        <h3>November 20, 1889</h3>
        <blockquote>
          "I would not exchange this life for any I have ever led. I could not feel content with the life of
          isolated houses and the conventions of civilization."<br/>
          —Personal letter, Marianne Dwight, resident of Brook Farm (1844)
        </blockquote>
      </header>
      <p>
        When I returned to myself, my body was a numb marionnette on the floor of the chamber. The machine was still
        churning, emiting irregular banging sounds like a pair of shoes in a tumble dryer.
        Eventually the banging became less frequent, until there was a final clatter of metal on
        metal and a resigned wheeze of steam, and then the room was silent.
      </p>
      <p>
        The chamber door was unsealed and ajar. I clumsily fumbled it all the way open and dragged myself out.
        The upper platform
        was intact and smelled of fresh wood. Small kerosene lamps lit the cavern but they were flickering,
        soon to go out.
      </p>
      <p>
        I descended the platform mostly by crawling. I fell the last few feet off the ladder and landed
        in a <ListCard expansions={["painful heap"]} tag="c10-heap"
          card={<span>I was lucky to not twist an ankle.</span>}/>. Feeling was coming back in my extremities,
        along with a powerful thirst.
      </p>
      <p>
        The machine gleamed with so much shiny brass and copper that the cavern was saturated by a warm
        gold glow.
      </p>
      <p>
        By the eastern tunnel, a dead man was slumped against the wall. He had exuberant brown muttonchops that were tinged with gray,
        small silver-framed glasses, and was dressed in a simple wool vest, collared shirt, and trousers. I assumed this was Ignatius Cadwell.
      </p>
      <p>
        I was able to stand now, barely, and made my way across the cavern like a toddler, grabbing at
        objects hand-over-hand for stability. Next to Cadwell's <ListCard expansions={["body"]}
          tag="c10-cadwell"
          card={<span>I'd seen the dead, but only at funerals. I avoided looking directly at him,
            but I didn't see any obvious injury.
          </span>}/> lay a bucket, a tin cup, and, crucially, a <List expansions={[["journal"], ["journal"]]} tag="c10-journal" />.
      </p>
    </section>,
    <section>
      <Reader inventory={inventory} docs={[docs.frag7]} />
    </section>,
    <section>
      <p>
        I recognized the handwriting in that note. "Lynn?" I called out, my voice echoing in the massive chamber.
      </p>
      <p>
        A weak reply from far off: "In here."
      </p>
      <p>I'd entered from the southern tunnel and it was indeed fully blocked, but the other was just
        barely passable. I kicked rocks and boards aside and squeezed my way through, emerging

        in   <Map from={inventory.c5_direction}
          to={{
            archaeologist: "what I recognized as the old root cellar (not so old now) beneath the Science Center",
            _any: "a root cellar, flanked on one side by a trough full of sand and wooden storage crates on the other"
          }}
             />.  <Map from={inventory.c5_direction}
               to={{
                 archaeologist: "This time, the storage room ",
                 _any: "The storage room "
               }}
                  /> ended in an earthen staircase leading to a closed door. The stairwell was lit by
        a flickering gas lantern and a tantalizing rectangle of sunlight around the doorframe.
      </p>
      <p>
        A man I presumed was Professor Jeffrey Lynn lay at the top of the stairs. He looked much more
        like a college professor than I did, with a Santa Claus beard and a crumpled bowtie.
        His wild
        expression suggested he thought I was a hallucination.
      </p>
      <p>"My name's Abby Fuller," I said. "I'm your substitute teacher."</p>
      <p>
        He barked a laugh and struggled to sit up. "Does my substitute teacher have any water?" His voice was in tatters.
      </p>
      <p>
        "I'm afraid I didn't pack appropriately." I pointed at the door. "May I?" He nodded and slid over to accommodate
        me at the top of the steps.
      </p>
      <p>
        The knob turned freely but the door didn't budge when I pushed on it. "I think it's barracaded on the other side,"
        Lynn said. "I spent, I think, a day, maybe more, just getting through the tunnel. I was just too tired to—"
      </p>
      <p>
        "I'm not tired," I lied. I <List
          tag="c10-door" expansions={[["pushed—"], ["pushed harder—"], ["stepped back and slammed into the door with my shoulder."]]} />
      </p>
    </section>,
    <section>
      <p>
        A scorched metal bar had been braced up against it; it clattered to the floor and the cellar door popped open
        into the ruin of a pantry.
      </p>
      <p>
        Immediately my senses were assaulted by the smell of burnt wood and rubber. The walls were
        stone and had survived the worst of it, but everything else was singed or powdered in soot.
        Sunlight streamed down through the collapsed ceiling, and all the windows were empty of glass. I could see through to more
        broken rooms, arranged around a central space completely littered with the remains of the roof.
        The peak of the Astrolith was just visible among burnt beams and scorched furniture.
      </p>
      <p>Nobody was around. The air was drier and
        warmer than—when I'd left.
      </p>
      <p>
        "Ah, yes, I finally get to see the Great Hall," Lynn said <ListCard tag="c10-hall"
          expansions={["sourly"]}
          card={<span>I understood his despair. He arrived too late to see it, even with a time machine.</span>} />.
        He tried to stand but couldn't, and rested against the lintel.
      </p>
      <p>
        "I'll find some water," I said. I noticed that he was dressed archaically, with a
        simple <ListCard expansions={["vest"]}
          tag="c10-dressed" card={<span>A pocketwatch dangled from his vest, which I found obscurely
          charming yet, in a way, weirdly useless.</span>} /> and wool pants. "I guess you were prepared to meet the locals."
      </p>
      <p>
        "It to be my first time through," he said, his voice a whisper. "But I saw her face as she threw the
        lever; she had no intention of bringing me back."
      </p>
      <p>
        I nodded grimly. "I'll have to avoid being seen," I said. "But I'll <List expansions={[["return"], ["return"]]}
                                                                                tag="c10-return" /> soon, I promise."
      </p>
    </section>,
    <section>
      <p>***</p>
      <p>
        It was a bright, cloudless December day, the threat of frost in the air. Without the
        Astrolith as a reference point I'd have never recognized where I was. The imposing brick edifices of the college were absent, as were
        most of the tall trees. Instead of a tidy monolithic green lawn, the ground was covered in a patchwork of
        dirt, clover, and crabgrass. The air smelled of horses.
      </p>
      <p>
        Cadwell described our future as quiet, but I suppose it's what you're used to. For me, this was true quiet—no distant
        buzz of airplanes, hum of HVAC systems, or sloppy idling of trucks.
        The laughter of crows, the sigh and shuffling of farm animals,
        the sound of a slow wagon crunching over gravel, that was the modern cacophany of life for him.
        To me, these were the sounds of peace, and retreat.
      </p>
      <p>
        In place of the college gymnasium was a large vegetable garden, shaded by a few twisted pear trees and bordered on one end by
        a tidy hedge. A woman in a plain white
        cap was pulling up greenish pumpkins from a mass of vines.  <Map from={inventory.c10_woman || inventory.c10_men}
          to={{
            _undefined: <span>
              She looked otherwise alone, potentially safe to <List expansions={[["approach"], ["approach"]]}
                                                                tag="c10_woman" />.
              I could also hear men's voices, many of them, from a nearby <List expansions={[["barn"], ["barn"]]}
                                                                            tag="c10_men" />.
            </span>,
            _any: <span>
              She looked otherwise alone, potentially safe to approach.
              I could also hear men's voices, many of them, from a nearby barn.
            </span>
          }}
        />
      </p>
    </section>,
    <section>
      <Map from={inventory.c10_woman || inventory.c10_men}
        to={{
          approach: <div>      <p>
            "Hello," I said, cautiously. I smiled and held out my hands, palms up.
          </p>
            <p>
              "Hello," she said. She eyed my clothes, lingering on my jeans, but said nothing more.
            </p>
            <p>
              "Do you know where I could get some water?"
            </p>
            <p>
              "There's no more running water since the Phalanstery burned. There's a cistern there," she said, nodding
              towards the row of <ListCard expansions={["stone houses"]} tag="c10-houses"
                card={<span>I hadn't noticed them behind the hedges. There were eight now. </span>} />.
              "Here, take this," and emptied a pail of
            pears into her basket of pumpkins.</p>
            <p>I leaned into the garden and took the pail from her gratefully. She was at least a head shorter than me.
              Tendrils of her blonde hair poked out from beneath the cap,
              and up close I could see that her neck was deeply <ListCard expansions={["scarred"]} tag="c10-scar"
                card={<span>Remnants of some infection I almost certainly had never needed to worry about.</span>} />.
              She was inspecting me in turn, which was only fair. She asked, "Which community are you from which allows such reformed attire?"
            </p>
            <p>
              "Blithedale Farms," I improvised. "Please excuse me, I need to bring this to my friend urgently." My own thirst
              was now overwhelming.
            </p>
            <p>
              She nodded, disappointed. "If you want my advice, you'll leave soon as you can," she said, in a low voice.
              "This is no longer a place for women."
            </p>
            <p>
              I started to ask why but she stopped suddenly, listening. She then crouched, pointing at the hedgerow:
              <i>Make yourself scarce.</i> I did as she bid me, and heard the voices of men pass on the other side of the hedge:
            </p>
            <p>
              The first voice: "We can debate philosophy all day, and I know that you will, Owen. That does not change the fact
              that the bank is foreclosing on this land
              any day now. I intend to take back what I put in to this foolhearty experiment."
            </p>
            <p>
              The reply, presumably from the man named Owen: "Then let us accept the offer from the ladies to
              incorporate the community school. They have raised over fifty-thousand
              from various benefactors in Albany and Boston. That should be more than sufficient to recoop your investments."
            </p>
            <p>
              There was a braying and ugly laugh from a third voice. "A college for women will just breed more crones
              like Cadwell's."
            </p>
            <p>"What concern is that of yours?" Owen said. "Let them carp and heckle each other to death. Your wife has no such flaw."
              The other man barked a laugh again. "This all sounds settled to me," Owen concluded.
              "Tomorrow we will go down to the village and send word to the bank."
            </p>
            <p>
              The voices faded, and I caught the eye of the woman. She nodded towards the houses, and I
              <List expansions={[["dashed"], ["dashed"]]} tag="c10-cross" /> across, wishing I could thank her better.
            </p>
          </div>,
          barn: <div>
            <p>
              The barn was huge, much bigger than the picturesque suburban barns I'd seen on my drive to Blithedale.
              It was painted chocolate brown and had few windows save for an unusual
              turret at one end, with windows on all sides. It looked disconcertingly like a prison watchtower.
            </p>
            <p>
              One side of the property was enclosed by a fence containing a few listless cows,
              so I ran around the other, towards the voices. Wagons and horses were tied up by an open doorway.
              The horses stood in front of a drinking trough; I was desperate enough to consider getting water from it,
              but it was <ListCard expansions={["dry"]}
                tag="c10-dry" card={<span>Many of the wells had been emptied as part of the fruitless attempt to
                save the Great Hall.</span>} />. Further away, I could make out the row of stone houses,
              and what appeared to be a large well.
            </p>
            <p>
              I peeked into the doorway. Half a dozen men, all with luxurious and comical facial hair,
              were having some kind of impromptu meeting. Some looked comfortable seated on hay bales and
              barrels; others stood, fussily adjusting their appearance and seeming to object to everything.
            </p>
            <p>
              "I don't see a viable alternative to disbanding the trust," one of the gruffer gentlemen complained.
              "We are wholly without capital,
              and I for one will not sink a single additional penny into this fever dream."
            </p>
            <p>
              "You'd feel differently, Williams, if you'd embraced Scientific Marriage." This was said by dapper fellow
              reclining pointedly in the hay.
            </p>
            <p>
              "The community was doing fine before your like introduced that nonsense," the other retorted.
              "The women won't stand for it—"
            </p>
            <p>
              "We just needed more time," a third man complained. "We should've expelled Cadwell and his harridan
              years ago—"
            </p>
            <p>
              The man named Williams scoffed. "Easy to say now, Owen. I recall your paper extolling him as an
              unsung genius not one year ago."
            </p>
            <p>
              The dapper young man laughed unpleasantly. "Whenever that oaf opened his mouth I wanted to cringe.
              And don't get me started on his witch—I lay blame entirely at her feet for poisoning the minds of the other wives."
            </p>
            <p>
              Williams raised his voice. "We can debate philosophy all day, and I know those of you who will if
              no one puts a stopper in you. That does not change the fact that the bank is foreclosing
              any day now. I intend to take back what I put in to this foolhearty experiment."
            </p>
            <p>
              "Then let us accept the offer from the ladies to independently incorporate the community school,"
              Owen said, holding out his hands. Williams started to object, but was cut off: "They have raised over fifty-thousand
              from various benefactors in Albany and Boston. That should be more than sufficient to recoop your investments."
            </p>
            <p>
              The young man laughed again. "A college for women will just breed more of the same."
            </p>
            <p>
              "What concern is that of yours?" Owen said. "Let them carp and heckle each other to death. Your wife has no such flaw."
              The other man bowed theatrically, as if acknowledging a compliment. "This all sounds settled to me," Owen concluded.
              "Tomorrow we will go down to the village and send word to the bank."
            </p>
            <p>
              The gathering was breaking up, but I'd heard enough anyway. While the men huddled close to shake hands
              and otherwise congratulate each other on escaping the paradise they'd built for themselves,
              I <List expansions={[["dashed"], ["dashed"]]} tag="c10-cross" /> to the row of stone houses.

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
        hole. I couldn't see any water inside, but there was a rope with a <List expansions={[["hook"], ["hook"]]}
                                                                             tag="c10-hook" /> affixed nearby.
      </p>
    </section>,
    <section>
      <p>
        I put the hook over the handle on my pail and lowered it hand-over-hand while the girl watched. Eventually I
        felt it hit the surface of water I could tell the pail just flopped over and floated. The lightweight tin wasn't heavy
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
        the pail sunk below the water. Once full, it was surprisingly heavy. I braced myself against the side of the cistern
        and pulled harder. The girl, who had still said not a word, reached down and pulled with me. The boy
        just watched from afar.
      </p>
      <p>
        "Thank you," I said to her, and gratefully drank straight from the pail. Together we refilled it, and then
        I began to return to the Great Hall by following a winding gravel road. She trotted along beside me, the boy forgotten.
      </p>
      <p>
        "What's your name?" I said.
      </p>
      <p>
        "Lilly."
      </p>
      <p>
        "I know a young woman named Lillian," I said. "You <List expansions={[["remind me a little of her—"], ["remind me—"]]}
                                                             tag="c10-remind" />"
      </p>
    </section>,
    <section>
      <p>The girl grabbed my arm suddenly. "Come this way," she said. She pulled me into a narrow one-story clapboard building,
        long and low like a stable, painted white with black trim.
      </p>
      <p>
        The interior was effectively a single room, a long communal kitchen. A dozen women, most dressed in loose pants
        under skirts, moved between the two stone hearths and several massive work tables. There were stations for bread
        and stations for soup and large cabinets full of white plates; I didn't see any meat. Most women were bare-headed, their hair
        tied back in loose buns. I
        stopped short at the entrance,
        and they slowly began to notice me, pausing their work to just stare.
      </p>
      <p>
        "Come through here," Lilly urged. I weaved between the women, muttering apologies. The girl led me out a wide
        barn-like doorway, where a few horses and wagons were tied, and then immediately into another large
        communal building.
      </p>
      <p>
        "This is the Children's Hall where we live," she explained. Like my faculty residence, it was made up of many individual
        bedrooms, but each was filled with cots and cradles.
      </p>
      <p>
        "You don't live with your parents?" I asked, and she looked at me with such confusion that I changed
        tack. "Why did you pull me off the road?"
      </p>
      <p>
        We exited through the other end of the nursery and arrived at rear of the
        Great Hall. "So the men wouldn't find you," she said.
      </p>
      <NextChapter chapter={11} />
    </section>

  ]

  return <RenderSection currentSection={currentSection} sections={sections}  />
}
