import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import FunComponent from './component/FunComponent';
import MyClass from './component/MyClass';
import Name from './component/Name';
import Example from './component/Example';
import Example2 from './component/Example2';
import Form from './component/Form';
import MyFragment from './component/MyFragment';
function App() {

  function clicked() {
    alert('Inside App.js')

  }
  return (
    <div className = "container">
    
     {/* <Name/>
      <Example names= {['Python','Java','JavaScript','C#']}></Example>
      <Example2 names = {['React','ReactNative',"DJango"]}></Example2>
      <Form/>
     */}
     <MyFragment></MyFragment>
    </div>
  );
}

export default App;
