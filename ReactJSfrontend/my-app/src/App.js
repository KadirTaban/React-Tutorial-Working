import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import FunComponent from './component/FunComponent';
import MyClass from './component/MyClass';
import Name from './component/Name';
function App() {

  function clicked() {
    alert('Inside App.js')

  }
  return (
    <div className = "container">
  
      <Name/>
    </div>
  );
}

export default App;
