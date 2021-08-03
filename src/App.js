import React, { useEffect, useState } from 'react';
import './App.css';
import Author from './component/author_wrap';
import Goods from './component/goods';
import Main from './component/main';
import About from './component/about';
import Works from './component/works';

function App() {
  return (
      <div id='App' className="App">
        <Main></Main>
        <Author></Author>
        <Works></Works>
        <Goods></Goods>
        <About></About>
      </div>
  );
}

export default App;
