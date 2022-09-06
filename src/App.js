import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminDashboard } from "./components/Admin";
import { Home } from "./components/Home";
import { NoFile } from "./components/NoFile";
import { Product } from "./components/Product";
import { Profile } from "./components/Profile";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn setUserFuntion={setUser} logInUser={user} />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<Profile logInUser={user} />} />
          <Route path="/product" element={<Product />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NoFile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
