import { createStore, combineReducers, applyMiddleware } from "redux";
import { menus, surveys, userinfo } from "./reducers";

const stateData = {
  menus: [
    { id: "A", group: "A", name:"대시보드", icon:"chart-line", order: "1" },
    //{ id: "B", group:"B", name:"설문관리", icon:"copy", order: "2"}
    { id: "B", group:"B", name:"설문관리", icon:"copy", order: "2" , 
       submenus:[
       { id: "B001", group:"B", name: "설문조사등록", order: "1", router:"/surveys/new", programData:{} },
       { id: "B002", group:"B", name: "설문조사등록현황", order: "2", router:"/surveys", programData:{} }
    ]}
  ],
  surveys:[
    {id:"20181001-001", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
    {id:"20181001-002", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
    {id:"20181001-003", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
    {id:"20181001-004", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
    // {id:"20181001-004", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
    // {id:"20181001-005", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
    // {id:"20181001-006", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
    // {id:"20181001-007", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
    // {id:"20181001-008", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
    {id:"20181001-009", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"}
  ],
  userinfo: {}
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
  return applyMiddleware(logger)(createStore)(
    combineReducers({ menus, surveys, userinfo }),
    // localStorage["survey-app-store"]
    //   ? JSON.parse(localStorage["survey-app-store"])
    //   : initialState
    initialState
  );
};

export default storeFactory;
