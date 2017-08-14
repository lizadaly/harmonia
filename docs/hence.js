const React = require('react')
import { List } from 'windrift'
import ListCard from '../components/listCard'

const hence = () => (
  <div>
    <p>
      The two friends entered the the famous Philadelphia market. Women, dressed in close caps and snow white aprons,
      stood or sat modestly by their baskets – not, as formerly, bawling out to the passers-by and entreating them to
      purchase of them, but waiting for their turn with patience and good humour.
      Their hair was all hidden, save a few plain braids or plaits in front, and their neck was entirely covered.
      Their dress was appropriate to their condition, and their bearing had both dignity and grace.
    </p>
    <p>
      "Well, this surpasses belief," said Hastings. "Are these the descendants of that coarse, vulgar, noisy,
      ill dressed tribe, one half of whom appeared before their dirty baskets and crazy fixtures with tawdry finery,
      and the other half in <ListCard expansions={["sluttish"]}
        nextUnit="section"
        tag="hence-sluttish"
        card={<span>I hesitated about assigning this book (it's awfully racist too) but that's how some many
          people of the period, especially women, regarded the poor.</span>} />, uncouth clothes, with their hair hanging about their face, or stuck up behind
    with a greasy horn comb? What has done all this?"
  </p>
  <p>
    "Why, the improvement which took place in the education of women."
  </p>
  </div>
)

export default hence
