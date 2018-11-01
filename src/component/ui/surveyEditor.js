import React, { Component } from "react";
import {connect} from 'react-redux'
import * as SurveyJSEditor from "surveyjs-editor";
import axios from "axios";

import "surveyjs-editor/surveyeditor.css";

class SurveyEditorUI extends Component {
  constructor(props) {
    super(props);
    this.saveSurvey = this.saveSurvey.bind(this);
    this.loadSurvey = this.loadSurvey.bind(this);
    this.surveyid = this.props.match.params.id
  }
  componentDidMount() {
    SurveyJSEditor.editorLocalization.currentLocale = "ko";
    this.editor = new SurveyJSEditor.SurveyEditor(
      "surveyEditorContainer",
      { showJSONEditorTab: false, 
        //showEmbededSurveyTab:false, 
        showPropertyGrid:false }
    );
    this.editor.saveSurveyFunc = this.saveSurvey;
    jQuery(".svd_commercial_container").remove();
    
    if(this.surveyid){
      console.log("loadsurvey");
      this.loadSurvey()
    }
  }
  loadSurvey(){
    axios.get("/surveys/"+this.surveyid)
    .then(response => {
      console.log(response.data);
      // this.setState({
      //   surveys : response.data
      // })
      //this.editor.loadSurvey(response.data["내용"]);
      this.editor.text = response.data["내용"]
    })
    .catch(response => {
      console.log(response);
    });
  }
  saveSurvey() {
    let bizCode = ""
    let userid = this.props.userinfo["사용자ID"]
    let yyyymm = ""
    let seq = ""
    if(this.surveyid){
      let code = this.surveyid.split("-")
      bizCode = code[0]
      yyyymm =  code[1]
      seq =  code[2]
    }else{
      bizCode = this.props.userinfo["사업부"]
      let date = new Date();
      let year = date.getFullYear()
      let month = date.getMonth() + 1;
      if (month < 10) {
        yyyymm = ""+ year + "0" + month
      }else{
        yyyymm = ""+ year + month
      }
    }
    axios.post("/surveys/new", {
        "사용자ID" : userid,
        "사업부" : bizCode,
        "년월" : yyyymm,
        "순번" : seq,
        "surveyJSON": this.editor.text
      })
      .then(response => {
        //console.log(response.data);
        this.props.history.push('/surveys')
      })
      .catch(response => {
        console.log(response);
      });
  }
  render() {
    return (
      <div className="main-content">
        <div className="container-fluid">
          <h2 className="main-content-title">설문조사등록</h2>
          <div id="surveyEditorContainer" />
        </div>
      </div>
    );
  }
}

export const SurveyEditor = connect(
  (state) => {
    return ({
      userinfo : {...state.userinfo}
    })
  },
  null
)(SurveyEditorUI)

export default SurveyEditor;
