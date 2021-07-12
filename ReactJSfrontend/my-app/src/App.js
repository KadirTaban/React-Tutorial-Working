import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import React,{Component} from 'react';
import CounterHook from './component/CounterHook';




function App() {
  

  
  return (
    <div className = "container">

    <Counter/>
    <CounterHook/>
    
    
    </div>
  );
}

export default App;
