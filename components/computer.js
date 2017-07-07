const React = require('react')
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { showNextSection } from 'windrift'

import jsxToString from 'jsx-to-string'


class _Computer extends React.Component {

  constructor(props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this)
    this.changeDoc = this.changeDoc.bind(this)
    this.state = {
      modal: false,
      doc: props.topic.docs[0]
    }
  }
  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }
  changeDoc(id) {
    // Find a matching doc
    let doc = this.props.topic.docs.filter((d) => d.id === id)[0]
    this.props.onCompleteSession()
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
_Computer.propTypes = {
  topic: PropTypes.object.isRequired
}

const Computer = connect(
  (state) => { return { } },
  {
    onCompleteSession: showNextSection
  }
)(_Computer)

export default Computer

const DocsList = ({docs, onChange}) => {
  return <ul>{docs.map((doc) => <li key={doc.title}><a onClick={() => onChange(doc.id)}>{doc.title}</a></li>)}</ul>
}

class _Doc extends React.Component {
  constructor(props) {
    super(props)
    this.changePage = this.changePage.bind(this)
    this.state = {
      page: 0
    }
  }
  changePage(dir) {
    let page = this.state.page
    if (dir === 'prev') {
      page = page - 1
    }
    else {
      page = page + 1
    }
    console.log(dir)
    this.setState({
      page: page
    })
  }
  render() {
    return <div className="doc">
      <div className={'help-modal ' + this.props.modal}>
        This is the help text
      </div>
      <header>
        <h4>{this.props.doc.title} by {this.props.doc.author} ({this.props.doc.year})</h4>
      </header>

      <div className="reader">
        <Pagination dir="prev" page={this.state.page} changePage={() => this.changePage('prev')}/>
        <div className={'pages ' + this.props.doc.id}>
          <div className="recto">{this.props.doc.page}</div>
          <div className="verso">{this.props.doc.page + 1}</div>
          <Article text={this.props.doc.text} topic={this.props.topic} page={this.state.page}/>
        </div>
        <Pagination dir="next" page={this.state.page} changePage={() => this.changePage('next')}/>
      </div>
    </div>
  }
}
const Pagination = ({page, dir, changePage}) => {
  return <div className={dir}><a onClick={changePage}>{dir}</a></div>
}

const mapStateToProps = (state, ownProps) => {
  return {}
}
export const Doc = connect(
  mapStateToProps,
  {}
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

class Article extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var text = jsxToString(this.props.text[this.props.page])
    for (var term of this.props.topic.terms) {
      text = text.split(term).join('<span class="phrase">' + term + '</span>')
    }
    return <article className="article" dangerouslySetInnerHTML={{__html: text}}></article>
  }
}
