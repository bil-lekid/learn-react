import React from "react";
import gaben from "./gaben_PP.png";

const Logo = ({ width = "100%" }) => {
  return <img style={{ width }} src={gaben} alt="logo" />;
};

export default Logo;
