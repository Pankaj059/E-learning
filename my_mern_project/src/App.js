import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './container/Login';
import Register from './container/Register';
import Dashboard from './Pages/Dashboard/Dashboard.js';
import Addcourse from './Pages/Course/Addcourse.js';
import Editcourse from './Pages/Course/Editcourse';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
<>
    <Router>
      <Dashboard/>
      {/* <Addcourse /> */}
    </Router>

  {/* <Addcourse/> */ }
  {/* <Login/> */ }
  {/* <Register/> */ }
  {/* <Router><Routes><Route path="/editcourse" element={<Editcourse/>}></Route></Routes></Router> */ }
  {/* <div> <Dashboard/> </div> */ }


</>
   
  );
}

export default App;
