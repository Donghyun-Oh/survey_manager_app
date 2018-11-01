import React, { Component } from "react";

import Header from "./header";
import MainContent from "./mainContent";

const Page = () => {
  return (
    <div className="page-container">
      <Header />
      <MainContent />
    </div>
  );
};
export default Page;