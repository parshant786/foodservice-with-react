import React from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className="container-signIn">
      <h2>sign in</h2>
      <form>
        <p>
          <label htmlFor="email">email</label>
          <input type="email" id="email" />
        </p>
        <p>
          <label htmlFor="password">password</label>
          <input type="password" id="password" />
        </p>
        <Link to={"/profile"}>
          {" "}
          <button type="button"> sign in </button>{" "}
        </Link>
      </form>
    </div>
  );
};
