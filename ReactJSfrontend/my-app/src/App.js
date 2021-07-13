import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import React,{Component} from 'react';
import CounterHook from './component/CounterHook';
import FetchData from './component/FetchData';




function App() {
  

  
  return (
    <div className = "container">

    {/*<Counter/>*/}
    {/*<CounterHook/>*/}
    <FetchData></FetchData>

    
    
    </div>
  );
}

export default App;
