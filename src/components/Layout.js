import React from "react";
import UpperHeader from "./Headers/UpperHeader";
import Header from "./Headers/Header";
import Home from "./Content/Home";

const Layout = () => {
  return (
    <div>
      <UpperHeader />
      <Header />
      <Home />
    </div>
  );
};

export default Layout;
