import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>FRIENDS DATABASE</h1>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/friends'>Friends List</Link>
        </li>
        <li>
          <Link to='/addfriend'>Add Friend</Link>
        </li>
        <li>
          <Link to='/login'>Logout</Link>
        </li>
      </ul>
      <Switch>
        <Route  path="/login" />
        <Route  path="/friends" />
        <Route  path="/addfriend" />
        <Route  path="/login" />
      </Switch>
    </div>
  );
}

export default App;
