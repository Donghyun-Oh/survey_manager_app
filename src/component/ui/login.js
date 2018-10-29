import React, { Component } from "react";
import { connect } from "react-redux";

import { login } from "../../actions";

import "../../../stylesheets/login.css";

const LoginComponent = ({userinfo={}, userLogin=f=>f, userLogout=f=>f}) => {
  let input_userid, input_userpw
  const loginButtonClick = function(e, t) {
    e.preventDefault()
    console.log("login");
    
    //로그인체크
    userLogin({userid:input_userid.value});
  }
  return (
    <div className="page-wrapper">
      <div className="login-page-content">
        <div className="container">
          <div className="login-wrap">
            <div className="login-content">
              <div className="login-logo">
                <a href="#">
                  설문조사관리프로그램
                </a>
              </div>
              <div className="login-form">
                  <div className="form-group">
                    <label>아이디</label>
                    <input
                      className="input input-full"
                      name="user_id"
                      placeholder="아이디"
                      ref={input=>input_userid=input}
                    />
                  </div>
                  <div className="form-group">
                    <label>패스워드</label>
                    <input
                      className="input input-full"
                      type="user_pw"
                      name="password"
                      placeholder="패스워드"
                      ref={input=>input_userpw=input}
                    />
                  </div>
                  <button
                    className="login-btn login-btn-block login-btn-green"
                    onClick={(e)=>loginButtonClick(e)}>
                    로그인
                  </button>
                  {userinfo.userid?"ture":"false"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Login = connect(
  (state) => {
    return ({
      userinfo : {...state.userinfo}

    })
  },
  (dispatch) => {
    return({
      userLogin(userinfo){
        dispatch(login(userinfo))
      }
    })
  }
)(LoginComponent)

export default Login;
