import React from "react";

import "./User.css";

const User = ({ firstName, lastName, deleteUser, index }) => {
  return (
    <div className="user-info-container">
      <p>{firstName}</p>
      <p>{lastName}</p>
      <button onClick={() => deleteUser(index)}>Delete</button>
    </div>
  );
};

export default User;
