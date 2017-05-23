import { combineReducers } from 'redux'
import { CARD_CREATED } from "./actions"

export const cards = (state=[], action) => {
  switch (action.type) {
    case CARD_CREATED:
      return [...state, action.tag]
    default:
      return state
  }
}
