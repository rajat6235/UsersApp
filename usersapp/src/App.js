import React from 'react';
import Users from './components/Users/Users'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import UsersInfo from './components/UsersInfo/UsersInfo';

function App() {
  const routes = [
    {
      path: "/UserList",
      component: Users
    },
    {
    
      routes: [
        {
          path: "/UserList/UserInfo",
          component: UsersInfo
        },
      ]
    }
  ];
  return (
    <Router>
    <div className="App">
      <h1 className='title'> Users</h1>
      <Users/>


    </div>
    </Router>
  );
}

export default App;
