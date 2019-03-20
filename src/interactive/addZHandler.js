import { PHONE_UP, PHONE_DOWN } from './CONFIG'
import { recalculateCardsState } from './actions/recalculateCardsState'

const cards = document.getElementsByClassName('card')

const applyZ = card => () => recalculateCardsState(card.id)

const applyAll = () => {
  for (const card of cards) {
    card.onmousedown = applyZ(card)
  }
}

export const addZhandler = () => {
  if (window.innerWidth > PHONE_DOWN) {
    applyAll()
  } else {
    window.matchMedia(`(min-width: ${PHONE_UP}px)`).addListener(e => {
      if (e.matches) {
        applyAll()
      }
    })
  }
}
