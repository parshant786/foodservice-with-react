import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
