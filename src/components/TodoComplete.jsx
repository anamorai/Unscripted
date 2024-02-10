import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { useState, useEffect } from "react"
import { v4 } from "uuid";
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";




export default function TodoComplete() {
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

  const handleDragEnd = (e) => {
    const { active, over } = e;


    if (active.id === over.id) return;

    setTodos(todos => {
      const originalPos = getTodoPos(active.id);
      const newPos = getTodoPos(over.id);

      return arrayMove(todos, originalPos, newPos);
    })
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )


  return (
    <>
      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
      </DndContext>
      <TodoForm addTodo={addTodo} />
    </>
  )
}
