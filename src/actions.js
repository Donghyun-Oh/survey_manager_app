import CONST from "./constants";
import { v4 } from "uuid";

export const toggleMenu = (id) => {
  return {
    type : CONST.TOGGLE_MENU,
    id
  }
}


export const nextPage = (pageNum) => {
  return {}
}

