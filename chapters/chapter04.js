const React = require('react')
import { connect } from 'react-redux'
import { Map, List, FromInventory, RenderSection, NextChapter, AllButSelection} from 'windrift'

import { docs } from '../docs'
import jsxToString from 'jsx-to-string'
import ListCard from '../components/listCard'


export default ({currentSection, inventory}) => {
  const sections = [<section>
    <h2>February 4, 1980</h2>
    <p>
      It was disorienting to wake up in that strange hard bed, no clock in the room,
      but bright winter sunlight was streaming in through my tiny window and
      a radiator whistling somewhere. Still in my clothes from last night,
      I padded out into the hallway, hoping to find someone, but all the doors were
      ajar, as if no one else lived here.
    </p>
    <p>
      My room had a sink but the full bathroom was shared and tucked beneath the
      staircase. There was fresh soap
      but no real sign that it was in active use. The shower was hot to the point of
      scalding, so no complaints there.
    </p>
    <p>
      Once presentable, I stepped out into my new world. The faculty residence faced into a
      quad, dominated by a giant willow tree shading a large, irregular stone. I could
      actually see my car from here. Last night the campus had seemed immense and labrynthine,
      but in fact it was quite compact. I couldn't tell any of the buildings apart.
    </p>
    <p>
      A clock tower somewhere chimed eight and students began pouring out into the quad
      as if they'd sprung forth from its
      mechanism. St. Isadore is a fairly
      conservative Catholic school, and while there was no formal dress code, the girls
      seemed to have agreed upon their own—neutral slacks, long skirts, lots of beige.
      I'm from Miami so I'd needed weather-appropiate new clothes anyway, and while I'd tried to
      buy "adult," there's only so dull Miami ever gets. I hope these kids could handle the
      excitement of the occasional pastel.
    </p>
    <p>I approached a young woman who seemed to be in less of a hurry than her classmates.
      "Excuse me, do you know where the dean's office is?"
    </p>
    <p>
      "<List expansions={[["Dean of Science", "Dean of Humanities"], ["Dean of Science", "Dean of Humanities"]]}
         conjunction="or" tag="c3_dean"/>?" she asked.
    </p>
  </section>,
  <section>
    <Map from={inventory.c3_dean} to={{
      humanities: <div>
        <p>"Humanities," I said, adding, "I'm Professor Lynn's replacement."</p>
        <p>She shrugged. "I'm premed. Dean Orellana's office is next to the English building, you know where that is?"</p>
        <p>"Kind of."</p>
        <p>"Great," she answered, and walked off. </p>

      </div>,
      science: <div>
        <p>"Science," I answered. I wasn't quite ready to meet my new boss.</p>
        <p>"Oh yeah? What do you teach?"</p>
        <p>"I'm stepping in for Professor Lynn, teaching Utopian Lit this semester."</p>
        <p>"Oh," she said, biting her lip. "I don't take those classes. Dean Reilly's office is right there, in
          front of the astrolith." She walked away, humming to herself.
        </p>
      </div>
    }}/>

    <Map from={inventory.c3_dean} to={{
      humanities: <p>I sighed, and walked directly across the quad towards my car, figuring one of the nearby buildings had
        to be the English department that I'd visited last night.
        This took me past the strange rock, which I paused to observe.
      </p>,
      science: <p>"The what?" I called after her, to no response. I assumed she meant the large rock in the center of
      the quad, so I walked up to it.</p>
    }}/>

    <figure>
      <img src="images/meteorite.jpg" />
      <figcaption>I sketched this a few weeks later, when it became clear how important the astrolith would be.</figcaption>
    </figure>

    <p>
      It was a rectangular boulder, a couple meters square and one meter tall. Someone had
      cleared the entire area of snow. There were bumps and depressions
      across its surface which had been smoothed by age. The surface was largely flat, inviting one to sit on it.
      The earth had been dug out around it in a
      circular depression, with concentric rings of steps, like a tiny Greek ampitheater. I stooped to read
      a <List expansions={[["small plaque embedded in one of the steps."], ["small plaque embedded in one of the steps."]]} tag="c3_plaque" />
    </p>
  </section>,
  <section>
    <blockquote>
      THE "ASTROLITH"<br/>
      This very large ataxite meteorite was first discovered during the construction of the Science
      Center in 1857 (originally the Center for Physical Studies). The meteorite was named "The Astrolith"
      by the Class of 1931. The circular seating was added in 1968 by the gift of an anonymous donor.
      Its weight is estimated at 30 tons. Only five other iron meteorites are know to be larger, the largest
      being the Hoba meteorite in Namibia.
    </blockquote>
    <p>
      Beneath that, a typewritten addendum was tucked into a weathered clear plastic sleeve:
    </p>
    <blockquote className="typewritten">
      PLEASE NOTE:
      As of Winter 1980 the Astrolith will be removed to the Museum of Science in Boston
      and <ListCard
        expansions={[["replaced with a replica"], ["replaced with a replica"]]}
        tag="c3_addendum"
        card={<span>
          I wondered at the time whether I was viewing the real or ersatz meteorite.
          I'd be sure of that soon enough.
        </span>
        } />. We apologize for any inconvenience.
    </blockquote>
    <Map from={inventory.c3_dean}
      to={{
        science: <div>
          <p>
            I looked up from the plaque and scanned the area around the quad. Sure enough,
            a thin path through the snow lead up to the only non-brick building in sight,
            a dreary concrete bunker marked SCIENCE CENTER. One wing of the building
            looked brand new, its gray blocks gleaming but no less ugly.
          </p>
          <p>Once inside,
            I saw that the new wing was labelled "Computer Lab." Curious, I
            opened the lab door and paused, wondering if I should <List expansions={[["go inside", "find the Humanities dean after all"],
            ["go inside", "find the Humanities dean after all"]]} conjunction="or" tag="c3_computerlab" />.
          </p>
        </div>
      }} />
  </section>,
  <section>
    <Map from={(inventory.c3_dean === "Dean of Humanities" || inventory.c3_computerlab === "find the Humanities dean after all").toString()}
      to={{
        true: "Dean of English picked ",
        false: "Not dean"
      }} />

  </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections} />

}
