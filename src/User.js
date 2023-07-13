import React from "react";

import "./User.css";

const User = ({ firstName, lastName }) => {
  return (
    <div className="user-info-container">
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
};

export default User;
