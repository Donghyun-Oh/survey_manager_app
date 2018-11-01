import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { login } from "../../actions";

import "../../../stylesheets/login.css";

const LoginUI = ({userinfo={}, userLogin=f=>f, userLogout=f=>f}) => {
  let input_userid, input_userpw
  const loginButtonClick = function(e, t) {
    e.preventDefault()
    //userLogin({"사용자ID":input_userid.value, "사업부" : "M"});

    axios.post("/users/login", {
      "사용자ID": input_userid.value,
      "비밀번호": input_userpw.value
    })
    .then(response => {
      console.log(response);
      userLogin({...response.data});
    })
    .catch(response => {
      console.log(response);
    });
    
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
                      type="password"
                      name="user_pw"
                      placeholder="패스워드"
                      ref={input=>input_userpw=input}
                    />
                  </div>
                  <button
                    className="login-btn login-btn-block login-btn-green"
                    onClick={(e)=>loginButtonClick(e)}>
                    로그인
                  </button>
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
)(LoginUI)

export default Login;
