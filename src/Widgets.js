import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widgets-articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets-articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>Groups</h2>
        <InfoIcon />
      </div>

      {newsArticle("React Developers - ReactJS & React Native Professional Development Mastermind", "500,000 members")}
      {newsArticle("Reactjs Developers", "189,000 members")}
      {newsArticle("Front End Developer Group", "450,000 members")}
      {newsArticle("FreeCodeCamp", "1,000,000 members")}

    </div>
  );
}

export default Widgets;
