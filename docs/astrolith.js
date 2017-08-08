const React = require('react')
import ListCard from '../components/listCard'

const astrolith = ({nextDoc, prevDoc}) => {

    return <div>
      <h3>Save the Astrolith!</h3>
      <h4>Stop the removal of our most famous monument</h4>
      <p>Citing bogus excuses for "modernization," Blithedale plans to excavate and remove
        the beating heart of our school. The Astrolith is one of the few reminders of
        the values on which we were founded: equality, optimism, and spirituality.
      </p>
      <p>
        Join us for our <ListCard expansions={["rally"]}
          tag="astro-rally"
          author="graffiti"          
          nextUnit="section"
          card={<span>Save the date: Nov 24!!</span>} /> to save the Astrolith and keep Blithedale weird!
      </p>
    </div>
}

export default astrolith
