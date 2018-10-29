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

export const survey = (state={}, action) => {
  switch (action.type) {
    default :
      return state
  }
}
export const surveys = (state=[], action) => {
  switch (action.type) {
    default :
      return state
  }
}

export const userinfo = (state={}, action) => {
  switch (action.type) {
    case CONST.LOG_IN:
      //return Object.keys(action).filter( key => key != 'type')
      console.log(state)
      return action.userinfo
    case CONST.LOG_OUT:
      return {}
    default :
      return {}
  }
}

