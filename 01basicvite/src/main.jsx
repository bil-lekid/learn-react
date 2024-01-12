import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Youtube from "./youtube.jsx";

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:"_blank"},
  'click to visit google'
)


const AnotherElement = (
  <a href="https://google.com" target="_blank">click to visit google</a>
)

ReactDOM.createRoot(document.getElementById("root")).render(
  ReactElement
);
