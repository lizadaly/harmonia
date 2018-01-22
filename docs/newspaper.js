const React = require('react')
import { List } from 'windrift'
import ListCard from '../components/listCard'

// https://babel.hathitrust.org/cgi/pt?id=nyp.33433003156373;view=1up;seq=35

export const paper1 = () => {

  return <div>
    <header>
      <img src="images/header-glyph.png" alt="A woodcut decorative design"/>
      <h1>The Harbinger</h1>
      <img src="images/angel.png" alt="A woodcut of an angel blowing a trumpet"/>
      <h2>Together We Shall Shine a Light ~ June 19, 1889</h2>
    </header>
    <div className="paper-container">
      <h4>Chemistry Under Difficulties</h4>
      <p>
        <span className="first-letter">F</span>RIGHTFUL ACCIDENT! Between
        twelve and one o’clock last night, the whole neighborhood was
        thrown into the utmost alarm by a terrible explosion in the vicinity
        of Prof. C’s Laboratory. On entering that establishment a
        scene of devastation plainly indicated that a scene of terrific
        violence had occurred. At first no trace of the Professor could be
        found—except a cloth cap which he was accustomed to wear while
        engaged in his occult investigations. Fortunately he was found
        several hours later, beneath the Phalanstery.
      </p>
      <p>Professor C! You are known to be engaged in analyzing new compounds
        and processes of exceedingly dangerous character. While the
        Community applauds your continued curiosity and Scientific
        pursuits, we implore you to take heed of our concerns. We
        have taken the liberty of attaching large bolts to your door,
        securing them by means of bars through the door-posts.
      </p>
      <h4>The Best Time to Cut Hay</h4>
      <p>
        Our own Mr. A writes, “The best method I have found is to
        commence about the 10th of June and finish by the 25th.
        Sometimes weather prevents so I cannot finish until the
        first days of July. The quality of the butter derived from
        this early cutting will in no time convince you to lay aside
        old customs and adopt this better one.”
      </p>

      <h4>Spirituality Rises</h4>
      <p>
        <span className="first-letter">M</span>AGNETISM. It might be
        said that that the magnet is a body having a spirit in it.
        Besides the body of the iron there is, in and around it,
        an influence—a vibration which is entirely
        invisible and intangible yet has power to act at a considerable
        distance. It can operate right through a man’s blood, bones, and
        muscles.
      </p>
      <p>
        If a magnet operates by a hidden force, it is certainly not
        incredible, or to be regarded as strange, that human beings
        should have spirits; that our bodies should have
        flowing out from them an influence
        as intangible and yet as effective as that of a magnet. Indeed,
        our ability to control our muscles is known to be due to a
        nervous influence similar to electricity, which has many properties of
        magnetism.
      </p>
      <p>
        There is known to be a relationship between electricity and the
        power of the will. It follows, then, that by the galvanic battery, it may be
        possible to distill one’s spirit into magnetic iron such
        as our Astrolith and, then to decant it again. The implications of such
        an Instrument could be quite profound.
      </p>
    </div>

  </div>
}
export const paper2 = () => {
  return <div>
    <img src="images/hands.png" alt="Woodcut of linked hands in a 19th century style" />
    <h4>A New Eden</h4>
    <p>Learned men with open minds and sturdy backs! You are wanted for a new community.
      Join like-minded free thinkers as we build a Scientific Way of living—as equals before God and Man,
      guided by Science and Spirit alike. <small>Inquire at 10 Broad St. Boston, MA</small>.
    </p>
  </div>
}

