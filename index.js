const React = require('react')
import config from './story.json'
import {Map, Game, startGame} from 'windrift'
import { cards } from './reducers'

require('./scss/archive.scss')

function start() {
  var chaptersList = require.context('./chapters', true, /\.js$/)
  var game = <Game chaptersList={chaptersList} config={config} />
  var reducers = { cards }
  startGame(game, reducers)
}

document.addEventListener('DOMContentLoaded', function () {
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (isChrome) {
    document.body.classList.add("squiggle")
  }
  start()
})
