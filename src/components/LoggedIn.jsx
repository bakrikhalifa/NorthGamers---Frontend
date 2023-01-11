import React from "react";

const LoggedIn = ({ LoggedInUser: username }) => {
  return (
    <div className="LoggedIn">
      <p>Signed in</p>
      <p>as {username}</p>
    </div>
  );
};

export default LoggedIn;
