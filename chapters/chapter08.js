const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'
import * as actions from '../actions'
import ListCard from '../components/listCard'
import Reader  from '../components/reader'
import { docs } from '../docs'

export default ({currentSection, inventory, cards}) => {
  const sections = [
    <section>
      <heading>
        <h2>Chapter Eight</h2>
        <blockquote>
          "It will be obvious that the old state of society
          will not bear one moment’s comparison with the new, and that
          the only practical difficulty will be to restrain men from
          rushing too precipitously from the old to the new." <br/>
          —<i>A New View of Society</i>, Robert Owen (1813)
        </blockquote>
      </heading>

      <Map from={inventory.c5_direction}
        to={{
          archaeologist: <div>
            <p>
              I wasn't here a week and I already felt like I was running out of time.
            </p>
            <p>
              Dean Orellana hadn't orchestrated Lynn's disappearance, but now that he
              was conveniently out of the way, she had a window in which to get
              the construction project back on track before winter set in.
            </p>
            <p>The construction crew had unearthed the smaller, secondary tunnel
              sometime this summer. Lynn saw significance in it, but it had been
              <ListCard tag="c8-bricked"
                expansions={["bricked up"]}
                card={<span>Why, and by whom?</span>} /> in the utopians' era.
              Lynn also felt the pressure of time,
              and without waiting for permission,
              smashed through it.
            </p>
            <p>
              The notebook ended in August, but he didn't disappear until at least a week into
              September. Surely he had more <ListCard tag="c8-notes"
                expansions={["notes"]}
                card={<span>If he was anything like me, his work was spread over
                multiple notebooks, computer files, and napkins.</span>}/> on the artifacts he recovered from whatever
              device it was that he found in the chamber beyond the tunnel.
            </p>
          </div>,
          burglary: <div>
            <p>
              We waited until after dark to meet up by the row of picturesque stone houses along the west side
              of campus, by the main thoroughfare. They were four, all neatly hewn stone cubes that, over the
              years, had been extended and renovated in slightly different ways. Lynn's house was one of the
              smaller ones, set back a bit.
            </p>
            <p>
              "Are we all okay with doing this?" I asked.
            </p>
            <p>Ella Merchant looked unsure, but then sighed. "Jeffrey would want us to find out what happened to him," she said.
            Lillian nodded in agreement.</p>
            <p>"Okay then."</p>
            <p>Lillian had brought flashlights for all of us, and we took turns circling the property.
              "Looks like our options are <List expansions={[["a window above the trash barrels", "a bulkhead door", "the rear entrance"],
                ["a window above the trash barrels", "a bulkhead door", "the rear entrance"]
              ]} tag="c8_entrances" />," she said.
            </p>
          </div>
        }} />
    </section>,
    <section>
      <Map from={inventory.c5_direction}
        to={{
          archaeologist: <div></div>,
          burglary: <div>
            <Map from={inventory.c8_entrances}
              to={{
                barrels: <div>
                  <p>"Do these old houses have air conditioning?" I asked.</p>
                  <p>"If they did, it'd be a window unit," the archivist said.</p>
                  <p>"It was still warm when he disappeared. That one's probably not locked." I motioned to Lillian, who stabilized one of the plastic bins while I
                    clambered awkwardly up onto it. It wobbled in an alarming way, but I was able to
                    slide the window up and hoist myself through.
                  </p>
                  <p>Lynn's bed was pushed up directly under it so I tumbled in without harm. The house was
                    barely bigger than an apartment, indifferently decorated in the way of furnished rentals.
                    I let the others in through the front door; <Map from={inventory.c2_direction} to={{curiosity: "Merchant", dean: "Ella"}} /> went straight to the kitchen, following the smell of spoiled food.
                  </p>
                  <p>
                    "The Dean really should've reported him missing," I heard her say. Then, "Ally? The cellar door is open."
                  </p>
                </div>,
                entrance: <div>
                  <p>"Let's try the back door first," I said. The rear entrance was hidden by thick foilage, and though it
                    was locked, the door was old and flimsy—and had a window. "Stand back," I said, wincing, and punched
                  through the glass with my flashlight.</p>
                  <p>It broke with a satisfying crunch. Lillian unrolled her scarf and used it to wipe the remaining
                  glass away, then unlocked the door through the open pane.</p>
                  <p>"That was exciting," <Map from={inventory.c2_direction} to={{curiosity: "Merchant", dean: "Ella"}} /> said.</p>
                  <p>
                    We entered through the kitchen, which smelled horrible. Lillian cracked open the fridge and then
                    recoiled. "Spoiled milk," she said, "I think."
                  </p>
                  <p>
                    The archivist cast her flashlight beam around the room and shook her head. "The Dean really should've
                    reported him missing," she said. Then, "Ally? The cellar door is open."
                  </p>
                </div>,
                door: <div>
                  <p>
                    "Where does this bulkhead go?" I asked.
                  </p>
                  <p>"These houses would've had root cellars originally," said <Map from={inventory.c2_direction} to={{curiosity: "Merchant", dean: "Ella"}} />.
                    "They probably put the furnaces and such in them."
                  </p>
                  <p>The bulkhead door was rusted, but not very old. I pulled on the handle with force, and nearly
                  fell backwards as it flew open easily.</p>
                  <p>"That could've been worse," <Map from={inventory.c2_direction} to={{curiosity: "Merchant", dean: "Ella"}} /> said.</p>
                  <p>A few concrete steps led down, and then a primitive wooden door, about half-size, was set into the
                  foundation. I wasn't even sure I could fit through.</p>
                  <p>
                    "I'll go," Lillian said, immediately disappearing into the cellar.
                  </p>
                  <p>The archivist and I waited by the entrance for several long minutes. Just as I started to worry,
                    Lillian opened the front door, her face grave. "You're gonna want to see this."
                  </p>
                </div>
              }} />
          </div>
        }} />
    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />

}
