const React = require('react')
import { List } from 'windrift'
import ListCard from '../components/listCard'

// https://babel.hathitrust.org/cgi/pt?id=nyp.33433003156373;view=1up;seq=35

export const paper1 = () => {

  return <div>
    <div style={{'columnCount': 2}}>
      <h4>Chemistry Under Difficulties</h4>
      <p>
        <span className="first-letter">F</span>RIGHTFUL ACCIDENT!—Between
        twelve and one o'clock last night, the whole neighborhood was
        thrown into the utmost alarm by a terrible explosion in the vicinity
        of Prof. C.'s Laboratory. On entering that establishment a
        scene of devastation plainly indicated that a scene of terrific
        violence had occurred. At first no trace of the Professor could be
        found—except a cloth cap which he was accustomed to wear while
        engaged in his occult investigations. Fortunately he was found
        several hours later, ___.
      </p>
      <p>The Professor is known to be engaged in analyzing new compounds
        and processes of exceedling dangerous character. While the
        Community applauds your continued curiousity and Scientific
        pursuits, we implore you to take heed of our concerns.
      </p>
      <p>
        To guard against sudden incursions of explosive compounds, we
        have taken the liberty of attaching large bolts to your door,
        securing them by means of bars through the door-posts.
      </p>
      <h4>The Best Time to Cut Hay</h4>
      <p>
        Mr. A— writes to share, "The best method I have found is to
        commence about the 10th of June and finish by the 25th.
        Sometimes weather prevents so I cannot finish until the
        first days of July. The quality of the butter derived from
        this early cutting will in no time convince you to lay aside
        old customs and adopt this better one."
      </p>

      <h4>Home-Talk</h4>
      <h5>Professor C—</h5>
      <p>
        <span className="first-letter">T</span>HE MAGNET. It might be
        said that that the magnet is a body having a spirit in it.
        Besides the body of the iron there is, in and around it,
        an influence—a vibration or something which is entirely
        invisible and intangible yet has power to act at a considerable
        distance. It can operate right through a man's blood, bones, and
        muscles.
      </p>
      <p>
        If a magnet operates by a hidden force, it is certainly not
        incredible, or to be regarded as strange, that human beings
        should have spirits; that our bodies should have
        flowing out from them an influence
        as intangible and yet as effective as that of a magnet. Indeed,
        our ability to control our muscles is known to be due to a
        nervous influence similar to electricity, which is similar to
        magnetism.
      </p>
      <p>
        There is known to be a similarity between electricity and the
        power of the will. It follows, then, that by the galvanic battery, it may be
        possible to put a spirit into soft iron such
        as <List expansions={[["our Astrolith"], ["our Astrolith"]]}
          tag="newspaper_astrolith" /> and take it out again.
      </p>
    </div>

  </div>

}
