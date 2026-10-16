const React = require('react')
import config from '../story.json'

// Snapshots of the persisted game live outside redux-persist's key prefix so they aren't rehydrated as state.
// Restarting the story (localStorage.clear()) discards them.
const CHECKPOINT_KEY = config.identifier.replace(/-$/, '') + ':checkpoint'
// Set by RestoreLink so the reloaded page scrolls to the choice instead of the top of the chapter
const SCROLL_KEY = config.identifier.replace(/-$/, '') + ':scroll-to-checkpoint'

const persistedKeys = () => Object.keys(localStorage).filter((k) => k.startsWith(config.identifier))

const saveCheckpoint = () => {
  try {
    localStorage.setItem(CHECKPOINT_KEY, JSON.stringify(persistedKeys().map((k) => [k, localStorage.getItem(k)])))
  } catch (e) {}
}

const readCheckpoint = () => {
  try {
    return JSON.parse(localStorage.getItem(CHECKPOINT_KEY))
  } catch (e) {
    return null
  }
}

const scrollToRestored = (el) => {
  try {
    if (!el || !sessionStorage.getItem(SCROLL_KEY)) {
      return
    }
    sessionStorage.removeItem(SCROLL_KEY)
  } catch (e) {
    return
  }
  const scroll = () => el.scrollIntoView({ block: 'center' })
  scroll()
  // Images above the choice may still be loading and push it down
  if (document.readyState !== 'complete') {
    window.addEventListener('load', scroll, { once: true })
  }
}

/* Saves the game just before any choice inside it is clicked */
export const Checkpoint = ({ children }) =>
  <span ref={scrollToRestored} onClickCapture={saveCheckpoint}>{children}</span>

export const hasCheckpoint = () => readCheckpoint() !== null

/* A link that restores the saved checkpoint */
export const RestoreLink = ({ children }) => {
  const restore = (e) => {
    e.preventDefault()
    const checkpoint = readCheckpoint()
    persistedKeys().forEach((k) => localStorage.removeItem(k))
    checkpoint.forEach(([k, v]) => localStorage.setItem(k, v))
    sessionStorage.setItem(SCROLL_KEY, '1')
    // Windrift jumps to the undo position recorded in history.state on load; start clean instead
    history.replaceState(null, '', location.pathname)
    location.reload()
  }
  return <a href="#" onClick={restore}>{children}</a>
}
