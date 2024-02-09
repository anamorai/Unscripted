import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
import { v4 } from "uuid";


export default function TodoComplete () {

    const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: v4(), title: text, isComplited: false }]);
  };

  const checkTodo = (id) => {
    setTodos(todos.map(todo => {
      return todo.id === id ? { ...todo, isComplited: !todo.isComplited } : todo;
    }))
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => !(todo.id === id)))
  }

  const getTodoPos = (id) => todos.findIndex(todo => todo.id === id);


    return (
    <>
        <TodoList todos={ todos } checkTodo={ checkTodo } deleteTodo={ deleteTodo } />
      <TodoForm addTodo={ addTodo } />
    </>
  )
}
