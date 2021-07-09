import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import FunComponent from './component/FunComponent';
import MyClass from './component/MyClass';
function App() {

  function clicked() {
    alert('Inside App.js')

  }
  return (
    <div className = "container">
      <Hello name = "Kadir" lastname="Tab"></Hello>
      <MyClass email= "kadir.codes@gmail.com" myclick = { clicked }/>
    </div>
  );
}

export default App;
