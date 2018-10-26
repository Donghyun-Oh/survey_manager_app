import CONST from "../constants"

export const menu = (state = {}, action) => {
  switch (action.type) {
    case CONST.TOGGLE_MENU:
      return state.id !== action.id
        ? state
        : { ...state, active: !state.active }
    default:
      return state
  }
}

export const menus = (state=[], action) => {
  switch (action.type) {
    case CONST.TOGGLE_MENU:
      return state.map(m => menu(m, action));
    default:
      return state
  }
}

