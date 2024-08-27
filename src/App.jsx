import './App.css';
import TodoList from './components/TodoList';
import TodoProvider from './providers/TodoProvider';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <div className="App">
      <header >
       <h1>TODO list</h1>
      </header>

      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
