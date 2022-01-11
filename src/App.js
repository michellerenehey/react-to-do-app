import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/users';
import Auth from '../src/views/Auth/Auth';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <div className="App">
      <h1>To Do List</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <p>current logged in user</p>
                <button onClick={logoutUser}>Log Out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
