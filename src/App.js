import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
// import './components/styles/section.css';


function App() {
  return (
    <div className="App">
        <Header/>
          <Home/>
        {/* <h1>Richard</h1> */}
    </div>
  );
}

export default App;
