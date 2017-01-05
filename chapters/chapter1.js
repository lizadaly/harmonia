const React = require('react')
import { Map, List, RenderSection, FromInventory, NextChapter, AllButSelection} from 'windrift'



export default ({currentSection, inventory}) => {
  const books = {
    age: <p>"<i>A Crystal Age</i> is by W. H. Hudson and was written in 1887. It's about a
          man who awakes in the future among a utopian community that has given up
          romantic love and attachment."
          </p>,
    backward: <p>"<i>Looking Backward</i> was written in 1888 by Edward Bellamy.
    It is the story of a man who falls into a trance in a kind of fallout shelter
    and wakes up in the year 2000. Bellamy uses the framing story to explore his
    ideas about a perfect society."</p>
  }
  const sections = [
    <section>
      <p>
      "Good morning class," you say, still out of breath and already sweating. You haven't yet
      taken off your coat, and the radiator behind you is banging and boiling.
      You shrug out of the coat and it falls to the floor; you notice that you forgot to
      take off the tags. When you bend over
      to pick it up, you bang your head against the chalk tray. The students titter.
      "You can call me Margaret, Margaret Cohen."
      </p>
      <p>
        A blonde girl in the front row with perfectly ironed hair raises her hand
        with military precision. "Professor Cohen, where is Professor West?"
      </p>
      <p>

        "Professor
        West is on indefinite leave," you say curtly.
        "And please just call me Margaret." You're just a postdoc, though this doesn't seem like the time to mention that.
        Your tone forestalls further questions, which is a relief since
        honestly that's all you know.
      </p>
      <p>You were hoping to join West's research group, not
        take over his class load, but early-career Marxist historians take what
        they can get. When the university called with the unexpected job offer,
        you drove your shuddering VW Bug
        nonstop from Ft. Lauderdale to Vermont. A few hours of fishtailing
        over icy rural roads and you ended up here, at St. Isidore's—four weeks into
        the winter semester and no time to prepare. You'd never even seen snow until this morning.
      </p>
      <p>
        "So, this is Histories of the Future: Utopias and Romanticism in 19th Century Literature,"
        you say, stalling for time. Someone coughs. "I'm familiar with the syllabus, but can
        someone, uh, remind me: have you covered <List expansions={[["Looking Backward", "A Crystal Age"], ["Looking Backward", "A Crystal Age"]]} conjunction="or" tag="c1_novels"/>?
      </p>
    </section>,
    <section>
      <p>
        <Map from={inventory.c1_novels} to={{
          _any: 'A relaxed student in the front row says, "Yeah."'
        }} />
      </p>
      <p>
        "And your thoughts on it, young man?" You're probably no more than five years older than
        him but never mind that.
      </p>
      <p>
        He looks surprised by the followup; maybe Professor West wasn't one for Socratic dialogue.
        <Map from={inventory.c1_novels} to={{
          backward: ` "It's about a guy who goes to sleep and wakes up in the future?"`,
          age: ` "It's about some guy who falls asleep in a hole and wakes up in a cult?"`
        }} />
      </p>
      <p>
        "Yes, that's—basically right. Does anyone want to <List expansions={[
          ["expand on that",
          "tell me about " + ["Looking Backward", "A Crystal Age"].filter((item) =>
            inventory.c1_novels != item
          )[0]]
          , "_last"]
        }
        conjunction="or"
        tag="c1_expand"/>?"
      </p>
    </section>,
    <section>
      <Map from={inventory.c1_expand} to={{
        that: <div>
            <p>The woman with the straight hair puts her hand up again, and again
              doesn't wait for you to call on her.</p>
              <Map from={inventory.c1_novels} to={books} />
            </div>,
      "_any": <div>
        <p>A student towards the back raises his hand politely. You call on him.</p>
        <Map from={["Looking Backward", "A Crystal Age"].filter((item) =>
          inventory.c1_novels != item
        )[0]} to={books} />
      </div>
      }} />
      <p>
        You nod. "Very good."
        <Map from={inventory.c1_expand} to={{
          that: <Map from={["Looking Backward", "A Crystal Age"].filter((item) =>
            inventory.c1_novels != item
          )[0]} to={books} />
        }} />
      </p>
    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}

const AllCaps = ({text}) => (
  <FromInventory from={text} onLoad={(text) => text.toUpperCase()} />
)