export const paper3 = () => {
  return <div>
    <header>
      <img src="images/header-glyph.png" alt="A woodcut decorative design" />
      <h1>The Harbinger</h1>
      <h2>Together We Shall Shine a Light ~ November 23, 1884</h2>
    </header>
    <div className="paper-container">
      <img src="images/trumpet.png" alt="A woodcut of a decorative trumpet"/>
      <h4>The Astrolith Emerges</h4>
      <p>
        <span className="first-letter">T</span>HE FUTURE IS NOW! <ListCard expansions={["Join us"]}
          tag="paper-join"
          nextUnit="section"
          author="students"
          card={<span>November 23 is Astrolith Day! Keep Blithedale weird! See you in the quad tomorrow!</span>} />  in the Phalanstery
        to celebrate the commencement of our spiritual journey together.
      </p>
      <p>
        The Astrolith, symbol of our divine providence and infuser of vitality—has been unveiled.
        Demonstrations of the power of Magnetism, Galvanic Forces, and Spiritual Science will be
        provided by Professor C. Prayers, speeches, and readings will continue through the evening. All are welcome.
      </p>
    </div>
  </div>
}

export const paper4 = () => (

  <div>
    <header>
      <img src="images/header-glyph.png" alt="A woodcut decorative design"/>
      <h1>The Harbinger</h1>
      <h2>Together We Shall Shine a Light ~ November 14, 1889</h2>
    </header>
    <div className="paper-container">
      <h4>A Note to Our Readers</h4>
      <p>
        <span className="first-letter">S</span>AD DAY! This will be the last edition of The Harbinger
        for the year, possibly for-ever.
      </p>
      <p>
        It is no longer possible to put up a brave face: our experiment is at an end. We are perplexed
        by <ListCard author="lynn"
          tag="paper4-debt" expansions={["debts"]}
          card={<span>The debt would exceed more than $30,000, a vast sum in those days, including the losses
          incurred by the fire at the (uninsured) Great Hall.</span>} />, by want of capital to carry on any business. We lose more members than we gain; we are unable to
        supply our own needs from our gardens, and we sell naught but milk and hay whose prices
        do not sustain us, no matter how many luxuries we forgo.
      </p>
      <p>The governing
        council has voted to disband the joint-stock company; all existing shareholders will be paid out
        the fair value of their investment.
      </p>
      <p>
        We invite those who own or wish to buy their homes to <ListCard author="lynn"
          tag="paper4-stay" expansions={["stay"]}
          card={<span>Only a dozen utopians did so, mostly single women, but that was enough to sustain them through the founding of the college.</span>} />. Our sole profitable venture has been
        our school, and many of us seek to continue that work, or even to extend it. We have seen the
        benefits that equal education for <ListCard author="lynn"
          tag="paper4-boys" expansions={["boys and girls"]}
          card={<span>Blithedale was co-ed until 1906, when a new charter was established after a bitter debate.</span>} /> bring, and we believe there is yet more work to do
        there.
      </p>
      <h4>Plea for a Safe Return</h4>
      <img src="images/rooster.png" style={{float: "right", paddingLeft: "2em"}} alt="A woodcut of a rooster"/>

      <p>Mr. M writes, “If any man has taken it upon himself to remove my chickens from their
        enclosure, I promise before the community to lay no claims on him if they are but returned unharmed.”
      </p>
      <h4 style={{clear: "both"}}>To the Instrument!</h4>
      <p>
        <ListCard author="lynn"
          tag="paper4-anon" expansions={["Anon"]}
          nextUnit="section"
          card={<span>Certain that Cadwell was the author here: fragments of this text appear on the
          back of the device diagram (attached).</span>} />. writes, “As we grapple with the dissolution of our
        grand experiment, I call upon our community to remember the grand Scientific Discoveries we have
        made together. Remember that we are composed of minute and invisible particles of matter, endowed with attributes
      such as we are wont to associate with larger masses.</p>
      <p>If you
        find difficulty in imagining this, remember that every grain of sand is a microcosm, sharing in the
        innate motions which pulsate through the Universe; and remember further that there are specks,
        infinitely smaller than grains of sand, in which a heart beats, and blood circulates, and all the
        functions of an exuberant vitality are exercised. All of this can be Instrumented, with the aid of a
        great ancient Spiritual and Scientific force.”
      </p>
    </div>

  </div>

)
