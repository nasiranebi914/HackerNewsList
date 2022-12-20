import React from 'react';
import './App.css';
import ListOfNews from './components/ListOfNews';
import Title from './components/Title';

function App() {
  return (
    <div className="app">
      <Title />
      <ListOfNews />
    </div>
  );
}

export default App;
