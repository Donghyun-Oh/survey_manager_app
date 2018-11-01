import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import "../../../stylesheets/surveyList.css";

class SurveyListUI extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.loadSurvey = this.loadSurvey.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
    this.onPreviewClick = this.onPreviewClick.bind(this);
    this.onResultViewClick = this.onResultViewClick.bind(this);
    this.state = {
      surveys : []
    }
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.loadSurvey()
  }
  loadSurvey(){
    console.log("loadSurvey");
    axios.get("/surveys")
      .then(response => {
        console.log(response.data);
        this.setState({
          surveys : response.data
        })
      })
      .catch(response => {
        console.log(response);
      });
  }
  
  onRowClick(e, surveyid) {
    e.preventDefault();
    console.log("row click")
    this.props.history.push('/surveys/'+surveyid)
  }
  onPreviewClick(e, surveyid) {
    e.preventDefault();
    window.open('/survey.html?surveyid='+surveyid);
  }
  onResultViewClick(e, surveyid) {
    e.preventDefault();
    this.props.history.push('/surveys/'+surveyid+'/result')
  }
  render() {
    return (
      <div className="main-content">
        <div className="container-fluid">
          <h2 className="main-content-title">설문조사등록현황</h2>
          <div>

          </div>
          <div className="table-responsive table-wrap">
            <table className="table table-borderless table-striped table-notice">
              <thead>
                <tr>
                  <th>설문ID</th>
                  <th>설문명</th>
                  <th>시작일자</th>
                  <th>종료일자</th>
                  <th>등록자</th>
                  <th>등록일자</th>
                  <th>미리보기</th>
                </tr>
              </thead>
              <tbody>
                {this.state.surveys.length === 0 ? (
                  <tr>
                    <td>설문내역이 없습니다.</td>
                  </tr>
                ) : (
                  this.state.surveys.map(survey => {
                    return (
                      <tr key={survey.id} onClick={(e)=> this.onRowClick(e, survey["사업부"]+"-"+survey["년월"]+"-"+survey["순번"])}>
                        <td className="text-center">{survey["사업부"]+"-"+survey["년월"]+"-"+survey["순번"]}</td>
                        <td className="text-left">{survey["제목"]}</td>
                        <td className="text-center">{survey["시작일자"]}</td>
                        <td className="text-center">{survey["종료일자"]}</td>
                        <td className="text-center">{survey["작성자"]}</td>
                        <td className="text-center">{survey["등록일자"]}</td>
                        <td className="text-center"><button className="btn btn-outline-success btn-sm" 
                          onClick={(e)=> this.onPreviewClick(e, survey["사업부"]+"-"+survey["년월"]+"-"+survey["순번"])}>미리보기</button>
                        </td>
                        {/* <td className="text-center"><button className="btn btn-outline-success btn-sm" 
                          onClick={(e)=> this.onResultViewClick(e, survey["사업부"]+"-"+survey["년월"]+"-"+survey["순번"])}>결과보기</button>
                        </td> */}
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export const SurveyList = connect(
  (state) => {
    return ({
      userinfo : {...state.userinfo}
    })
  },
  null
)(SurveyListUI);

export default SurveyList;
