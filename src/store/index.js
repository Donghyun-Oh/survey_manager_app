import { createStore, combineReducers, applyMiddleware } from "redux";
import { menus } from "./reducers";

const stateData = {
  menus: [
    { id: "A", group: "A", name:"대시보드", icon:"chart-line", order: "1" },
    //{ id: "B", group:"B", name:"설문관리", icon:"copy", order: "2"}
    { id: "B", group:"B", name:"설문관리", icon:"copy", order: "2" , 
       submenus:[
       { id: "B001", group:"B", name: "설문조사등록", order: "1", programData:{} },
       { id: "B002", group:"B", name: "설문조사현황", order: "2", programData:{} }
    ]}
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
  localStorage["survey-app-store"] = JSON.stringify(store.getState());
  return result;
};

const storeFactory = (initialState = stateData) => {
  return applyMiddleware(logger, saver)(createStore)(
    combineReducers({ menus }),
    localStorage["survey-app-store"]
      ? JSON.parse(localStorage["survey-app-store"])
      : initialState
  );
};

export default storeFactory;
