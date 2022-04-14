
import './App.css';
// import Input from './Components/Input';
import Todolist from './Components/Todolist';
import Form from './Components/Form'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List </h1>
      </header>
      <Form/>
      <Todolist/>
    </div>
  );
}

export default App;
