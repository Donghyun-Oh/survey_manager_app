import CONST from "./constants";
import { v4 } from "uuid";

export const toggleMenu = (id) => {
  return {
    type : CONST.TOGGLE_MENU,
    id
  }
}

export const login = (userinfo) => {
  return {
    type : CONST.LOG_IN,
    userinfo
  }
}

export const logout = () => {
  return {
    type : CONST.LOG_OUT
  }
}

export const nextPage = (pageNum) => {
  return {}
}

