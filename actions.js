export const CARD_CREATED = "CARD_CREATED"

export const cardCreated = (card) => {
  return {
    type: CARD_CREATED,
    card
  }
}
