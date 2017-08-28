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
      <Map from={inventory.c11_return}
        to={{
          him: <div>
            <heading>
              <h3>May 9, 1931</h3>
            </heading>
            <p>
              Lillian,
            </p>
            <p>
              I've left these papers for you to find, or <ListCard expansions={["not find"]}
                tag="c12-not"
                card={<span>If not, I hope the one who does find them enjoys the puzzle that they may present.</span>} />,
              if that's how fate plays out. But I like to believe you will find them.
            </p>
            <p>
              There were men <ListCard expansions={["waiting"]}
                tag="c12-waiting"
                card={<span>For which I could thank Lillian Cadwell's traitorous little friend Saul.</span>} /> for
              me when I emerged outside. They looked at me in astonishment, but that
              was soon followed by a greater shock—an enormous sinkhole was opening
              beneath the Great Hall. The resulting cloud of dust and soot could be seen all across the valley.
              I think machine shook the earth
              so hard that the cavern collapsed, dragging the stone and timber of the <ListCard expansions={["ruin"]}
                tag="c12-ruin"
                nextUnit="section"
                card={<span>The Astrolith, once again, was unharmed.
                </span>} /> down with it.
            </p>

          </div>,
          me: <div>

            <heading>
              <h3>May 9, 1999</h3>
            </heading>

          </div>
        }} />

    </section>,
    <section>
      <Map from={inventory.c11_return}
        to={{
          him: <div>
            <p>This community, now the site of multiple successive tragedies, was near collapse. Miss Adams, about whom
              Lillian was indifferent anyway, was easy to convince to give up her charge—her family wanted to move
              west and to travel light. To the law, Lillian Cadwell was an <ListCard expansions={["orphan"]}
                tag="c12-orphan"
                card={<span>I'm sorry to say I was never able to find what happened to her birth <ListCard expansions={["mother"]}
                  tag="c12-grandmother"
                  author="lillian"
                  forceDir="down"
                  card={<span>I did! She joined the Shakers, which meant she had no further children. I am one of
                  her only direct descendants.</span>} />.</span>} />,
              and Ignatius, useless as he was, had managed to leave a respectable inheritance for his daughter.
            </p>
            <p>
              Everyone accepted my story—I was a widow who recently left a cooperative in New York. People back then
              were trusting, even gullible, and not always kind, but there weren't so many rules out here in
              the fringes of society. You, Lillian, live in a world where disappearing is hard; I've lived where
              identity is mutable. Everyone lies, everyone reinvents.
            </p>
            <p>
              It turns out you don't need to remember much history to be a successful investor. I've done pretty
              well for our family; my adopted daughter and granddaughter will never need to
              depend on anyone. I never married; I've met many kind <ListCard expansions={["men"]}
                tag="c12-men"
                card={<span>And the women—well, those stories are not in this journal.</span>} /> but they are all of their time. I set up a trust, for all their descendants, when each one turns twenty-five.
              Are you <ListCard expansions={["twenty-five"]}
                tag="c12-25"
                card={<span>In my mind, you're always 23, like when we met. I hope you find this <ListCard expansions={["soon"]}
                  tag="c12-leave"
                  forceDir="down"
                  author="lillian"
                  card={<span>Ella had actually found this some time ago—a locked tin box deep in the college archives.
                  This page was on top. She understood enough to realize it wasn't yet time to give it to me.</span>} />  after I leave, so you don't worry overmuch.</span>} /> yet,
              Lillian?
            </p>
            <p>
              You and I never talked about your mom, my <i>great</i>-grandchild, who I will probably never meet. Was she happy? Are you happy? That is all I <ListCard expansions={["worry"]}
                tag="c12-worry"
                card={<span>I used to worry about smallpox, but I guess got lucky.</span>} /> about now.
            </p>
            <p>
              There's a thing you need to understand about your family and where you come from. These utopians
              were flawed and foolish, sometimes irreedemably so. They were also unafraid. This old America, where
              I've lived half my life, is a far weirder place than yours—people think nothing of rewriting
              history, scribbling over the past, erasing and even unerasing, to reckon with what was lost.
              Draw upon this great cacophony of possibility. Do not confine your dreams to what is adjacent and feasible.
              Live in the America as you'd like it to be.
            </p>
            <p>
              I am sorry only that we did not meet again.
            </p>
            <p>
              Abby
            </p>
            <heading>
              <blockquote>
              </blockquote>
            </heading>
          </div>,
          me: <div></div>
        }} />
    </section>
  ]

  return <RenderSection currentSection={currentSection} sections={sections}  />
}
