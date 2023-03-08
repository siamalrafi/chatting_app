import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ChatsPages from './Pages/ChatsPages';
import "../src/App.css";

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get" element={<ChatsPages />} />
      </Routes>
    </div>
  );
};

export default App;