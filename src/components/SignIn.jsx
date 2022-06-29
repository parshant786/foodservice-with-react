import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

import axios from "axios";

export const SignIn = ({ setUserFuntion, logInUser }) => {
  const [detail, setDetail] = useState({ email: "", password: "" });
  const navigate =  useNavigate()

  const emailChange = (e) => {
    setDetail({ ...detail, email: e.target.value });
  };
  const passwordChange = (e) => {
    setDetail({ ...detail, password: e.target.value });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    const signIndetail =await { ...detail };
    axios.post("http://localhost:4000/api/signIn", signIndetail).then(async (res) => {
      await setUserFuntion(res.data.user);
      console.log(logInUser);

      alert(res.data.message);
      setDetail({ email: "", password: "" });
      if (res.data.user) {

        navigate("/profile")
      // window.location = "/profile";
      }
    });
  };

  return (
    <div className="container-signIn">
      <h2>sign in</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="email">email</label>
          <input type="email" id="email" value={detail.email} onChange={emailChange} />
        </p>
        <p>
          <label htmlFor="password">password</label>
          <input type="password" id="password" value={detail.password} onChange={passwordChange} />
        </p>
        <input type="submit" className="buttonSignIn" />
      </form>
    </div>
  );
};
