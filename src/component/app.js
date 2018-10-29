import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Login from "./ui/login";
import { SidebarContainer } from "./container";
import Page from "./ui/page";

// const App = () => {
//   return (
//     <div className="page-wrapper">
//       <SidebarContainer />
//       <Page />
//     </div>
//   );
// };

// class App extends Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     console.log(store.getState().userinfo.userid )
//     return(
//       <Login />
//     )
//   }
// }
// const App = () => {
//   return <div>app</div>;
// };

// class Index extends Component {
//   componentWillUpdate() {
//     console.log("componentWillUpdate");
//   }
//   render() {
//     console.log(store.getState());
//     console.log(store.getState().userinfo.userid );
//     if(!store.getState().userinfo.userid){
//       return <Login />
//     }
//     return <div>app</div>
//   }
// }

const AppComponent = ({userinfo}) => {
  if(!userinfo.userid){
    return <Login />
  }else{
    return <div>app</div>
  }
}
const App = connect(
  (state) => {
    return ({
      userinfo : {...state.userinfo}

    })
  },
  null
)(AppComponent)

export default App;
