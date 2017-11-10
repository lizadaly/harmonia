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
      <header>
        <h2>Chapter Eleven</h2>
        <blockquote>
          Then despite all entreaties and expostulations and even
          threats—which the men at some point vainly tried—the women, every one, departed, and after a few days,
          in all the great Atlantic seaboard, from the pine
          forests of Maine to the wave-washed Florida Keys,
          there was not a woman to be seen.<br/><br/>
          —<i>A Divided Republic</i>, Lillie Blake (1887)
        </blockquote>
      </header>
      <p>
        Lynn was where I’d left him, and he was so grateful for the water that it took him a while
        to notice the girl. She was shy now and refused to get close to us; instead
        she kicked over debris in the ruin of the main atrium and clambered around the Astrolith.
      </p>
      <p>
        “I asked her who her parents were, but she didn’t understand the question.”
      </p>
      <p>
        “They raised their children communally,” he said. He looked better already, though still frail.
      </p>
      <p>
        “So I gathered, but still, shouldn’t she—”
      </p>
      <p>
        “They practiced eugenics,” he said. “Or maybe it would be better to call it
        selective breeding. Women were <ListCard expansions={["encouraged"]}
          tag="c11-encouraged"
          nextUnit="section"
          card={<span>Lynn seemed like a good person, but the euphemism grated on me.</span>} />,
        I guess they’d say, to
        take sexual partners assigned by the community for the purposes of producing superior children.
        The children were to be raised by the group, without particular attachment to any one adult.
        They called the whole arrangement Scientific Marriage.”
      </p>
    </section>,
    <section>
      <p>
        My face twisted in revulsion. “I don’t suppose that bit of trivia appears in the Blithedale brochure.”
      </p>
      <p>
        “Most of our deans have found aspects of the history inconvenient,” he acknowledged. “Scientific Marriage
        wasn’t part of the original charter of the community. After a few years they were struggling to
        attract men who were young and actually able to do physical work. Eugenics was… fashionable at the time. I think they thought
        this would buy them a better class of utopians.”
      </p>

      <p>
        “Buy or breed,” I said. I watched the girl for a long moment. “She’s Cadwell’s daughter, you know.”
      </p>
      <p>
        “Good lord, are you sure?”
      </p>
      <p>
        “She told me
        Cadwell is her surname, though she doesn’t understand what it represents.”
      </p>
      <p>
        “So she’s also—”
      </p>
      <p>
        “I don’t believe Alice would leave her own daughter.”
        I paused. “If she was forced to endure her husband having children with other women, it
        may <List expansions={[["explain why she—"], ["explain—"]]}
              tag="c11-explain" />”
      </p>
    </section>,
    <section>
      <p>
        Lynn raised his voice. “So you think it’s okay for her to have just left her husband to die in a firetrap?
        To banish us here? I gave the woman a job, a total stranger with no credentials—”
      </p>
      <p>I shrugged, unwilling to argue over a point I was hardly sure of myself. “Do you know how to work the device?”</p>
      <p>
        “I think so, assuming it’s still intact. It’s doesn’t have much in the way of controls—there’s no dial with the year 1998 on it.
        You go forward if you’re back, or back if you’re forward. Each trip lands you a little further ahead in time.
        Cadwell never really understood how the thing worked.”
        He sighed. “I suppose it was really Alice’s invention after all.”
      </p>
      <p>
        I was still looking at the girl. “Lillian Horace, your student, said her great-grandmother was one of the earliest graduates, and that she’s named after her—”
      </p>
      <p>
        “Yeah,” he said, finally getting to his feet. “I was wondering the same thing. Abby, listen, even if I get it working—”
      </p>
      <p>
        “The machine requires someone to operate it.”
      </p>
      <p>
        He nodded. “The Cadwells would agree on an elapsed time when he would re-enter the machine and she would pull the
        lever again, to return him—“
      </p>
      <p>
        “But it's not going to hold together that long."
      </p>
      <p>
        “We can try, but I think—I think one of us has to <List expansions={[["stay"], ["stay"]]} tag="c11-stay" />.”
      </p>
    </section>,
        <section>
          <header className="section-divider">
            <svg className="divider" fill="white" stroke="black">
              <line x1="0" y1="0" x2="100%" y2="0" />
            </svg>
          </header>
          <p>
            I told Lynn I’d follow him down in a minute. Once he was gone, the girl quietly stole into the room
            and stood beside me. She peeked into the
            darkness of the cellar while I found a shell of a tall cupboard. “Help me move this,” I said.
          </p>
          <p>
            Together we dragged it across the floor and slid it in front of the tunnel entrance, leaving just
            enough space for an adult to squeeze past.
          </p>
          <p>
            “Lilly, this is very important. Are you listening?”
          </p>
          <p>
            She nodded.
          </p>
          <p>
            “Very soon, either I or Mr. Lynn are going to come back through that door. But if for some reason neither
            of us does, after one hour you need to push this cupboard as hard as you can.
            Nobody else can know about this entrance, and you <i>can’t follow me</i>. Do you understand?”
          </p>
          <p>
            She nodded again. I was anxious to get to the machine, but—“Lilly, do you know if you’re going to stay here
            in Harmonia?”
          </p>
          <p>
            "Miss Adams said I might go live with her and my friend <ListCard expansions={["Saul"]} tag="c11-saul"
              card={<span>I assumed this was the boy with whom she was playing.</span>} />.”
          </p>
          <p>
            “Do you like Miss Adams? Is she kind?”
          </p>
          <p>
            She <ListCard expansions={["shrugged"]}
              tag="c11-shrug"
              card={<span>Raised communally, one adult was probably the same to her as any other.</span>} />.
          </p>

          <p>I got down to her eye
            level. “Well, it was very nice to meet you, Miss Lilly. If I don’t see you again, take care of yourself.”
          </p>
          <p>
            She looked down shyly. “Yes ma’am.”
          </p>
          <p>
            Then I <List expansions={[["left her"], ["left her"]]} tag="c11-left" />.
          </p>
        </section>,
        <section>
          <header className="section-divider">
            <svg className="divider" fill="white" stroke="black">
              <line x1="0" y1="0" x2="100%" y2="0" />
            </svg>
          </header>

          <p>
            Lynn reported that the machine was in worse shape than he’d hoped. “They didn’t exactly build this to last,” he said.
            “I’ll do my best, but—”
          </p>
          <p>
            I didn’t know how to help him so I decided the best thing I could do was to give Cadwell a semblance of a <ListCard
              expansions={["burial"]}
              tag="c11-burial"
              card={<span>Though if I’m being honest, it was mostly so I didn’t have to look at him.</span>} />.
            One of the collapsed tunnels had been lined with bricks and they had spilled out into the cavern. I used them
            to make a crude  <ListCard expansions={["cairn"]}
              tag="c11-cairn"
              card={<span>I remembered that Lynn remarked on the burial in his journal; he assumed Alice had made it.
              The idea made my head spin.</span>} />.
          </p>
          <p>
            The iron stove had still had plenty of coal; Lynn had only to ignite it and stoke it until the “steam chamber
            reached full pressurization.” This meant some waiting around, and then a lot of winding of spools and
            rotating of gears. There was an array of gauges
            along the device and he spent yet more time adjusting things until he was satisfied with their readouts.
            He stroked his beard thoughtfully and looked over the contraption. “I think it’s ready,” he yelled
            over the din.
            “For you.”
          </p>
          <p>
            I had to get close to him to shout back. “No, this is—”
          </p>
          <p>
            “Abby, I <i>want</i> to stay. I’ve been studying these communities my entire life. It’s like the ultimate field trip.” He
            sounded brave but not entirely convincing.
          </p>
          <p>
            “No, <i>you</i> go and I’ll follow. I’ll get someone else to operate it, maybe the girl Lilly can—”
          </p>
          <p>
            Lynn started to argue and then ducked as a rivet came shooting out of the machine like a bullet. “There’s not
            going to be another chance. This thing is flying apart at the seams.” On cue, the device let out a percussive,
            polyphonic bang, a sound like a dozen cars backfiring.
          </p>
          <p>
            “Okay, fine!” I had to lean into his ear to be heard. I came up with a quick plan on the spot.
            “Jeffrey, wait—I don’t remember what to do when I’m in the chamber.”
          </p>
          <p>
            “You just need to—”
          </p>
          <p>
            “Can you show me?”
          </p>
          <p>
            “Sure,” he said, agreeably. Together we climbed up to the top <ListCard expansions={["platform"]}
              tag="c11-platform"
              card={<span>It was shuddering so violently at this point I thought neither of us would be going back.</span>}/>, and
            he stepped through the threshold of the chamber. “You just need to put both feet on the metal plate
            here, and hold on to the handle. Both hands, to be safe.”
          </p>
          <p>
            I put my hand on the
            chamber door.  All I needed to do was close and lock it, as Alice had done.
            One of us was going back—I just had to decide whether it was  <List expansions={[["him", "me"], ["him", "me"]]} tag="c11_return" conjunction="or"/>.
          </p>
        </section>,
        <section>
          <Map from={inventory.c11_return}
            to={{
              him: <div>
                <p>
                  I slammed the chamber door and pulled on the lever that engaged the lock.  “No!” he mouthed, putting his hand
                  up against the glass. He sounded far away already.
                </p>
                <p>
                  I had no idea if anyone was waiting for him in 1998. I’d never asked if he had parents or siblings
                  or even children who might miss him. That was selfish of me. I’m telling this story, but it’s his story too.
                </p>
                <p>
                  By the time I’d climbed down to the floor of the cavern, one of the rubber hoses had snapped loose and
                  was whip-snapping over my head; the coal stove was shaking
                  like a thing alive. Lynn was right: there could be no next journey. Then with two hands and all my
                  strength, I <List expansions={[["pulled"], ["pulled"]]} tag="c11-lever" /> hard on the massive lever.
                </p>
              </div>,
              me:  <div>
                <p>
                  My hand lingered on the door for another moment and then <ListCard expansions={["fell"]}
                    tag="c11-fell"
                    card={<span>I‘d like to believe I was just respecting his wishes, but honestly I just wanted to go home.</span>} />.
                  “That makes sense, thanks,”
                I said, inanely.</p>
                <p>
                  He frowned in suspicion. “Go ahead, there’s no more time.”
                </p>
                <p>
                  We traded places, but I left my hand propping open the door. “You don’t have <List expansions={[["to do this—"], ["to—"]]}
                                                                                                 tag="c11-do" />”
                </p>
              </div>

            }} />

        </section>,
        <section>
          <Map from={inventory.c11_return}
            to={{
              him: <div>
                <p>He just vanished, in the space of a blink.</p>
                <p>This far-away place would be my home now.</p>
              </div>,
              me: <div>
                <p>“This is what I want.” He closed and sealed the chamber door.</p>
                <p>
                  I cupped my hands over my face and hollered into the glass. “Take care of the girl!”
                  I don’t know if he heard.
                </p>
                <p>A moment later he pulled the giant lever and I was blown apart.</p>
              </div>
            }} />
          <NextChapter chapter={12} />

        </section>
        ]

        return <RenderSection currentSection={currentSection} sections={sections}  />        }
