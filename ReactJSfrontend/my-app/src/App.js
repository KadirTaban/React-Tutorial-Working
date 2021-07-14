import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import React,{Component} from 'react';
import ComponentA from './component/ComponentA';
import UseReducer from './component/UseReducer';
import DataFetching from './component/DataFetching';


export const MyContext = React.createContext()

function App() {
  

  
  return (
    <div className = "container">


    <DataFetching></DataFetching>

    
    
    </div>
  );
}

export default App;
