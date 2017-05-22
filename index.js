const React = require('react')
import config from './story.json'
import {Map, Game, startGame} from 'windrift'
import {archiveReducers} from './reducers'

import { gameReducers } from 'windrift'


function start() {
  var chaptersList = require.context('./chapters', true, /\.js$/)
  var game = <Game chaptersList={chaptersList} config={config}/>
  startGame(game, gameReducers)
}

document.addEventListener('DOMContentLoaded', function () {
  start()
})
