import React, { Component } from "react";
import * as SurveyJSEditor from "surveyjs-editor";
// import * as SurveyKo from "survey-knockout";
import "surveyjs-editor/surveyeditor.css";

// const surveyJSON = {
//     title: "Tell us, what technologies do you use?", pages: [
//         {
//             name: "page1", questions: [
//                 { type: "radiogroup", choices: ["Yes", "No"], isRequired: true, name: "frameworkUsing", title: "Do you use any front-end framework like Bootstrap?" },
//                 { type: "checkbox", choices: ["Bootstrap", "Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visibleIf: "{frameworkUsing} = 'Yes'" }
//             ]
//         },
//         {
//             name: "page2", questions: [
//                 { type: "radiogroup", choices: ["Yes", "No"], isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
//                 { type: "checkbox", choices: ["AngularJS", "KnockoutJS", "React"], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" }]
//         },
//         {
//             name: "page3", questions: [
//                 { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" }]
//         }
//     ]
// };
// const sendDataToServer = () => {
//     console.log("sendDataToServer");
// }
// const SurveyWrite = ({}) => {
//     return (
//         <div id="surveyEditorContainer"></div>
//     )
// }

class SurveyEditor extends Component {
  constructor(props) {
    super(props);
    this.saveMySurvey = this.saveMySurvey.bind(this);
  }
  componentDidMount() {
    let editorOptions = { showJSONEditorTab: false };
    SurveyJSEditor.editorLocalization.currentLocale = "ko";
    this.editor = new SurveyJSEditor.SurveyEditor(
      "surveyEditorContainer",
      editorOptions
    );
    this.editor.saveSurveyFunc = this.saveMySurvey;
    jQuery(".svd_commercial_container").remove()
  }
  saveMySurvey() {
    console.log(JSON.stringify(this.editor.text));
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

export default SurveyEditor;
