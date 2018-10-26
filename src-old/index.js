import React from 'react'
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'

import App from "./component/app"
import storeFactory from "./store"
 
const store = storeFactory();
//컨테이너
/*
ReactDOM.render(
  <div>
    <App store={store} />
  </div>,
  document.getElementById("react-container")
) 
*/

//react-redux
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
) 