import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from
   "react-router-dom";



import Signup from "../screens/signup"  
import Login from "../screens/login" 
import Todo from "../screens/todo";


export default function AppRouter() {
  return (
    <Router>

        <Routes>
            <Route path="login" element={<Login />} /> 
            <Route path="/" element={<Signup />} />
            <Route path="todo" element={<Todo />} />
        </Routes>
 
    </Router>

  );
}

