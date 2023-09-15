/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
// import Card from './components/Card'
// import Header2 from './components/Header2'

function App() {

  return (
    <Router>
        <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/movie/:id' element={<Dashboard />}></Route>
        </Routes>
    </Router>

    
  )
}

export default App
