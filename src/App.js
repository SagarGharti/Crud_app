import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./components/pages/home";
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Navbar from './components/layout/navbar';
import addUser from "./components/user/addUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notfound from './components/pages/Notfound';
import updateUser from './components/user/editUser';
import View from './components/user/View';

function App() {
  return (
  <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path ='/about' component={About} />
        <Route exact path = '/contact' component = {Contact} />
        <Route exact path = '/users/add' component={addUser} />
        <Route exact path = '/edit/:id' component={updateUser} />
        <Route exact path = '/users/:id' component={View} />
        <Route component= {Notfound} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
