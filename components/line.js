const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { List } from 'windrift'
import * as actions from '../actions'

import jsPlumb from 'jsPlumb'

var j = jsPlumb.jsPlumb
j.setContainer(document.getElementById("container"))
j.importDefaults({
  ConnectionsDetachable: false
})

/* Generate a List event and an arbitrary line to a selector */
class _Line extends React.Component {

  constructor(props) {
    super(props)
    this.expansions = []
    this.expansions.push(props.expansions)
    this.expansions.push(props.expansions)
  }
  onRender() {
    window.requestAnimationFrame(() => {
      var sourceId = 'source-' + this.props.tag
      var targetId = 'target-' + this.props.tag
      var source = document.getElementById(sourceId)
      var target = document.getElementById(targetId)
      if (source && target) {
        j.connect({
          source: sourceId,
          target: targetId,
          endpoint: "Blank",
          anchor: ["Perimeter", { shape:"Ellipse" } ]
        })
      }
    })
  }
  componentDidUpdate() {
    this.onRender()
  }
  render() {
    return <span>
      <nobr className="link-source" id={'source-' + this.props.tag}>
        <List {...this.props} expansions={this.expansions} onComplete={this.onComplete} />
      </nobr>
    </span>
  }
}
_Line.propTypes = {
  to: PropTypes.string.isRequired,
  endpoint: PropTypes.string
}
_Line.defaultProps = {
  endpoint: "Blank"
}

const mapStateToProps = (state, ownProps, added=false) => {
  if (state.inventory.present.hasOwnProperty(ownProps.tag)) {
    added = true
  }
  return {
    added: added
  }
}

const Line = connect(
  mapStateToProps,
  {
    onAddLine: actions.lineCreated
  }
)(_Line)

export default Line
