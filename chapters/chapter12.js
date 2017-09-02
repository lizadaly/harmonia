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
              I've left this journal for you to find, or <ListCard expansions={["not find"]}
                tag="c12-not"
                card={<span>If not, I hope the one who does find them enjoys the puzzle that they may present.</span>} />,
              however fate plays out. I like to believe you will find it.
            </p>
            <p>
              There were men <ListCard expansions={["waiting"]}
                tag="c12-waiting"
                card={<span>For which I could thank Lilly Cadwell's traitorous little friend Saul.</span>} /> for
              me when I emerged outside. They looked at me in astonishment, but while muttering amongst themselves,
              an enormous sinkhole opened
              beneath the Great Hall. The resulting cloud of dust and soot could be seen all across the valley.
              (I think machine shook the earth
              so hard that the cavern collapsed, dragging the stone and timber of the <ListCard expansions={["ruin"]}
                tag="c12-ruin"
                nextUnit="section"
                card={<span>The Astrolith, once again, was unharmed.
                </span>} /> down with it.)
            </p>

          </div>,
          me: <div>

            <heading>
              <h2>May 28, 1999</h2>
              <h3><br/></h3>
            </heading>
            <p>
              Up here in Western Massachusetts, spring lasts about a day but can be utterly glorious—neither
              cold nor humid, and sometimes not even raining. Today is one of those days,
              the perfect weather coupled with the effervescent mania of students who've just finished
              exams. Unfortunately for me, I have to grade them.
            </p>
            <p>
              In spite of the workload, I'm giddy too. I've been informed I'll be back next year—as a real
              assistant professor. I can stop correcting the girls who call me "Prof."
            </p>
            <p>
              I'm grading at a picnic table near the crest of the foothill. From here I can see
              the full expanse of the campus and down into the valley, the ghostly outlines of the
              utopians' fences and foundations made visible. In my mind's eye I can easily fill them
              in, with golden crops and slow horses and grand optimistic halls.
            </p>
            <p>
              "Ally," a voice behind me says, and I get chills.
            </p>
            <p>
              Alice Gilman is regarding me in that curious way she has. I have
              not seen her since autumn. When I returned home through her machine, she was no longer in the cavern. In her place
              was Lillian,
              staring around the room with open-mouthed astonishment  until I yelled at her to help me down—
              the ladders had completely collapsed and the cavern
              was filling with black coal-smoke. We fled together with little time to spare before the room became a furnace.
            </p>
            <p>
              The next morning, on schedule and in spite of a small but noisy band of student protestors,
              the bulldozers went to work on removing what they believed to be a 30 ton meteorite.
              An hour into the proceeding, which obviously could not have succeeded in any case, a backhoe tipped
              forward into an unexpected and massive sinkhole.
              No injuries, but a round-robin of blame among the surveyors, architects, and
              construction workers. The Science Center extension was postponed, maybe for good.
            </p>
            <p>
              Lillian, Ella, and I have checked several times: the cavern entrances were all obliterated, now
            just forgotten crawlspaces that lead nowhere. The sinkhole was filled with dirt and sod rolled over in its place.</p>

            <p>Alice Gilman vanished from campus, and was not missed.
            </p>
            <p>
              "Here," she says now, without preamble. She hands me a yellowed envelope; in a very neat, formal hand,
              it reads, "To Abigail Fuller." I look at her quizzically.
            </p>
            <p>"I was found in the college archive about five years ago. I did not know who it was addressed to,
              until the night you arrived and you told me your name."
            </p>
            <p>
              She stops, for so long I think she isn't going to continue. "They
              did not think I was fit to be a mother. I still cared for her, even though she wasn't mine.
              After I read this, I knew she could have people who would love her, if they went back—"
            </p>
            <p>
              "I could have died," I say, but I'm not even angry anymore.
            </p>
            <p>
              "Yes," she acknowledges. She looks like she's about to leave, and then says, "I thought,
              after a hundred years, I would find my place." She shrugs. "I don't think
              I belong here either. You've made a loud and fearful world, and I do not much like it either."
            </p>
            <p>
              I start to reply, but she shakes her head. "I'm still glad we tried it all, you know—the community.
              Even though they treated me poorly.  I know you laugh at us, our ridiculous superstitions and
              hopeful experiments.
              But I built something real, and you take only such small steps."
              Without waiting for a response, she turns and walks down the hillside.
            </p>
            <p>I <List expansions={[["read"], ["read"]]}
              tag="c12-opened" /> the letter.
            </p>
          </div>
        }} />

    </section>,
    <section>
      <Map from={inventory.c11_return}
        to={{
          him: <div>
            <p>The community, now the site of multiple catastrophes, was near collapse. Miss Adams, about whom
              Lilly was indifferent anyway, was easy to convince to give up her charge—her family wanted to move
              west and to travel light. To the law, Lillian Gilman Cadwell was the <ListCard expansions={["orphan"]}
                tag="c12-orphan"
                card={<span>I'm sorry to say I was never able to find what happened to her real birth <ListCard expansions={["mother"]}
                  tag="c12-grandmother"
                  author="lillian"
                  forceDir="down"
                  card={<span>I did! She joined the Shakers, which meant she had no further children. I am one of
                  her only direct descendants.</span>} />.</span>} /> of Alice and Ignatius. Ignatius,
              useless as he was otherwise, had managed to leave a respectable inheritance for his daughter.
              It was trivial for me to assume guardianship.
            </p>
            <p>
              Everyone accepted my story: I was a widow schoolteacher from New York looking to start a new life. In the
              past people tend to be trusting, even gullible, though no more kind than in your time. Still,
              there aren't so many rules out here in
              the fringes of society. You, Lillian, live in a world where disappearing is hard; I've lived where
              identity is mutable. Everyone lies, everyone reinvents.
            </p>
            <p>
              Turns out you don't need to remember much history to be a successful investor. I've done pretty
              well for our family, and my adopted daughter and granddaughter will never need to
              depend on anyone. I didn't marry; I've met many pleasant <ListCard expansions={["men"]}
                tag="c12-men"
                card={<span>And the women—well, those stories are not in this journal.</span>} /> but they are all of their time.

            </p>
            <p>
              I set up a trust for all of Lilly's descendants to become available when they turn twenty-five.
              If all goes well, it should last many generations.
              Are you <ListCard expansions={["twenty-five"]}
                tag="c12-25"
                card={<span>In my mind, you're always 23, your age when we met. I hope you find this <ListCard expansions={["soon"]}
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
                card={<span>I used to worry about smallpox, but I'm 72 now and can probably stop.</span>} /> about now.
            </p>
            <p>
              There's a thing you need to understand about your family and where you come from. These utopians
              were flawed and foolish, ungenerous and even irreedemably cruel. They were also unbounded and unafraid.
            </p>
            <p>This old America, where
              I've lived most of my life, is a far weirder place than yours. People think nothing of writing themselves
              a new future, scribbling over their mistakes, erasing and even unerasing as a way of forging new truths.
              Draw upon this great cacophony of possibility. Do not confine your dreams to what is feasible and adjacent.
              Scribble over the worst of our society, and rewrite it as you'd like it to be.
            </p>
            <p>
              I have had an incredible adventure in my life. I am only sorry that we could not meet again.
            </p>
            <p>
              Your "professor," <br/>
              Abby
            </p>
            <heading>
              <blockquote>
              </blockquote>
            </heading>
          </div>,
          me: <div>
            <Reader inventory={inventory} docs={[docs.lillian1]} />

          </div>
        }} />
    </section>
  ]

  return <RenderSection currentSection={currentSection} sections={sections}  />
}
