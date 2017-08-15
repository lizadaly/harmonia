const React = require('react')
import { List, Map } from 'windrift'
import ListCard from '../components/listCard'

export const lynn1 = () => (
  <div>
    <p>
      The Committee delays were endless so I've taken matters into my own hands. I suppose
      as a scholar I should be ashamed of myself for damaging an archaeological site, but if Orellana has
      her way this will all be rubble anyway.
    </p>
    <p>
      The demolition was easy work: the brick encasing the final tunnel was weak and the mortar
      had almost distintegrated. The tunnel wasn't dug to accommodate a sedentary modern
      men and I nearly had to crawl to get through. Hunched over as I was, I wasn't able to take in the chamber
      until I was fully inside it, and then... What a wonder.
    </p>
    <p>
      Despite all my research, everything I've risked to my reputation, the neglect of my students... I guess
      I didn't fully believe it would be real. But it is, just as Cadwell described. I can't wait to show Alice.
    </p>
    <p>
      I gaped at the device for what seemed like hours, afraid that if I touched it or even moved, I'd awaken
      from the dream—one of those deep trances into which the utopian heroes fall. At last
      I shook myself out of my reverie and approached it. That's when I stumbled over <List expansions={[["Cadwell's—"], ["Cadwell's"]]}
        tag="lynn-decribed" />
    </p>
  </div>
)
