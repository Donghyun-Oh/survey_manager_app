import React, { Component } from "react";

import NoticeList from "./noticeList"

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <NoticeList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
//https://colorlib.com/polygon/cooladmin/index.html
