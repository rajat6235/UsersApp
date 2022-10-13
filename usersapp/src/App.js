import React from "react";
import Users from "./components/Users/Users";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import UsersInfo from "./components/UsersInfo/UsersInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/info/:id" element={<UsersInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
