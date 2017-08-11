import undoable from 'redux-undo'

import { CARD_CREATED, LINE_CREATED } from "./actions"

const _cards = (state={}, action) => {
  switch (action.type) {
    case CARD_CREATED:
      let card = {}
      card[action.tag] = true
      return Object.assign({}, state, card)
    default:
      return state
  }
}

const _lines = (state={}, action) => {
  switch (action.type) {
    case LINE_CREATED:
      let line = {}
      line[action.tag] = true
      return Object.assign({}, state, line)
    default:
      return state
  }
}

export const cards = undoable(_cards)
export const lines = undoable(_lines)
