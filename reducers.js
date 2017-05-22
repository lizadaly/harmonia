import { combineReducers } from 'redux'
import CARD_CREATED from "./actions"
import { gameReducers } from 'windrift'

function cards(state=[], action) {
  switch (action.type) {
    case CARD_CREATED:
      return [...state, action.card]
    default:
      return state
  }
}

export const archiveReducers = combineReducers({
  gameReducers
})
