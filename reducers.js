import undoable from 'redux-undo'

import { CARD_CREATED } from "./actions"

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

export const cards = undoable(_cards)
