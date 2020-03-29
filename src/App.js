import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Component/Login/Login';


function App() {
  
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route>
          <Login/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
