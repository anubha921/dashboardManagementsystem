import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
