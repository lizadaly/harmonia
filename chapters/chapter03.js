const React = require('react')
import { connect } from 'react-redux'
import { Map, List, FromInventory, RenderSection, NextChapter, AllButSelection} from 'windrift'

import { docs } from '../docs'
import jsxToString from 'jsx-to-string'
import ListCard from '../components/listCard'


export default ({currentSection, inventory}) => {
  const sections = [<section>

    <header>
      <h2>Chapter Three</h2>
      <blockquote>
        It was an experiment. We all risked something, and must bear our losses as we can. <br/><br/>
        - <i>Transcendental Wild Oats</i>, Louisa May Alcott (1873)
      </blockquote>
    </header>
    <p>
      Dean Orellana's office was spacious, comfortably furnished, and adorned with vintage college memorabilia:
      group photos of serious young women in bloomers, field hockey trophies, awards for comportment and elocution.
      A large <List expansions={[["oil painting"], ["oil painting"]]} tag="c3-painting"/> hung over a stone fireplace.
    </p>
  </section>,
  <section>
    <figure>
      <img src="images/painting.jpg" alt="" />
      <figcaption>
        A cheerful 19th century rendition of the college campus, with a multi-story building
        where the quad would be today. A brass label at the bottom read, "The Phalanstery: Our Great Hall (1889)."
      </figcaption>
    </figure>
    <p>
      "I heard your first class went reasonably well," she said without looking up from her work. She was
      younger than I expected, mid-forties,
      but no less intimidating. She wore a tightly fitted crimson suit and I noticed that her framed Wharton MBA
      had been positioned to be clearly visible behind her desk.
    </p>
    <p>
      "I'm glad to hear; I thought it did too." I paused. "<ListCard expansions={["Thank you"]}
        tag="c3-paused"
        card={<span>I've been told I don't show sufficient deference to authority to be successful in
        academia, so I'd been working on that.</span>} /> again for offering me this position."
    </p>
    <p>
      "You're welcome." She said nothing else, just regarded me <ListCard tag="c4_regarded"
        expansions={["silently"]}
        card={<span>People like her do this to trick you into <List expansions={[["talking too much."], ["talking too much. I fell for it, stuttering over myself."]]}
               tag="c4_talking_too" /></span>} />.
    </p>

  </section>,
  <section>
    <p>
      "<List expansions={[["I think—"], ["I mean I'm wondering—"], ["What are your—"],
      ["Can you tell me what your expectations are for me?"]]}
         tag="c3_expectations" />"
    </p>
  </section>,
  <section>
    <p>
      She put her hands on her desk and very deliberately folded them. "I expect you to teach Utopian Literature to undergrads. Then I expect
      to decide whether to bring you back next semester, despite your <ListCard expansions={["less-than-stellar"]}
        tag="c3-back" card={<span>I was a foster kid from an old mill town, but sure, be all judgy.</span>} /> qualifications."
    </p>
    <p>
      "I understand," I said. "If you could just give me a little more background on my situation, I think
      it would help my teaching quite a bit—"
    </p>
    <p>
      She feigned confusion. "Don't you have a
      full syllabus from Professor Lynn? That's what I'm paying you to teach."
    </p>
    <p>
      "Not yet, <List expansions={[["but what would also be helpful—"], ["but—"]]}
                                  tag="c3-but" />"
    </p>
  </section>,
  <section>
    <p>
      "But?"
    </p>
    <Map from={inventory.c4_specific}
      to={{
        _undefined: <p>"I will get the syllabus right after this meeting,
          but to teach I need context. The students expect me to be familiar with
          the history of this college, and to speak confidently about what happened to Professor Lynn."
        </p>,
        _any: <p>"I will get the syllabus right after this meeting,
          but to teach I need context. The students expect me to be familiar with   <Map from={inventory.c4_question1 || inventory.c4_question2}
            to={{
              _undefined: <span>
                the <List expansions={[["history"], ["history"]]}
                      tag="c4_question1" /> of this college,
                and to speak confidently
                about <List expansions={[["what happened"], ["what happened"]]}
                        tag="c4_question2" /> to Professor Lynn."
              </span>,
              _any: <span>the history of this college, and to speak confidently about what happened to Professor Lynn."</span>
            }} />
        </p>
      }} />
    <p>
      "Ms. Fuller, I am very busy and have an appointment in 10 minutes. What are you  <List expansions={[["asking me"], ["asking me"]]}
                                                                                         tag="c4_specific" nextUnit="none"/>?"
          </p>
        </section>,
        <section>
          <Map from={inventory.c4_question1 || inventory.c4_question2}
            to={{
              "happened": <div>
                <p>"I need to know what happened to my predecessor."</p>
                <p>
                  She paused, and then told me to close the door. "Jeffrey Lynn had been teaching
                  here for over 10 years. His class on utopianism is a signature one for the college, given our history.
                </p>
                <p>
                  "We've been undertaking an expansion of the
                  science wing, as part of a strategic agenda to transform this into a
                  research institute. I plan on my making this my <ListCard expansions={["legacy"]} tag="c3-legacy"
                    card={<span>I got the impression that the dean lets very little stand in her way.</span>} />.
                </p>
                <p>
                  "The historical significance of the campus can be an asset to us,
                  though frankly I prefer to downplay it. It was a long time ago and
                  the community had some...unconventional ideas. In addition, any historically significant structures are a liability
                  when it comes to modernization and development. I asked Jeffrey to lead the
                  conservation team—to protect the artifacts found during the excavations but to balance that
                  against an aggressive construction schedule."
                </p>
                <p>
                  She nodded towards the oil painting. "He was obsessed with that old hall—with finding out why it burned down.
                  I don't know why, it was made of wood and people used candles, what other reason do you need?
                  But Jeffrey was convinced that the artifacts contained
                  first-person accounts of what happened, or even some physical evidence of intentional destruction."
                </p>
                <p>She frowned. "He <i>knew</i> how important it was
                  to me that we open this school year with the building complete. I was... extremely angry with him."
                </p>
                <p>
                  "And what happened to him—?" I <ListCard tag="c3-asked"
                    expansions={["asked"]}
                    nextUnit="section"
                    card={<span>I told myself a dean would not actually murder a faculty member for going off schedule.</span>} />.
                </p>
              </div>,
              "history": <div>
                <p>
                  "The history of this college is relevant to my class yet I know nothing about it."
                </p>
                <p>"All right." She seemed to relax a little. "This had been rural farmland in the early 1800s, but around
                  1880 it was purchased for use by an emergent utopian community called '<ListCard expansions={["Harmonia"]}
                    tag="c3-harmonia"
                    card={<span>She made visible air quotes here.</span>} />.'
                  They believed that promoting what they considered to be 'scientific progress' was the key to
                  a more advanced society—that if they structured their society in just the right away, they'd
                  bring the future to them."
                </p>
                <p>She nodded
                  towards the oil painting. "That meteorite was an annoyance to the early European farmers, but to the
                  Harmonians it was a sign. They built their great hall around it, as a kind of paean to the
                  mystical nonsense that passed for science back then."
                </p>
                <p>"What happened to them?"</p>
                <p>
                  "Most of these utopian communities were made up of madmen, dreamers, and incompetent farmers.
                  The soil up here is poor and the winters are brutal."
                  She stared at the painting before continuing. "They made some... poor decisions—the community
                  was in decline anyway—and in 1899 their hall caught fire. There were some deaths, a lot of
                  property loss, and bankrupcy soon
                  followed."
                </p>
                <p>She paused. "Jeffrey Lynn was our leading scholar of the utopian period.
                  To be honest, it's not something I like to promote about the school. It was a long time ago and
                  they had some unpopular notions. Nevertheless, this expansion of our Science Center has
                  involved quite a bit of archaeological
                  excavation. Until we dug through to these old cellars and storerooms, we didn't have much material
                  about the community's last year, aside from accounts in their homegrown <Map from={inventory.c2_direction}
                    to={{
                      curiosity: "newspaper",
                        dean: <span><ListCard expansions={["newspaper"]}
                          tag="c3-newspaper"
                          card={<span>This must've been what Ella had shown me.</span>} /></span>
                    }} />. Jeffrey became obsessed with that research."
                </p>

                <p>"And is that what he was doing when <List expansions={[["he disappeared—"], ["he—"]]} tag="c3-disappeared" />"</p>
        </div>
      }} />
  </section>,
  <section>
    <p>
      "Just after term started, he halted the construction project—went out one morning and stood in front of the
      bulldozers, said everything had to stop.
      He'd missed a few classes, and stopped joining the
      regular meetings with the Historical Committee. <Map from={inventory.c2_direction}
        to={{
          curiosity: <span>Ella Merchant, our library archivist, </span>,
          dean: <span>You met Ella, she's the committee chair, she </span>

        }} /> says he'd started going through materials from one of the old cellars by himself and not
      involving the group. I would've fired him if he showed his face on campus after that, tenure be damned,
      but he didn't.
    </p>
    <p>
      "I believe he found some artifact or another down there that was too good to pass up
      and ran off with it." She leaned back. "I have an army of
      lawyers who will not be happy to see college property show up in a museum
      or at some auction."
    </p>
    <p>
      I frowned. "When I took this assignment I assumed he'd simply left for another job without
      much notice. Has he been reported missing? Are the police involved?"
    </p>
    <p>
      The Dean shrugged. "I'm not his mother." She narrowed her eyes. "You don't <List expansions={[["approve"], ["approve"]]}
        tag="c3_approve" /> of how
      I've handled this, Ms. Fuller?"
    </p>

  </section>,
  <section>
    <p>"It's not for me to say," I said neutrally.</p>
    <p>
      After considering me for another long moment, she stood up, and this meant I did too. "You seem bright enough, Ms. Fuller.
      If you work hard, you may succeed with us.
      Speak with Alice Gilman, Lynn's research assistant—you met her the night you arrived. She can answer your remaining
      questions and <ListCard expansions={["assist"]} tag="c3-assist"
        card={<span>If she was Lynn's assistant, why hadn't she mentioned it that night?</span>} /> with the class.
      And she'll have that syllabus."
    </p>
    <Map from={inventory.c2_direction}
      to={{
        curiosity: <div>
          <p>
            I thanked the dean and closed the door behind me. Walter came immediately out of his small adjacent office.
          </p>
          <p>
            "Sorry, walls are thin. But that could've been worse."
          </p>
          <p>
            "If you say so," I replied. "What do you know about Alice Gilman? The Dean told me to find her."
          </p>
          <p>
            He made a face. "Students joke she's the ghost of a long-dead utopian, because
            of the way she roams around the college alone at night. She gives me the creeps."
          </p>
          <p>
            "I wouldn't say she was friendly, but she did help me the night I arrived."
          </p>
          <p>
            He was unmoved. "I don't like her."
          </p>
        </div>,
        dean: <div>
          <p>

            I thanked the dean and closed the door behind me. I was surprised to find my student Lillian waiting for me in the foyer. "<ListCard expansions={["Ella"]}
              tag="c3-ella"
              card={<span>Lillian was studying to be a librarian; she told me later that the archivist was her academic advisor.</span>} /> said you were with the dean," she explained.
          </p>
          <p>
            "Did you want to see me about something?"
          </p>
          <p>
            She looked around and lowered her voice. "I've been worried about Professor Lynn."
          </p>
          <p>
            "Why do you say that?"
          </p>
          <p>
            "I think you need to see what he was working on. Come to the library with me."
          </p>
        </div>
      }} />
    <NextChapter chapter={4} />
  </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections} />

}
