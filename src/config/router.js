import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from
   "react-router-dom";

import Home from "../screens/home"  
import Login from "../screens/login" 
import Signup from "../screens/signup"  


export default function AppRouter() {
  return (
    <Router>
        <div className="main">
            <Link to='/'>HOME</Link>
            <Link to='login'>Login</Link>
            <Link to='signup'>Signup</Link>

           


        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
        </Routes>
 
    </Router>
  );
}

