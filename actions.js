export const CARD_CREATED = "CARD_CREATED"

export const cardCreated = (tag) => {
  return {
    type: CARD_CREATED,
    tag
  }
}
