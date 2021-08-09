import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";


import  Home  from './components/Home';
import  Login  from './components/Login';

import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div>
      
      <BrowserRouter>
          <Navbar />
          <Switch>
              <Route exact path="/Home" component={Home} />
              <Route  path="/Login" component={Login} />     
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;