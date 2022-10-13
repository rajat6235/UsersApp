import React from "react";
import Users from "./components/Users/Users";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import UsersInfo from "./components/UsersInfo/UsersInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:page" element={<Users />} />
        <Route path="/info/:id" element={<UsersInfo />} />
        <Route path="/" element={<Navigate to="/1" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
