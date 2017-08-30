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
      <heading>
        <h2>Chapter 11</h2>
        <blockquote>
          "God did not make us perfect. He left us something to do for ourselves."

        </blockquote>
      </heading>
      <p>
        Lynn was where I'd left him, and he was so grateful for the water that it took him a long time
        to notice the girl. She was suddenly shy now and refused to get too close to us. We watched her
        climb up and over the Astrolith like it was a jungle gym.
      </p>
      <p>
        "Her name is Lilly. I asked her who her parents were," I said. "She said she didn't know."
      </p>
      <p>
        He was already looking better, but he remained seated on the floor, the pail gripped in both hands.
        "They raised their children communally," he said, then paused. "Raise, I guess."
      </p>
      <p>
        "So I gathered, but still, shouldn't she—"
      </p>
      <p>
        "They practiced eugenics," he said, and then quickly added, "Not so bad as you might be thinking, but, still. More
        like selective breeding. Women were <ListCard expansions={["encouraged"]}
          tag="c11-encouraged"
          nextUnit="section"
          card={<span>Lynn seemed like a good person, but I doubt many women would describe that arrangement as "not so bad."</span>} />,
        I guess they'd say, to
        take the sexual partners assigned by the Association."
      </p>
    </section>,
    <section>
      <p>
        "She said Cadwell was her surname, but she didn't connect that with any individual adults. She understands
        what parent are, I think, but just doesn't believe she has them."
      </p>
      <p>
        He sat up in alarm. "So she's also—"
      </p>
      <p>
        "I don't think she's Alice's child. She wouldn't have left her behind."
      </p>
      <p>
        "You don't even know her," he retorted. "Not that I did either, it seems."
      </p>
      <p>I shrugged, unwilling to argue over a point I was hardly sure of myself. "Do you know how to work the device?"</p>
      <p>
        "I think so, assuming it's still intact. It's doesn't have much in the way of controls. There's no big dial with years on it.
        You go forward if you're back, or back if you're forward. Each trip lands you a little further ahead in time.
        Cadwell never really understood how the thing worked."
        He sighed. "I guess he didn't really build much of it at all."
      </p>
      <p>
        "I guess we'll have to take our chances," I said. I looked back at the girl, who had stopped playing and was just watching us.
        "Lillian Horace, your student, she said her
        mother and grandmother both—"
      </p>
      <p>
        "Yeah," he said, finally getting to his feet. "I was wondering the same thing." He turned to go back down into the
        tunnel but paused. "You know, even if I get it working..."
      </p>
      <p>
        "Yeah?"
      </p>
      <p>
        "It takes two to operate. One of us will have to stay."
      </p>
      <p>
        ****
      </p>
      <p>
        I told Lynn I'd join him shortly. As soon as he was out of sight, the girl clambered over
        the wreckage in the main atrium and stood beside me. She peeked into the
        ruin of the cellar door.
      </p>
      <p>
        I looked around the room and found a shell of a wooden cupboard. "Help me move this," I said. I knew she'd
        be happy to have a job.
      </p>
      <p>
        Together we dragged it across the floor and slid it in front of the tunnel entrance, leaving just
        enough space for an adult to squeeze past. I grabbed a few loose planks and leaned them up against it.
      </p>
      <p>
        "Lilly, this is very important. Are you listening?"
      </p>
      <p>
        She nodded seriously.
      </p>
      <p>
        "Very soon, either I or Mr. Lynn are going to come back through that cellar. But if for some reason neither
        of us does, after one hour you need to push this cupboard as hard as you can, and cover up any space with these boards.
        Nobody else can know about this entrance, and you <i>can't follow me</i>. Do you understand?"
      </p>
      <p>
        She nodded again. I was anxious to get to the machine, but—"Lilly, do you know if you're going to stay here, after
        that a big fire?"
      </p>
      <p>
        "Miss Adams said I might go live with her and Saul. <ListCard expansions={["He's"]} tag="c11-saul"
          card={<span>I assumed this was the boy with whom she was playing.</span>} /> my friend."
      </p>
      <p>
        "Do you like Miss Adams? Is she kind?"
      </p>
      <p>
        The girl <ListCard expansions={["shrugged"]}
          tag="c11-shrug"
          card={<span>Raised communally, one adult was probably the same to her as any other.</span>} />. I got down to her eye
        level. "Well, it was very nice to meet you, Miss Lilly. If I don't see you again, take care of yourself."
      </p>
      <p>
        She looked down shyly. "Yes ma'am."
      </p>
      <p>
        Then I left.
      </p>
      <p>
        ****
      </p>
      <p>
        Lynn was working quickly; the kerosene lanterns were running dry and we didn't want to take the time to find replacements.
        He said the machine was in worse shape than he'd hoped. "They didn't exactly build this to last," he sighed.
        "I'll do my best, but—I think it falls apart a little more each trip, regardless of which
        direction you go. I'm almost certain it's worse since you came through."
      </p>
      <p>
        "Sorry, that was careless of me," I said irritably. I was
        worried for the girl, even though she was in no way my responsibility.
      </p>
      <p>
        I decided the best thing I could do with my nervous energy was to give Cadwell a semblance of a <ListCard expansions={["burial"]}
          tag="c11-burial"
          card={<span>Though if I'm being honest, it was mostly for my benefit—to not have to look at him.</span>} />.
        One of the collapsed tunnels had been lined with bricks and they had spilled out into the cavern. I used them
        to make a crude  <ListCard expansions={["cairn"]}
          tag="c11-cairn"
          card={<span>Lynn would find this, in 1998, and assume that it was the work of
          Cadwell's wife.</span>} />.
      </p>
      <p>
        The iron stove had still had plenty of coal; Lynn had only to ignite it and stoke it until the "steam chamber
        reached full pressurization." This meant some waiting around, and then a lot of winding of spools and
        rotating of gears. I hadn't taken notice of the array of gauges
        under the giant copper wheel, but
        he spent yet more time adjusting things until he was satisfied with their readouts.
        He stroked his long white beard thoughtfully and looked over the contraption. "I think it's ready," he yelled
        over the din.
        "For you."
      </p>
      <p>
        I had to get close to him to shout back. "Jeffrey, no, this is—"
      </p>
      <p>
        "I <i>want</i> to stay. I've been studying Futuria my entire life, preparing for this without even realizing it."
      </p>
      <p>
        "No, <i>you</i> go and I'll follow, I'll get someone else, maybe the girl, to—"
      </p>
      <p>
        Lynn started to argue and then ducked as a rivet came shooting out of the machine like a bullet. "There's not
        going to be another chance. This thing is flying apart at the seams." On cue, the device let out a percussive,
        polyphonic bang like a dozen cars backfiring.
      </p>
      <p>
        "Okay," I said. I had to lean into his ear to be heard. "But I think the handle came loose," I lied.
        "The one in the chamber. Can you check it for me?"
      </p>
      <p>
        "Sure," he said, agreeably. Together we climbed up to the top <ListCard expansions={["platform"]}
          tag="c11-platform"
          card={<span>It was shuddering so violently at this point I thought zero of us would make it.</span>}/>, and
        he looked inside the chamber. "Seems okay to me—"
      </p>
      <p>
        "Just tighten it, please, I don't want it coming loose in my hand." He stepped inside, and I put my hand on the
        chamber door.
      </p>
      <p>
        All I needed to do was shut the door and lock it, as Alice had done.
        One of us was going back. It could be <List expansions={[["him", "me"], ["him", "me"]]} tag="c11_return" conjunction="or"/>.
      </p>
    </section>,
    <section>
      <Map from={inventory.c11_return}
        to={{
          him: <div>
            <p>
              I closed the chamber door and pulled on the lever that engaged the lock. "Okay, I've tightened it—"
              Lynn said, turning back around and realizing he was trapped. "No!" he mouthed, putting his hand
              up against the glass. He sounded far away already.
            </p>
            <p>
              I had no idea if anyone was waiting for him in 1998. I'd never asked if he had parents or siblings
              or even children who might miss him. That was selfish of me. I'm telling the story, but it's his story too.
            </p>
            <p>
              When I reached the ground, one of the rubber hoses had snapped loose and whip-snapped over my head;
              the coal stove was shaking
              like a thing alive. Lynn was right: there could be no next journey. I looked up at the chamber and
              he nodded—I like to think he meant to thank me—and grasped the handle. I nodded back,
              then with two hands and all my
              strength, <List expansions={[["pulled"], ["pulled"]]} tag="c11-lever" /> hard on the massive lever.
            </p>
          </div>,
          me:  <div>
            <p>
              My hand lingered on the door for a moment and then <ListCard expansions={["fell"]}
                tag="c11-fell"
                card={<span>I'd like to believe I was just respecting his wishes, but mostly I was scared.</span>} />. "Okay, I tightened the handle—"
              Lynn shouted, turning back to me. He looked suspicious for a moment, and then stepped out. "Go ahead."
            </p>
            <p>
              "Thank you," I started. "You don't have <List expansions={[["to do this—"], ["to —"]]}
                                                          tag="c11-do" />
            </p>
          </div>

        }} />

    </section>,
    <section>
      <Map from={inventory.c11_return}
        to={{
          him: <div>
            <p>He was atomized before my eyes, like a dandelion blown by the wind.</p>
          </div>,
          me: <div>
            <p>"This is what I want," he said. I could barely hear him now. The platform shifted under his feet, and
              he stumbled, grabbing on the railing. "Abby, it has to be now." He closed and sealed the chamber door without
            waiting for my answer.</p>
            <p>
              I yelled out: "Take care of the girl."
              I don't know if he heard.
            </p>
            <p>A moment later he pulled the giant lever and I was blown apart like a dandelion in the wind.</p>
          </div>
        }} />
      <NextChapter chapter={12} />

    </section>
    ]

    return <RenderSection currentSection={currentSection} sections={sections}  />
  }
