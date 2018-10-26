import CONST from "../constants"

export const color = (state = {}, action) => {
  switch (action.type) {
    case CONST.RATE_COLOR:
      return state.id !== action.id
        ? state
        : { ...state, rating: action.rating }
    default:
      return state
  }
};

export const colors = (state = [], action) => {
  switch (action.type) {
    case CONST.RATE_COLOR:
      return state.map(c => color(c, action));
    default:
      return state
  }
};
