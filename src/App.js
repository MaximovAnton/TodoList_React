import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList'
import Pictures from './components/Pictures/Pictures'
import PlusOne from './components/Message/Message'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
       <div className="App-wrapper">
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/music" element={<TodoList/>} />
            <Route path="/pictures" element={<Pictures/>} />
            <Route path="/plusone" element={<PlusOne/>} />
          </Routes>
        </div>
      </div> 
    </BrowserRouter>
  );
}

export default App;
