import { combineReducers } from 'redux'
import { CARD_CREATED } from "./actions"

export const cards = (state=[], action) => {
  switch (action.type) {
    case CARD_CREATED:
      var card = {}
      card[action.tag] = true
      return Object.assign({}, state, card)
    default:
      return state
  }
}
