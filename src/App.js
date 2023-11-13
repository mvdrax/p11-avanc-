import logo from './logo.svg';
import './styles/App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignIn from './pages/sign';
import User from './pages/user'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/index.html" element={<Home />} />
        <Route path='/signin/profile' element={<User />} />

    </Routes>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
