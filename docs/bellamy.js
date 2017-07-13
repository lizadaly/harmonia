const React = require('react')
import { List } from 'windrift'
import ListCard from '../components/listCard'


const bellamy = ({nextDoc, prevDoc}) => {

  return <div>
        <p>
          There was a rustle of garments and I opened my eyes. A fine looking man of perhaps sixty was bending over me. He was an utter stranger. I raised myself on an elbow and looked around the room. I certainly had never been in it before, or one furnished like it. "Where am I?" I demanded.
        </p>
        <p>
          "You have just been roused from a <ListCard author="lynn"
            tag="bel1-sleep"
            expansions={["deep sleep"]}
            card={<span>This theme of sleeping and
            reawakening will occur frequently. <ListCard tag="bel1-card"
                forceDir="down"
                expansions={["Remind students!!"]}
                card={<span>Lynn's note to himself was scribbled in the page margin.
                  There were <List tag="bel1-pages"
                    expansions={[["two more pages"], ["two more pages"]]}
                    onComplete={nextDoc}
                    nextUnit="none"
                     /> beneath this photocopy from the book.

                </span>} /> </span>}
          /> or, more properly, trance. May I ask you when you went to sleep?"
        </p>
        <p>
        "Why, last evening, of course, at about ten o'clock. I left my man Sawyer orders to call me at nine o'clock. What has become of Sawyer?"
      </p>
      <p>

        "I can't precisely tell you that," replied my companion, regarding me with a curious expression, "but I am sure that he is excusable for not being here. And now can you tell me a little more explicitly when it was that you fell into that sleep, the date, I mean?"
    </p>
    <p>
        "Why, last night, of course; I said so, didn't I? that is, unless I have overslept an entire day. Great heavens! that cannot be possible; and yet I have an odd sensation of having slept a long time. It was Monday, May 30th."
    </p>

    <p>
        "May I ask of what year?"
    </p>
    <p>
        I stared blankly at him, incapable of speech, for some moments.  "It was the year 1887," I said.
    </p>
    <p>
        "My dear sir," he said, "that you should be startled by what I shall tell you is to be expected; but I am confident that you will not permit it to affect your equanimity unduly. Your appearance is that of a young man of barely thirty, and your bodily condition seems not greatly different from that of one just roused from a somewhat too long and profound sleep, and yet this is the tenth day of September in the year 2000, and you have slept exactly one hundred and thirteen years, three months, and eleven days."
      </p>
  </div>
}
export default bellamy
