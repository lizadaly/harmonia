const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, ManyMap, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'
import * as actions from '../actions'
import ListCard from '../components/listCard'
import Reader  from '../components/reader'
import { docs } from '../docs'

export default ({currentSection, inventory, cards}) => {
  const sections = [
    <section className="credits">
      <h2>Credits</h2>
      <p>
        Story and programming by <a href="https://lizadaly.com/">Liza Daly</a>.
      </p>
      <p>
        Hand-drawn illustrations and cover by <a href="https://www.seaheff.com/">Seamus Heffernan</a>.
      </p>
      <p>
        Decorative ornaments by <a href="https://www.waldenfont.com/">The Walden Font Co.</a>
      </p>
      <h2>Acknowledgments</h2>
      <p>
        Thank you to Dan Schmidt and Stephen Granade for story feedback and testing.
      </p>
      <h2>Bibliography</h2>
      <p>
        I owe a debt to <a href="http://www.penguinrandomhouse.com/books/220839/paradise-now-by-chris-jennings/9780812983890/">Paradise Now:
        The Story of American Utopianism</a> by Chris Jennings, a hugely entertaining account of five 19th century utopian experiments.
      </p>
      <p>
        Also valuable were <i>The Utopian Novel in America</i>, Pfaelzer (1984);  <i>Utopian and Science Fiction by Women</i>, Donawerth & Kolmerten (1994);
        and  <i>The Cambridge Companion to Utopian Literature</i>, Claeys (2010).
      </p>

      <p>
        Primary source materials including both book excerpts and epigraphs were often edited for clarity and brevity:

      </p>
      <div>
        <p><ListCard expansions={["The Republic of the Future"]}
          tag="c-republic"
          card={<span>Technically a dystopian novel, which is probably why
            it’s my favorite of the bunch. An obvious predecessor to <i>1984</i>.
          </span>} />, Anna Bowman Dodd (1887) <a className="link" href="https://archive.org/stream/republicfutureo00doddgoog">text</a>
        </p>
        <p>
          A Divided Republic, Lillie Blake (1887)
        </p>
        <p><ListCard expansions={["Unveiling a Parallel"]}
          tag="c-parallel"
          card={<span>19th century ladyporn:
            “I neared my journey’s end, when the planet’s pink envelope interposed its soft resistance…
            the sensation was the most ecstatic I have ever experienced.”
          </span>} />,
          Alice Ilgenfritz Jones & Ella Merchant (1893) <a className="link" href="http://www.sacred-texts.com/wmn/uap/index.htm">text</a>
        </p>
        <p>
          <ListCard expansions={["Transcendental Wild Oats"]}
            tag="c-oats"
            card={<span>Satirical short story modeled after her year at Fruitlands,
            one of the most hapless utopian experiments.</span>} />, Louisa May Alcott (1873) <a className="link" href="https://public.wsu.edu/~campbelld/engl368/transoats.pdf">pdf</a>
        </p>
        <p>
          The Blazing World, Margaret Lucas Cavendish (1666)
        </p>
        <p>
          <ListCard expansions={["Arqtiq"]}
            tag="c-arqtiq"
            card={<span>This novel is totally bananas and reads like the output of a neural net.
            </span>} />, Anna Adolph (1899) <a className="link" href="https://archive.org/details/DocFeb0620171225">text</a>
        </p>
        <p>
          <ListCard expansions={["Mizora: A Prophesy"]}
            tag="c-mizora"
            card={<span>Well-written for the most part, but extremely racist; be warned.</span>} />, by Mary E. Bradley (1889) <a className="link" href="http://www.gutenberg.org/files/24750/24750-h/24750-h.htm">text</a>

        </p>
        <p>
          A Description of Millenium Hall [sic], Sarah Scott (1762)
        </p>
        <p>
          <ListCard expansions={["Moving the Mountain"]}
            tag="c-moving"
            card={<span>You’ll never believe this, but the
              story begins with a guy falling into a hole.
            </span>}/>, Charlotte Perkins Gilman (1911) <a className="link" href="https://ebooks.adelaide.edu.au/g/gilman/charlotte_perkins/moving/">text</a>

        </p>

      </div>

      <p>
        The Harmonians’ newspaper is based on the <a href="http://www.iapsop.com/archive/materials/harbinger/">The Harbinger</a>,
        produced at Brook Farm, and <a href="https://babel.hathitrust.org/cgi/pt?id=nyp.33433003156373;view=1up;seq=7">The Circular</a>,
        produced by the Oneida Community. Some of the newspaper text in this story is taken near-verbatim from The Circular.

      </p>
      <footer>
        <figure>
          <img src="images/cover-full.png" alt="A torn old postcard featuring a large wooden building, the word Harmonia written across the card" />
        </figure>
      </footer>
      <p style={{textAlign: "center"}}>
        <small>Copyright 2017 Liza Daly</small>
      </p>

    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
