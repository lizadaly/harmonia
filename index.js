const React = require('react')
import config from './story.json'
import {Map, Game, startGame} from 'windrift'
import { cards } from './reducers'


function start() {
  var chaptersList = require.context('./chapters', true, /\.js$/)
  var game = <ArchiveGame chaptersList={chaptersList} config={config} />
  var reducers = { cards }
  var store = startGame(game, reducers)
}

document.addEventListener('DOMContentLoaded', function () {
  start()
})



class ArchiveGame extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="row">
      <div className="columns medium-8 small-12">
        <Game chaptersList={this.props.chaptersList} config={this.props.config}/>
      </div>
      <div className="columns medium-3">
      </div>
    </div>

  }
}
