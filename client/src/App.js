import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import { Routes, Route } from "react-router-dom"
import { Provider } from "react-redux";
import React from "react";
import store from "./app/store";
import Profile from "./Components/Profile/Profile";
import Test from "./Components/Test/Test";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Provider>
  );
}

export default App;
