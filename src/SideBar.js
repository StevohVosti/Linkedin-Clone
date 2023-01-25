import React from "react";
import "./SideBar.css";
import { Avatar } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function SideBar() {

  const [user] = useAuthState(auth)

  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className="sidebar-hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1H2Q4UUE_oLm27e-cHEuLH7tVcw9Gt5wtK4zWuLf&s"
          alt=""
        />
        <Avatar className="sidebar-avatar" src={user.photoURL} />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Grow you Network</p>
          <p className="sidebar-statNum">2,000</p>
        </div>
        <div className="sidebar-stat">
          <p>Who's viewed you profle</p>
          <p className="sidebar-statNum">100</p>
        </div>
      </div>

      <div className="sidebar-Bottom">
        <p>Recents</p>
        {recentItem("Reactjs Developers")}
        {recentItem("Front End Developer Group")}
      </div>
    </div>
  );
}

export default SideBar;
