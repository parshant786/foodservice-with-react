import React from "react";

export const SignUp = () => {
  return (
    <div className="container-signUp">
      <h1 className="signUp-heading">sign up</h1>
      <form>
        <label htmlFor="fullName">full name :</label>
        <input type="text" id="fullName" />
        <br />
        <label htmlFor="email">email</label>
        <input type="email" id="email" />
        <br />
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
        <br />
        <label htmlFor="confrimPassword">confrom password</label>
        <input type="password" id="confrimPassword" />
        <br />
        <button type="submit">create new account</button>
      </form>
    </div>
  );
};
