import axios from "axios";
import React, { useState } from "react";
import { DeleteUser } from "./DeleteUser";
import { Edit } from "./Edit";

export const AdminDashboard = () => {
  const [userList, setUserList] = useState([]);
  const handleAdminClick = () => {
    axios.get("http://localhost:4000/api/signUp").then((res) => {
      setUserList([...res.data]);
      console.log(userList);
    });
  };

  return (
    <>
      {console.log(userList)}
      <button onClick={handleAdminClick}>user</button>
      {userList.map((user) => {
        return (
          <div key={user._id} className="user-list">
            <span>{user.fullName}</span>
            <span>{user.email}</span>
            <span>{user.password}</span>
            <span>{user._id}</span>
           <Edit />
           <DeleteUser  userId={user._id} />
          </div>
        );
      })}
    </>
  );
};
