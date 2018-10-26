 import { createStore, combineReducers, applyMiddleware } from "redux";
import { colors } from "./reducers";

const stateData = {
  colors: [
    {
      id: "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
      title: "Ocean Blue",
      color: "#0070ff",
      rating: 3,
      timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
    },
    {
      id: "f9005b4e-975e-433d-a646-79df172e1dbb",
      title: "Tomato",
      color: "#d10012",
      rating: 2,
      timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
    },
    {
      id: "58d9caee-6ea6-4d7b-9984-65b145031979",
      title: "Lawn",
      color: "#67bf4f",
      rating: 1,
      timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
    },
    {
      id: "a5685c39-6bdc-4727-9188-6c9a00bf7f95",
      title: "Party Pink",
      color: "#ff00f7",
      rating: 5,
      timestamp: "Wed Mar 9 2016 03:26:00 GMT-0800 (PST)"
    }
  ]
};

const logger = store => next => action => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log("prev state", store.getState());
  console.log("action", action);
  result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const saver = store => next => action => {
  let result = next(action);
  localStorage["redux-store"] = JSON.stringify(store.getState());
  return result;
};

const storeFactory =  (initialState = stateData) => {
  return applyMiddleware(logger, saver)(createStore)(
    combineReducers({ colors }),
    localStorage["redux-store"]
      ? JSON.parse(localStorage["redux-store"])
      : initialState 
  );
};
 
export default storeFactory;
