const React = require('react')
import config from './story.json'
import {Map, Game, startGame} from 'windrift'
import { cards } from './reducers'

require('./scss/archive.scss')

function start() {
  // windrift dispatches an undo jump before rehydration whenever history.state holds its counter. That first
  // action initializes the redux-undo slices; without it, autoRehydrate sees them as already modified and skips
  // restoring them, so a new tab would start the story over. A zero counter makes the jump a no-op.
  if (!history.state) {
    history.replaceState({ [config.identifier]: 0 }, '')
  }
  var chaptersList = require.context('./chapters', true, /\.js$/)
  var game = <Game chaptersList={chaptersList} config={config} />
  var reducers = { cards }
  startGame(game, reducers)
}

const toggleAbout = (e) => {
  e.preventDefault()
  document.getElementById('about-modal').classList.toggle('open')
  document.getElementById('about-toggle').classList.toggle('open')
}

document.addEventListener('DOMContentLoaded', function () {
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (isChrome) {
    document.body.classList.add("squiggle")
  }
  // Nav handlers live here rather than inline in template.hbs so the CSP needs no 'unsafe-inline' scripts
  document.getElementById('about-toggle').addEventListener('click', toggleAbout)
  document.querySelector('#about-modal .close a').addEventListener('click', toggleAbout)
  // windrift sets window.resetGame but doesn't export it
  document.getElementById('restart').addEventListener('click', window.resetGame)
  start()
})
