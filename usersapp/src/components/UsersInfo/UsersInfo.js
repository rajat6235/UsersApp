import React from "react";
import { useLocation } from "react-router-dom";
import "./UsersInfo.css";
function UsersInfo() {
  const location = useLocation();

  return (
    <div className="container">
      <>
        <h1 className="name">{location.state.author}</h1>
        <img
          className="userImg"
          src={location.state.img}
          alt={location.state.author}
        ></img>
      </>
    </div>
  );
}

export default UsersInfo;
