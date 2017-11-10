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
            <header>
              <h2>May 9, 1931</h2>

            </header>
            <p>
              Lillian,
            </p>
            <p>
              I’ve left this journal for you to find, or <ListCard expansions={["not find"]}
                tag="c12-not"
                card={<span>If not, I hope whoever who does find it enjoys the puzzle that it presents.</span>} />,
              however Fate decides. I like to believe it will reach you.
            </p>
            <p>
              There were men <ListCard expansions={["waiting"]}
                tag="c12-waiting"
                card={<span>For which I could thank Lilly Cadwell’s traitorous little friend Saul.</span>} /> for
              me when I emerged outside. They looked at me in astonishment, but while they muttered amongst themselves,
              an enormous sinkhole opened
              beneath the Great Hall. The resulting cloud of dust and soot could be seen all across the valley.
              (I think the machine shook the earth
              so hard that the cavern collapsed, dragging the stone and timber of the <ListCard expansions={["ruin"]}
                tag="c12-ruin"
                nextUnit="section"
                card={<span>The Astrolith, once again, was unharmed.
                </span>} /> down with it.)
            </p>

          </div>,
          me: <div>

            <header>
              <h2>May 28, 1999</h2>
              <h3><br/></h3>
            </header>
            <p>
              Up here in Western Massachusetts, spring lasts about a day but can be utterly glorious—neither
              cold nor humid, and sometimes not even raining. Today is one of those days,
              the perfect weather coupled with the effervescent mania of students who’ve just finished
              exams. Sadly, I have to grade them.
            </p>
            <p>
              In spite of the workload, I’m giddy too. I’ve been informed I’ll be back next year—as a real
              assistant professor. I can stop correcting the girls who call me “Prof.”
            </p>
            <p>
              I’m grading at a picnic table near the crest of the foothill. From here I can see
              the full expanse of the campus and down into the valley, the ghostly outlines of the
              utopians’ fences and foundations made visible. In my mind’s eye I can easily fill them
              in, with golden crops and slow horses and grand optimistic halls.
            </p>
            <p>
              “Abby,” a voice behind me says, and I get chills.
            </p>
            <p>
              Alice Gilman is regarding me in that curious way she has. I have
              not seen her since autumn. When I returned home through her machine, she was no longer in the cavern. In her place
              was Lillian,
              staring around the room with open-mouthed astonishment until I yelled at her to help me down—
              the ladders had completely collapsed and the cavern
            was filling with black coal-smoke. </p>

            <p>
              I ran to the main lever and pulled, hoping he’d been able to follow me through, but the machine did
              nothing and I could barely breathe. We fled together with little time to spare before the room became a furnace.
            </p>
            <p>
              The next morning, on schedule and in spite of a small but noisy band of student protestors,
              the bulldozers went to work on removing what they believed to be a moderately-sized meteorite.
              An hour into the proceeding, which obviously could not have succeeded in any case, a backhoe tipped
              forward into an unexpected and massive sinkhole.
              There were no injuries, but a round-robin of blame ensued among the surveyors, architects, and
              construction workers. The Science Center extension was postponed, maybe for good.
            </p>
            <p>
              Lillian, Ella, and I have checked several times: the underground tunnels were all obliterated by the
              collapse of the cavern. They’re now
            just forgotten crawlspaces that lead nowhere. Up in the quad, the sinkhole was filled with dirt and sod rolled over in its place.</p>

            <p>Alice Gilman vanished from campus, and was not missed.
            </p>
            <p>
              “Here,” she says now, without preamble. She hands me a yellowed envelope; in a very neat hand
              with faded ink, it reads, “To Abigail Fuller.” I do not recognize the writing.
            </p>
            <p>“It was found in the college archive about five years ago. I did not know the person it was addressed to,
              until the night you arrived when you told me your name.”
            </p>
            <p>
              She stops, for so long I think she isn’t going to continue. “They
              did not believe I was fit to breed their children, but I still cared for her, even though she wasn’t mine.
              After I read this, I knew she could have people who would love her, if I sent them back.”
            </p>
            <p>
              “I could have died,” I say, but I’m not even angry anymore. I didn’t die, and Lynn said it was
              what he wanted. I’ve chosen to believe him.
            </p>
            <p>
              “Yes,” she acknowledges. She looks like she’s about to leave—we both know I have no
              ability to stop her—and then says, “I thought,
              after a hundred years, I would find my place, but this is a loud and fearful world,
              and I do not much like it either.”
            </p>
            <p>
              “I am truly sorry they treated you badly,” I find myself saying.
            </p>
            <p>
              She nods, just a bit. “I know it is easy to laugh at us, at our ridiculous and
              idealistic experiments. I laughed at my husband, once I stopped fearing him.
              Yet we shaped a society, with our own hands, as we wished it to be. For a time,
            it was a fair place, better than most.</p>
            <p>
              “We dreamed of a New Eden, and I built a true wonder. You take only such small steps.”
              Without waiting for my response, she turns and descends along the hillside.
            </p>
            <p>I look down at the letter in my hands, and then <List expansions={[["read"], ["read"]]}
                                                               tag="c12-opened" /> it.
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
                card={<span>I’m sorry to say I was never able to find what happened to her real birth <ListCard expansions={["mother"]}
                  tag="c12-grandmother"
                  author="lillian"
                  forceDir="down"
                  card={<span>I did! She joined the Shakers, which meant she had no further children. I am one of
                  her only direct descendants.</span>} />.</span>} /> of Alice and Ignatius. Ignatius,
              useless as he was otherwise, had managed to leave a respectable inheritance for his daughter.
              It was trivial for me to assume guardianship.
            </p>
            <p>
              Everyone accepted my story: I was a widow schoolteacher from New York looking to start a new life.
              You, Lillian, live in a world where disappearing is hard; I’ve lived where
              identity is mutable. These people reinvented themselves, and the future, as easy as breathing.
            </p>
            <p>
              Turns out you don’t need to remember much history to be a successful investor. I’ve done pretty
              well for our family, and my adopted daughter and granddaughter will never need to
              depend on anyone. I didn’t marry; I’ve met many pleasant <ListCard expansions={["men"]}
                tag="c12-men"
                card={<span>And the women—well, those stories are not in this journal.</span>} /> but they are all of their time.

            </p>
            <p>
              I set up a trust for all of Lilly’s descendants to become available when they turn twenty-five.
              If all goes well, it should last many generations.
              Are you <ListCard expansions={["twenty-five"]}
                tag="c12-25"
                card={<span>In my mind, you’re always 23, your age when we met. I hope you find this <ListCard expansions={["soon"]}
                  tag="c12-leave"
                  forceDir="down"
                  author="lillian"
                  card={<span>Ella had actually found this some time ago—a locked tin box deep in the college archives.
                  This page was on top. She understood enough to realize it wasn't yet time to give it to me.</span>} />  after I disappear from Blithedale,
                so you don't worry overmuch.</span>} /> yet,
              Lillian?
            </p>
            <p>
              You and I never talked about your mom, my <i>great</i>-grandchild, who I will probably never meet. Was she happy? Are you happy? That is all I <ListCard expansions={["worry"]}
                tag="c12-worry"
                card={<span>I used to worry about smallpox, but I’m 72 now and can probably relax.</span>} /> about now.
            </p>
            <p>
              There’s a thing you need to understand about your family and where you come from. This old America, where
              I’ve lived most of my life, is a far wilder place than yours. People think nothing of writing themselves
              a new future, scribbling over their mistakes, erasing and even unerasing as a way of forging new truths.
              Draw upon this great cacophony of possibility. Do not confine your dreams to what is feasible and adjacent.
              The future into which I was born is so, so small! Cut, paste, deface, delete the worst of it, and rewrite it as you’d like it to be.
            </p>
            <p>
              My life has been an incredible adventure. I am only sorry that we could not meet again.
            </p>
            <p>
              Your friend, <br/>
              Abby
            </p>
            <footer>
              <figure>
                <img src="images/past-final.jpg" />
              </figure>
              <p className="begin">
                <List expansions={[["Credits"], [""]]} tag="c12-credits" nextUnit="chapter" />
              </p>

            </footer>
          </div>,
          me: <div>
            <Reader inventory={inventory} docs={[docs.lillian1]} />

            <footer>
              <figure>
                <img src="images/present-final.jpg" />
              </figure>
              <p className="begin">
                <List expansions={[["Credits"], [""]]} tag="c12-credits" nextUnit="chapter" />
              </p>

            </footer>
          </div>
        }} />
    </section>
  ]

    return <RenderSection currentSection={currentSection} sections={sections}  />
}
