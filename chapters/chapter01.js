const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'

import ListCard from '../components/listCard'
import Reader  from '../components/reader'
import { docs } from '../docs'

export default ({currentSection, inventory, cards}) => {
  const sections = [
    <section>
      <heading>
        <h2>Chapter One</h2>
        <h6>November 3, 1990</h6>
        <blockquote>
          I have neither power, time, nor occasion to be a great conqueror.
          Since Fortune and the Fates would give me none,
          rather than never be mistress of a world, I have made a World of my own. <br/><br/>
          — Preface to <i>The Blazing World</i>, Margaret Lucas Cavendish (1666)
        </blockquote>
      </heading>
      <p>It was nearly midnight when I finally arrived on campus and the weather was
        getting worse. The last hour of the drive was a dark and lonely ascent into
        deeply forested foothills. I hadn't seen a town for miles when I finally
        came up on the sign for <ListCard expansions={["Blithedale College"]}
          tag="c1-college-name"
          card={<span>An obscure women's college, tucked in the upper corner of
          Massachusetts like a bookmark.</span>} />. This little village would be my home now.
      </p>
      <p>
        A substitute teaching position was not exactly the breakthrough in academia I'd wanted,
        but at least for now, it was consistent with my paltry credentials, experience, and savings account.

        I'd received a letter extending the offer, had a brief phone call with
        the <ListCard expansions={["dean"]}
          tag="c1-dean"
          card={<span>Dean Orellana had made it clear: if I didn't accept the offer
          promptly, she had plenty more takers on hand.</span>} />, and—unencumbered by
        any other employment—had started packing.
        I left Boston this morning, stopping twice when the icy rain
        escalated to the point of zero visibility.
      </p>
      <p>
        The road to campus was steep and barely paved, and by now the early winter
        snow had turned it into a slippery mess. My
        aging car was fishtailing everywhere and I nearly sideswiped a
      couple trees.</p>
      <p>
        I'd hoped to arrive hours earlier, to <ListCard expansions={["sip warm mugs of brandy"]}
          tag="c1-cider"
          card={<span>I admit I was hazy on what real professors did in their free time.</span>} /> with
        the rest of the faculty and argue about transcendalism. At the very least I needed to
        know where I'd be sleeping. Nobody was here to welcome me; the buildings were dark and
        shuttered, with only slivers of weak light peaking out through the storm.
      </p>
      <p>
        I couldn't find the main entrance, but spotted a sign for the English department and
        parked there.

        I unclenched my hands from the steering wheel, took a deep breath, and hurried up
        to the entryway. The front door was <List
          expansions={[["unlocked"], ["unlocked and no alarms rang as I stepped into the building"]]}
                                              tag="c1-doorknob"/>.
      </p>
    </section>,
  <section>
    <p>The interior looked like I expected: old money New England, wood-panelled walls, rows of office doors embossed with the the names of
    professors and adjuncts. I called out a hello, but no one answered.</p>
    <p>I recognized a few names here and there but I was hunting for one door in particular—the missing
      instructor I'd been hired to
      replace. I found it at the
      end of the row: <ListCard expansions={['"Professor Jeffrey Lynn"']}
        tag="c1-scholar"
        card={<span>
          Lynn's area of scholarship was 19th century mysticism. Mine was Civil War-era proto-feminist
          movements. Close enough, I guess.
        </span>}
      />. His door was <List expansions={[["ajar"], ["ajar, so I let myself in and flipped on a light"]]} tag="c1-in" />.
    </p>
  </section>,
  <section>
    <p>
      Lynn's office was small, stuffed with an absolute riot of folders, loose notes, and library books.
      A few old surveyor maps were tacked to the walls. Despite the clutter, the room felt abandoned.
    </p>
    <p>
      His desk was a special kind of academic disaster, but a small worktable by the doorway held just a single stack of papers.
      I recognized a draft of my class syllabus and <ListCard expansions={["picked it up"]}
        tag="c1_syllabus"
        nextUnit="section"
        card={<span>Look, if he didn't want somebody going through his things, he shouldn't
        have unexpectedly disappeared.</span>}
                                                    />:

    </p>

  </section>,
  <section>
    <Reader inventory={inventory} docs={[docs.notes]} />
  </section>,
  <section>
    <p>I flipped the page over and read the excerpt Lynn had picked out. It was from
      chapter three of the novel:
    </p>
    <Reader inventory={inventory} docs={[docs.bellamy]} />
  </section>,
  <section>
    <p>The next excerpt was from an English utopian novel. I assumed he was
      setting up a lecture on the mechanisms by which these travelers
      discover the "perfect society":
    </p>
    <Reader inventory={inventory} docs={[docs.age1]} />
  </section>,
  <section>
    <p>Curious, I turned to the last page on the pile. It wasn't the last novel from the syllabus,
      but instead a fragile piece of
      yellowed writing paper, <ListCard expansions={["handwritten"]}
        tag="c2_writing"
        card={<span>I've reproduced it here in type to make it more readable.</span>} />  in a looping, archaic style:
      </p>
    <Reader inventory={inventory} docs={[docs.frag1]} />
  </section>,

  <section>
    <p>The papers were abruptly snatched out of my hand.
    </p>
    <p> "Excuse me, what are you doing?" I looked up to
      see a woman regarding me with suspicion from the doorway.
      Her hair was long and unstyled, and she wore an ankle-length plain blue dress and carried a flashlight.
      The beam was pointed directly into my face.
    </p>
    <p>I reminded myself that I was invited here and didn't need to <ListCard
      expansions={["apologize"]}
      tag="c2-apologize"
      card={<span>I guess technically I was trespassing in someone's office.</span>} />.
      "I'm Abby Fuller. I'm substituting for Jeffrey Lynn."
    </p>
    <p>"Oh," she said, lowering the light. "I heard a replacement had been found."
    </p>
    <p>
      "That's right," I said cautiously. "There was no one here when I arrived and—
      look, do you know where I'm supposed to be staying? I'm very tired."
    </p>
    <p>"I assume the guest faculty quarters. I can take you to them." She turned without saying anything further,
      tucking the papers under her arm and locking the door on her way out.
    </p>
    <p>We went back to my car to get my things. She didn't offer to help with my <ListCard expansions={["bags"]} tag="c2-bags"
      card={<span>They were pathetically few of them anyway. Shouldn't a grown woman have more <em>stuff</em>?</span>} />.
      At least the snow had stopped, turning to a fine, cold mist.
    </p>
    <p>
      The faculty residence was as dark and quiet as the rest of the campus. If anyone else was living there,
      they weren't night owls. "Let's put you in here," she said, gesturing into a room with a single small window
      and <ListCard expansions={["spartan"]} tag="c2-room"
        card={<span>Honestly I was just happy I wasn't in a snow-filled ditch on the side of the road.</span>} /> wooden furnishings.
      I dropped everything on the floor, mumbled my thanks, and collapsed on the bed as she closed the door. Only
      as I was drifting off did I realize she'd never
      told me her name.
    </p>
    <NextChapter chapter={2} />
  </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
