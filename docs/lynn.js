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
      The excavation was tedious but uncomplicated work: loose soil, rocks, and fragments of burnt timber—I assume
      these were parts of the Great Hall.
      The hard part was actually crawling through—the original tunnel wasn't dug wide enough to accommodate a sedentary modern
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
      Alice has been wonderful. She has managed to locate all the materials we
      need—where do you even find coal? And by bringing them down in the dead of night, she has thus far
      avoided drawing any attention to this work. The amount of scholarship that will flow from
      this discovery is unimaginable. I will need to <ListCard expansions={["reward her"]}
        tag="lynn-flowers"
        author="lynn"
        card={<span>Perhaps a bouquet of flowers?</span>} /> generously for her efforts.
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
      I came down this morning after she'd gone to bed. I thought I'd just help out,
      take out the food waste, I don't know. I guess I was spying on her. She'd asked me to stay
      out of her way, said she didn't want to be disturbed ("That's all, Jeffrey!")
      but I know it was because she'd long stopped consulting Cadwell's papers anymore, as if she
      no longer needed them, or never needed them at all.
    </p>
    <p>
      I asked again about that large pile of stones behind the coal stove and she was evasive as ever: "There's
      nothing back there, I looked, just old rocks." Fishy, I thought. I decided to just...take a peek.
      I didn't have to spend much time digging through until I found Cadwell.
    </p>
    <p>I assume it's him, anyway. There's little more than a skeleton. Dry rags of clothes still hang from it,
      a tin cup and bucket by his side. And of course his journal, which makes it clear that he died
      here in this room. At least she thought to give him a kind of burial.
    </p>
    <p>
      God forgive me, I covered him back up. If she knows that I found him, well, I can see what will happen to me.
      But if I feign ignorance a little longer, I'll get the chance to experience what other
      historians could only <List expansions={[["dream of—"], ["dream of"]]} tag="lynn-fate" />
    </p>
  </div>
)
