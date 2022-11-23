import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './container/Login';
import Register from './container/Register';
import Dashboard from './Pages/Dashboard/Dashboard.js';
import Addcourse from './Pages/Course/Addcourse.js';
import Editcourse from './Pages/Course/Editcourse';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './Pages/Users/Homepage';
import Search from './Pages/Search/Search';
function App() {
  return (
    <>

      <div><Navbar /></div>

      <div>
        <Routes>
          <Route exact path='/' element={<Dashboard />}></Route>
          <Route path='/addcourse' element={<Addcourse />}></Route>
          <Route path='/editcourse' element={<Editcourse />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/homepage' element={<Homepage/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
        </Routes>
      </div>


    </>

  );
}

export default App;
