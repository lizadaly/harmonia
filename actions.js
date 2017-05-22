export const CARD_CREATED = "CARD_CREATED"

export const cardCreated = (card) => {
  console.log("Returning ", CARD_CREATED, " with ", card)
  return {
    type: CARD_CREATED,
    card
  }
}
