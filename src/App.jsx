import {BrowserRouter, Routes, Route} from "react-router-dom";
//import { useState } from 'react';
import './App.css'
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/signin";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  </BrowserRouter>;
}

export default App
