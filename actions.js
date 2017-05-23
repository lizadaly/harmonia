export const CARD_CREATED = "CARD_CREATED"

export const cardCreated = (tag, text) => {
  return {
    type: CARD_CREATED,
    tag
  }
}
