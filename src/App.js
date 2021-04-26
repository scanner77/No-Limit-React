import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './Components/Pages/Home'
import EnrolledCourses from './Components/Pages/EnrolledCourses'
import SignUp from './Components/Pages/SignUp'
import MyAccount from './Components/Pages/MyAccount'
import Login from './Components/Pages/Login'
import Logout from './Components/Pages/Logout'

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
      <Route path = '/' exact component={Home}/>
          <Route path = '/enrolledcourses'  component={EnrolledCourses}/>
          <Route path = '/myaccount'  component={MyAccount}/>
          <Route path = '/login'  component={Login}/>
          <Route path = '/signup'  component={SignUp}/>
          <Route path = '/logout'  component={Logout}/>

      </Switch>

      </Router>
    </>
  );
}

export default App; 
