import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import UserActivity from './components/UserActivity'

function App() {
  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/user/:id" Component={UserActivity} />
        </Routes>
      </div>
    </div>
  );
}

export default App;