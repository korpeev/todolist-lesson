import { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Go to Work' },
    { id: 2, name: 'Go to back home at work' },
  ]);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="rounded shadow-md p-5 w-[600px] h-[300px]">
        <h1 className="text-xl font-medium text-center">Todo List</h1>
        <hr className="mt-5 h-4" />
        <div className="flex justify-center space-x-2">
          <input className="rounded shadow-sm border border-gray-300" />
          <button className="bg-green-400 text-white p-3 rounded">
            Add todo
          </button>
        </div>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
