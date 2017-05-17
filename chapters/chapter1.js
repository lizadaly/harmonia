const React = require('react')
import { Map, List, RenderSection, FromInventory, NextChapter, AllButSelection} from 'windrift'

export default ({currentSection, inventory}) => {
  const sections = [
  <section>
    <p>It's nearly midnight when you finally find the exit off the highway. The snow
is a million points of reflected light in the headlamps and the windshield wipers are
flapping so aggressively it's a wonder they don't fly off. The heat in the car
was a relief a hundred miles ago when it finally started working, but now the
blower's stuck on full and to keep awake you cracked open the window somewhere back in
Connecticut. Your lap is covered in flurries.
  </p>
  <p>
    The road to campus is unplowed and barely paved, but mercifully short. Your
ailing and aged VW is fishtailing everywhere, so you simply steer straight for the
first building you find and stop. It's utterly dark beyond the narrow headlight
beams; you're not even sure if you're in a parking lot. No matter, you pull the
parking brake and lean back, every muscle aching.
  </p>
<p>
  An 18-hour drive, with one break for a fitful long nap in a creepy Maryland motel.
The engine is off but the car's still ticking and shuddering. What are the odds it'll even
start again?
</p>
<p>
  You thought you'd be here hours ago, enough time to check in with the dean's office
and find out where you're supposed to stay. But St. Isidore College is dark and sleepy.
No lights visible anywhere.
</p>
<p>
  Nothing's going to happen if you keep sitting here besides you slowly turning to ice.
You grab your notebook, your purse, and your winter coat. You notice it still has the tags
on it. You reach for the <List expansions={[["door handle"], ["door handle"]]} tag="c1-doorhandle" />.
</p>
</section>,

<section>
<p>
  You're in front of a squat brick building. No other cars are in the lot
besides yours, which makes sense, as you can now see that you're parked on the quad
and ran over quite a few shrubs.
</p>
<p>
  There's an imposing wooden door which is marked by a <List
expansions={[["plaque"], ['plaque which reads, "English Department"'], ['plaque which reads, "English Department"']]}
tag="c1-plaque"
onComplete={showCard}
/> and lit by a yellowish bulb.
</p>
</section>,
<section>
  <p>
    Finally, some luck.
  </p>
</section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}

const showCard = function(sel, tag) {
  if (tag === 'c1-plaque') {
    alert(`You prefer "literature" to "English", but early career Marxist historians take what they can get.`)
  }

}

const Card = ({tag}) => {
  <div className="notecard">
    Book information
  </div>
}
