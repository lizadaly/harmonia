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
        <h3>November 20, 1889</h3>
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
        "I asked her who her parents were," I said. "She said she didn't know."
      </p>
      <p>
        He was already looking better, but he remained seated on the floor, the pail gripped in both hands.
        "They raised their children communally," he said, then paused. "Raise, I guess."
      </p>
      <p>
        "I saw, but still shouldn't she—"
      </p>
      <p>
        "They practiced eugenics," he said, and then quickly added, "Not so bad as you might be thinking, but, still."
        He considered the girl. "More like selective breeding. Women were...<ListCard expansions={["encouraged"]}
          tag="c11-encouraged"
          nextUnit="section"
          card={<span>Lynn seemed like a good person, but I doubt many women would describe that arrangement as "not so bad."</span>} />—to
        take the sexual partners assigned by the Association."
      </p>
    </section>,
    <section>
      <p>
        "She's Cadwell's daughter," I said. "She said Cadwell was her surname, but it just didn't mean anything to her."
      </p>
      <p>
        He sat up in alarm. "So she's also—"
      </p>
      <p>
        "I don't think she's Alice's daughter. She wouldn't have left her behind."
      </p>
      <p>
        "You don't even know her," he retorted. "Not that I did either, apparently."
      </p>
      <p>I shrugged, unable to explain. "Do you know how to work the device?"</p>
      <p>
        "I think so. There isn't much to do, assuming it's still intact. It's not like there's a big dial with years on it.
        You go forward if you're back, or back if you're forward. Each trip lands you a little further ahead in time.
        Cadwell never understood how the thing worked."
        He stopped, remembering that Cadwell seemed to know very little. "Maybe Alice did, I don't know."
      </p>
      <p>
        "That's good enough for me," I said. I looked back at the girl, who had stopped playing and was just watching us.
        "You know," I said thoughtfully, "Lillian Horace, your student...she's a legacy admission. She said her
        mother and grandmother both—"
      </p>
      <p>
        "Yeah," he said, finally getting to his feet. "I was wondering the same thing." He turned to go back down into the
        tunnel but paused. "Even if I get it working," he said.
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
        Lynn was working quickly; the kerosene lanterns were running dry and we didn't know where to find replacements.
        He said the machine was in worse shape than he'd hoped. "They didn't exactly build this to last," he sighed.
        "I'll do my best, but I think—I think it falls apart a little more each trip, regardless of which
        direction you go. I'm almost certain it's worse since you came through."
      </p>
      <p>
        "Sorry, that was careless of me," I said. That was spiteful but I was frustrated. I felt bad about just
        leaving the girl, but I didn't really know what to say to her. I had
        lots of questions, but this child couldn't answer them.
      </p>
      <p>
        I decided the best thing I could do would be give Cadwell a semblance of a kind of <ListCard expansions={["burial"]}
          tag="c11-burial"
          card={<span>Though if I'm being honest, it was mostly for our benefit—to not have to look at him.</span>} />.
        One of the collapsed tunnels had been lined with bricks and they had spilled out into the cavern. I used them
        to make a crude  <ListCard expansions={["cairn"]}
          tag="c11-cairn"
          card={<span>I did not realize until much later that Lynn would find this and assume that it was the work of
          Cadwell's spiteful wife.</span>} />.
      </p>
      <p>
        The iron stove had still had plenty of coal; Lynn had only to ignite it and stoke it until the "steam chamber
        reached full pressurization." This meant some waiting around, and then a lot of winding of spools and
        rotating of gears. "If only I had more tools," he muttered. I hadn't taken notice of the array of gauges
        under the giant copper wheel, but
        he spent yet more time running around machine adjusting things until he was satisfied with their readouts.
        He stroked his long white beard thoughtfully and looked over the contraption. "I think it's ready," he said.
      </p>
      <p>
        We'd avoided discussing who would go. I postponed it a little further: "Sorry, I need to thank her," I said,
        and left before he could <ListCard expansions={["complain"]}
          tag="c11-complain"
          card={<span>I could've reminded him that I'd saved his life if he had gripes about my time management
          skills.</span>} /> that I'd just waited thirty minutes doing nothing when I could've been
        giving the girl my regards.
      </p>

    </section>
    ]

    return <RenderSection currentSection={currentSection} sections={sections}  />
  }
