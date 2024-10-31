import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import List from './pages/list';
import Detail from './pages/detail';
import MyNavbar from './components/navbar'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <MyNavbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:animeId" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
