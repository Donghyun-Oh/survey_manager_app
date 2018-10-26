import React, { Component } from "react";

import '../../../stylesheets/notice.css'


const noticesSample = [
  {id:"20181001-001", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
  {id:"20181001-002", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
  {id:"20181001-003", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
  {id:"20181001-004", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
  {id:"20181001-005", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
  {id:"20181001-006", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
  {id:"20181001-007", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
  {id:"20181001-008", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"},
  {id:"20181001-009", name :"임시 설문조사", begindate:"2018-10-01", enddate:"2018-10-30", author:"codechaser", publishdate:"2018-10-01"}
]

const NoticeList = ({notices = []}) => {
  notices = noticesSample
  return (
    <div className="notice-list">
      <h2 className="table-title">설문목록</h2>
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
            </tr>
          </thead>
          <tbody>
            {notices.length === 0 ? (
              <tr><td>설문내역이 없습니다.</td></tr>
            ) : (
                notices.map(notice => {
                  return (
                    <tr key={notice.id}>
                      <td className="text-center">{notice.id}</td>
                      <td className="text-left">{notice.name}</td>
                      <td className="text-center">{notice.begindate}</td>
                      <td className="text-center">{notice.enddate}</td>
                      <td className="text-center">{notice.author}</td>
                      <td className="text-center">{notice.publishdate}</td>
                    </tr>
                  );
                })
              )}
          </tbody>
        </table>
      </div>
    </div>
  )
};
export default NoticeList;