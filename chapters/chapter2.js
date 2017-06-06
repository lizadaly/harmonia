const React = require('react')
import { connect } from 'react-redux'
import { docs } from '../docs'

import { Map, List, FromInventory, RenderSection, NextChapter, AllButSelection} from 'windrift'

const topics = {
  sleeping: {
    label: "sleeping or waking",
    terms: ["sleep",  "overslept", "slept", "wake", "awoken", "unconscious"],
    docs: [docs.bellamy1, docs.age1]
  }
}

export default ({currentSection, inventory}) => {
  const sections = [
    <Computer inventory={inventory} topic={topics.sleeping} />
  ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}


class Computer extends React.Component {

  constructor(props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this)
    this.changeDoc = this.changeDoc.bind(this)
    this.state = {
      modal: false,
      doc: props.topic.docs[0]
    }
  }
  toggleModal(e) {
    e.preventDefault()
    e.stopPropagation()

    this.setState({
      modal: !this.state.modal
    })
  }
  changeDoc(e, id) {
    e.preventDefault()
    e.stopPropagation()
    // Find a matching doc
    let doc = this.props.topic.docs.filter((d) => d.id === id)[0]
    this.setState({
      doc: doc
    })
  }
  render () {
    return <section className="computer">
      <header>
        <SearchBar topic={this.props.topic} />
        <Help toggleModal={this.toggleModal}/>
      </header>
      <Doc doc={this.state.doc} topic={this.props.topic} modal={this.state.modal}/>
      <footer>
        <h4>Other documents in this collection:</h4>
        <DocsList onChange={this.changeDoc} docs={this.props.topic.docs.filter((doc) =>
            doc != this.state.doc
        )} />
      </footer>
    </section>
  }
}

const DocsList = ({docs, onChange}) => {
  return <ul>{docs.map((doc) => <li key={doc.title}><a onClick={() => onChange(event, doc.id)}>{doc.title}</a></li>)}</ul>
}


class _Doc extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className="doc">
      <div className={'help-modal ' + this.props.modal}>
        This is the help text
      </div>
      <header>
        <h4>{this.props.doc.title} by {this.props.doc.author} ({this.props.doc.year})</h4>
      </header>
      <div className="pages">
        <div className="recto">{this.props.doc.page}</div>
        <div className="verso">{this.props.doc.page + 1}</div>
        <Article text={this.props.doc.text} topic={this.props.topic} />
      </div>

    </div>
  }
}
const mapStateToProps = (state, ownProps) => {
  return {

  }
}
export const Doc = connect(
  mapStateToProps,
  {

  }
)(_Doc)

const SearchBar = ({topic}) => {
  return <h6 className="search-bar">Current topic: <span className="phrase">{topic.label}</span></h6>
}


class Help extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return <div className="search-help">
      <h6><a onClick={this.props.toggleModal}>Help</a></h6>

    </div>

  }


}

const Article = ({text, topic}) => {
  for (var term of topic.terms) {
    text = text.split(term).join('<span class="phrase">' + term + '</span>')
  }
  return <article className="article" dangerouslySetInnerHTML={{__html: text}}></article>

}
