import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Contact from './Contact';
import './navbar.css';
export default function NavBar()
{
  return (
    <div>
        <ul className='navbar'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link> </li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/home" Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/login" Component={Login}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}