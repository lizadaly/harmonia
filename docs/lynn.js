const React = require('react')
import { List, Map } from 'windrift'
import ListCard from '../components/listCard'

export const lynn1 = () => (
  <div>
    <p>
      The Committee delays were endless so I've taken matters into my own hands. I suppose
      as a scholar I should be ashamed of myself for damaging an archaeological site, but if Orellana has
      her way this will all be rubble in the end.
    </p>
    <p>
      The demolition was easy work: the brick encasing the final tunnel was shoddy and the mortar
      had almost distintegrated. The hard part was actually crawling through—the tunnel wasn't dug wide enough to accommodate a sedentary modern
      man. Hunched over as I was, I wasn't able to take in the chamber
      until I was fully inside it, and then...
    </p>
    <p>
      What a wonder.
    </p>
    <p>
      Despite all my research, everything I've risked to my reputation, the neglect of my students... I guess
      I didn't fully believe it would be real. But it is, just as Cadwell described. I can't wait to show Alice—I
      hope that she will aid me in <List expansions={[["repairing"], ["repairing"]]} tag="lynn-aid" />
    </p>
  </div>
)


export const lynn2 = () => (
  <div>
    <p>
      Alice has been wonderful; what would I do without her? She has managed to locate all the materials we
      need—where do you even find coal? And by bringing them down in the dead of night, she has thusfar
      avoided drawing any attention to this work. The amount of scholarship that will flow from
      this discovery seems literally infinite. I should get her something, flowers?
    </p>
    <p>
      We have been working in the cavern now almost nonstop. I'm afraid I may have missed some classes.
      The students will understand, surely.
    </p>
    <p>
      Of course the right thing to do would be to go public immediately and get a team of professionals down
      here. But the moment I do so, I lose control. And while it seems mad, I can't shake the belief that
      it's <i>almost</i> ready to try.
    </p>
    <p>
      I write this now by the hum of the generator. Alice said she found another one of Cadwell's journals
      that detailed the last step of the process: how to re-wind the intricate copper coils and
      tighten the springs inside the rotor. She thinks we're only a few days away from success—how she
      can be so certain, I don't know.
    </p>
  </div>
)

export const lynn3 = () => (
  <div>
    <p>
      I am in shock. I thought—I'd just help out, clean out some of the piles of debris, I don't know.
      I've had almost nothing to do lately, it's all been Alice, working all through the day and night,
      in a kind of trance. I don't see her consulting any of Cadwell's papers anymore, as if—
    </p>
    <p>
      I've been avoiding the obvious conclusion for so long. If I'm honest with myself I would have
      continued in my self-deception except, when I started digging through the pile of old bricks—looking
      for I don't know what—I found him. Cadwell.
    </p>
    <p>
      I assume, anyway, it was no more than a skeleton, of course. Dry rags of clothes still hung from it,
      a tin cup and bucket by his side. His water supply, long-depleted?
    </p>
    <p>
      When I found the first entrance it had been bricked up. The second entrance, under my house,
      also sealed. I hadn't really thought much about why—Cadwell keeping his own secrets, I suppose.
    </p>
    <p>
      I was almost right. The secret was Cadwell, walled in here for a hundred years.
    </p>
    <p>
      I hear Alice coming now. My <List expansions={[["fate is—"], ["fate is"]]} tag="lynn-fate" />
    </p>
  </div>
)
