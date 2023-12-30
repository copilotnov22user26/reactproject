import { useEffect } from 'react';
import './App.css';
import First from './components/first';
import { getstocks } from './components/stockdataapi';
import { useState } from 'react';

function App() {
  
  return (
    <First/>
  );
}

export default App;
