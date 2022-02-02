import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }

  return (
    <div className="App">
      <Router>
        <div className="container">
          <Switch>
            <Route path="/login" render={props => !isAuthenticated ? 
              <Login {...props} /> :
              <Redirect to="/dashboard" />
            } />
            <Route path="/register" render={props => !isAuthenticated ? 
              <Register {...props} /> : 
              <Redirect to="/login" />
            } />
            <Route path="/dashboard" render={props => isAuthenticated ?
              <Dashboard {...props} /> :
              <Redirect to="/login" />
            } />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
