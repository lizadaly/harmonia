export const CARD_CREATED = "CARD_CREATED"
export const LINE_CREATED = "LINE_CREATED"

export const cardCreated = (tag) => {
  return {
    type: CARD_CREATED,
    tag
  }
}

export const lineCreated = (tag) => {
  return {
    type: LINE_CREATED,
    tag
  }
}
