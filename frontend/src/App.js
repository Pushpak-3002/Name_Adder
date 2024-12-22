import React, { useEffect, useState } from 'react';
import './App.css';
import { addName, deleteName, getAllNames, updateName } from './utils/HandleApi';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">Name-adder</div>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
};

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      onLogin(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-modal">
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [names, setNames] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [nameId, setNameId] = useState(null);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setNameId(_id);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setNames([]); // Clear names list on logout, if desired
  };

  useEffect(() => {
    if (isLoggedIn) {
      getAllNames(setNames);
    }
  }, [isLoggedIn]);

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={setIsLoggedIn} />
      ) : (
        <div className="App">
          <Navbar onLogout={handleLogout} />
          <div className="container">
            <h1>Name Adder</h1>
            <div className="top">
              <input
                className="input"
                type="text"
                placeholder="Add Names..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div
                className="add"
                onClick={
                  isUpdating
                    ? () => updateName(nameId, text, setNames, setText, setIsUpdating)
                    : () => addName(text, setText, setNames)
                }
              >
                {isUpdating ? 'Update' : 'Add'}
              </div>
            </div>
            <div className="list">
              {names.map((item) => (
                <div key={item._id} className="name">
                  {item.text}
                  <div className="icons">
                    <div
                      className="icon"
                      onClick={() => updateMode(item._id, item.text)}
                    >
                      &#9998;
                    </div>
                    <div
                      className="icon"
                      onClick={() => deleteName(item._id, setNames)}
                    >
                      &#10060;
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
