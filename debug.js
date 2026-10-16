/* Development-only panel for jumping to any chapter and section. Jumping resets the story and replays it by
   clicking the newest choice until the target is reached, so inventory is filled in as on the default path. */
import config from './story.json'

const TARGET_KEY = config.identifier + 'debug-target'
const CHAPTERS = 13

const position = () => {
  try {
    const bookmarks = JSON.parse(localStorage.getItem(config.identifier + 'bookmarks')).present
    return { chapter: bookmarks.length, section: bookmarks[bookmarks.length - 1] }
  } catch (e) {
    return { chapter: 1, section: 0 }
  }
}

const reached = (pos, target) =>
  pos.chapter > target.chapter || (pos.chapter === target.chapter && pos.section >= target.section)

// One click per tick leaves redux-persist time to write the new position before it's read again
const replayTo = (target) => {
  let clicked = false
  const timer = setInterval(() => {
    // The credits' link back to the ending choice would restart the replay
    const links = document.querySelectorAll('#article a[href="#"]:not(.restore-checkpoint a)')
    // The story renders after rehydration, so there may be no links yet on the first ticks
    if (!clicked && links.length === 0) {
      return
    }
    if (reached(position(), target) || links.length === 0) {
      clearInterval(timer)
      sessionStorage.removeItem(TARGET_KEY)
      return
    }
    links[links.length - 1].click()
    clicked = true
  }, 60)
}

const jumpTo = (target) => {
  sessionStorage.setItem(TARGET_KEY, JSON.stringify(target))
  Object.keys(localStorage).filter((k) => k.startsWith(config.identifier)).forEach((k) => localStorage.removeItem(k))
  history.replaceState(null, '', location.pathname)
  location.reload()
}

export const startDebug = () => {
  const panel = document.createElement('form')
  panel.id = 'debug-panel'
  panel.style.cssText = 'position:fixed;bottom:8px;right:8px;z-index:1000;padding:6px 8px;background:#ffd;' +
    'border:1px solid #cc9;font:12px/1.6 system-ui,sans-serif'
  const options = Array.from({ length: CHAPTERS }, (_, i) =>
    `<option value="${i + 1}">${i + 1 === CHAPTERS ? 'Credits' : 'Chapter ' + (i + 1)}</option>`).join('')
  panel.innerHTML = `<span class="position"></span> &middot;
    <select name="chapter">${options}</select>
    section <input name="section" type="number" min="0" value="0" style="width:3.5em">
    <button>Jump</button>`
  document.body.appendChild(panel)

  const label = panel.querySelector('.position')
  const update = () => {
    const pos = position()
    label.textContent = `Ch ${pos.chapter}, section ${pos.section}`
  }
  update()
  setInterval(update, 500)
  panel.addEventListener('submit', (e) => {
    e.preventDefault()
    jumpTo({ chapter: +panel.chapter.value, section: +panel.section.value })
  })

  const pending = JSON.parse(sessionStorage.getItem(TARGET_KEY))
  const initial = pending || position()
  panel.chapter.value = initial.chapter
  panel.section.value = initial.section
  if (pending) {
    replayTo(pending)
  }
}
