import React from "react";
import "./Topbar.css";
const Topbar = () => {
  return (
    <div className="bar">

      <h1 className="title">
        {" "}
         Manager
      </h1>
      <h3 className="title-c">
        <a
          href="https://denebunu.com/contact/"
          target="_blank"
          rel="noreferrer"
          className="title-c"
        >
          Contact Us
        </a>{" "}
      </h3>
    </div>
  );
};

export default Topbar;
