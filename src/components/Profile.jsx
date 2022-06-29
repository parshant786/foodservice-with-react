import React from "react";

export const Profile = ({ logInUser }) => {
  console.log(logInUser)
  return <div>profile{logInUser.fullName}</div>;
};
