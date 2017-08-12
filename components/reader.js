const React = require('react')
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { showNextSection } from 'windrift'

class _Reader extends React.Component {

  constructor(props) {
    super(props)
    this.nextDoc = this.nextDoc.bind(this)
    this.prevDoc = this.prevDoc.bind(this)
    this.state = {
      modal: false,
      currentDoc: 0
    }
  }
  nextDoc() {
    this.setState({
      currentDoc: this.state.currentDoc + 1
    })
  }
  prevDoc() {
    this.setState({
      currentDoc: this.state.currentDoc - 1
    })
  }
  /* FIXME */
  changeDoc(id) {
    // Find a matching doc
    let doc = this.props.topic.docs.filter((d) => d.id === id)[0]

    this.props.onCompleteSession()
    this.setState({
      doc: doc
    })
  }
  render () {
    const doc = this.props.docs[this.state.currentDoc]
    var nextDoc, prevDoc

    if (this.state.currentDoc > 0) {
      prevDoc = this.prevDoc
    }
    if (this.state.currentDoc < this.props.docs.length - 1) {
      nextDoc = this.nextDoc
    }
    return <section className="reader">
      <Doc doc={doc} nextDoc={nextDoc} prevDoc={prevDoc} inventory={this.props.inventory} {...this.props}/>
    </section>
  }
}

_Reader.propTypes = {
  docs: PropTypes.array.isRequired,
  inventory: PropTypes.object.isRequired
}

const Reader = connect(
  (state) => { return { } },
  {
    onCompleteSession: showNextSection
  }
)(_Reader)

class Doc extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let nextPage, nextLink, prevLink
    const cls = "article " + this.props.doc.type
    const Article = this.props.doc.text

    if (this.props.doc.type === 'book') {
      nextPage = this.props.doc.page + 1
    }

    if (this.props.nextDoc) {
      nextLink = <div className="next-link">
        <a onClick={this.props.nextDoc}>Next page</a>
      </div>
    }
    if (this.props.prevDoc) {
      prevLink = <div className="prev-link">
        <a onClick={this.props.prevDoc}>Previous page</a>
      </div>
    }

    return <div className="doc">

      <div className="reader-container">
        <div className={'pages ' + this.props.doc.id}>
          <div className="recto">
            <span className="page">{this.props.doc.page}</span>
            <span className="title">{this.props.doc.title}</span>
          </div>
          <div className="verso">
            <span className="title">{this.props.doc.author} </span>

          </div>

          <article className={cls}>
            {prevLink}
            {nextLink}

            <Article {...this.props} />
          </article>

        </div>
      </div>
    </div>
  }
}
Doc.propTypes = {
  inventory: PropTypes.object.isRequired,
  nextDoc: PropTypes.func,
  prevDoc: PropTypes.func
}


export default Reader
