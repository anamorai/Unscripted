import { useState } from "react"
import { v4 } from "uuid";
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, {id: v4(), title: text, isComplited: false}]);
  };

  const checkTodo = (id) => {
    setTodos(todos.map(todo => {
      return todo.id === id ? {...todo, isComplited: !todo.isComplited} : todo;
    }))
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => !(todo.id === id)))
  }

  return (
    <>
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
      <TodoForm addTodo={addTodo} />
    </>
  )
}

export default App;
