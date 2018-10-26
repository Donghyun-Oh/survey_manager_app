import CONST from "./constants";
import { v4 } from "uuid";


export const rateColor = (id, rating) => {
  return {
    type: CONST.RATE_COLOR,
    id,
    rating
  };
};
