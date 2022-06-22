import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='header'>
          <h1>FRIENDS DATABASE</h1>
          <div className='navlinks'>
            <ul>
              <li>
                <Link style={{color: "white"}} to='/login'>Login</Link>
              </li>
              <li>
                <Link style={{color: "white"}} to='/friends'>Friends List</Link>
              </li>
              <li>
                <Link style={{color: "white"}} to='/addfriend'>Add Friend</Link>
              </li>
              <li>
                <Link style={{color: "white"}} to='/login'>Logout</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route  path="/login" component={Login}/>
            <Route  path="/friends" />
            <Route  path="/addfriend" />
            <Route  path="/" component={Login} />
          </Switch>
        </div>    
      </div>
    </Router>
  );
}

export default App;
