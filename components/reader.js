const React = require('react')
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { showNextSection } from 'windrift'

class _Reader extends React.Component {

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
    return <section className="reader">
      <Doc doc={this.state.doc} modal={this.state.modal}/>
    </section>
  }
  /*
  <footer>
    <h4>Other documents in this collection:</h4>
    <DocsList onChange={this.changeDoc} docs={this.props.topic.docs.filter((doc) =>
        doc != this.state.doc
    )} />
  </footer>
    */
}
_Reader.propTypes = {
  topic: PropTypes.object.isRequired
}

const Reader = connect(
  (state) => { return { } },
  {
    onCompleteSession: showNextSection
  }
)(_Reader)

export default Reader

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
  // Fixme if we keep this
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
    let nextPage = null
    if (this.props.doc.type === 'book') {
      nextPage = this.props.doc.page + 1
    }
    return <div className="doc">

      <div className="reader-container">
        <Pagination dir="prev" page={this.state.page} changePage={() => this.changePage('prev')}/>
        <div className={'pages ' + this.props.doc.id}>
          <div className="recto">
            <span className="page">{this.props.doc.page}</span>
            <span className="title">{this.props.doc.title}</span>
          </div>
          <div className="verso">
            <span className="title">{this.props.doc.author} </span>
            <span className="page">{nextPage}</span>
          </div>
          <Article text={this.props.doc.text} topic={this.props.topic} type={this.props.doc.type} page={this.state.page}/>
        </div>
        <Pagination dir="next" page={this.state.page} changePage={() => this.changePage('next')}/>
      </div>
    </div>
  }
}
const Pagination = ({page, dir, changePage}) => {
//  return <div className={dir}><a onClick={changePage}>{dir}</a></div>
// Note sure if I'll use this
  return null
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


class Article extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cls = "article " + this.props.type
    return <article className={cls}>{this.props.text[this.props.page]}</article>
  }
}
