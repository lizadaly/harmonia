const React = require('react')
import { List } from 'windrift'
import ListCard from '../components/listCard'

const mizora = ({}) =>  (
  <div>
    <p>Animals and domestic fowls had long been extinct in Mizora. This was one cause of the weird silence that so
      impressed me on my first view of their capital city. Invention had superceded the usefulness of animals in
      all departments: in the field and the chemistry of food. Artificial power was utilized for all vehicles.
    </p>
    <p>
      "The association of animals is degrading," the Perceptress asserted. "And you, who still live by tilling the soil,
      will find a marked change economically in dispensing with your <ListCard expansions={["beasts of burden"]}
      tag="miz-beasts"
      nextUnit="section"
      card={<span>These early sci-fi novels didn't envision flying cars—regular cars had barely been invented yet.
        They mostly envisioned tractors.</span>} />. Fully four-fifths
      that you raise on your farms is required to feed your domestic animals. If your agriculture was devoted
      entirely to human food, it would make it more plentiful for the poor."
    </p>
    <p>
      I did not like to tell her that I knew many wealthy people who housed and fed their domestic animals better
      than they did their tenants.
    </p>
  </div>

)
export default mizora
