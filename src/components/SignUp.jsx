import React, { useState } from "react";
import axios from "axios";
export const SignUp = () => {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [statePasswordConfirm, setStatePasswordConfirm] = useState({
    confirm: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password !== statePasswordConfirm.confirm) {
      alert("password not match with confrim password");
      setState({
        fullName: "",
        email: "",
        password: "",
      });
      setStatePasswordConfirm({
        confirm: "",
      });
    } else {
      const registered = { ...state };
    
      axios.post("http://localhost:4000/api/signUp", registered).then((res) => {
        alert(res.data.message);
        
      });
      setState({
        fullName: "",
        email: "",
        password: "",
      });
      setStatePasswordConfirm({
        confirm: "",
      });
      window.location ="/signIn"
    }
  };
  const handleFullName = (e) => {
    setState({
      ...state,
      fullName: e.target.value,
    });
  };
  const handleEmail = (e) => {
    setState({
      ...state,
      email: e.target.value,
    });
  };
  const handlePassword = (e) => {
    setState({
      ...state,
      password: e.target.value,
    });
  };
  const handleConfrim = (e) => {
    setStatePasswordConfirm({
      confirm: e.target.value,
    });
  };

  return (
    <div className="container-signUp">
      <h1 className="signUp-heading">sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">full name :</label>
        <input type="text" id="fullName" onChange={handleFullName} value={state.fullName} />
        <br />
        <label htmlFor="email">email</label>
        <input type="email" id="email" onChange={handleEmail} value={state.email} />
        <br />
        <label htmlFor="password">password</label>
        <input type="password" id="password" onChange={handlePassword} value={state.password} />
        <br />
        <label htmlFor="confromPassword">confrom password</label>
        <input type="password" id="confrimPassword" onChange={handleConfrim} value={statePasswordConfirm.confirm} />
        <br />
        <input type="submit" className="submit" />
      </form>
    </div>
  );
};
