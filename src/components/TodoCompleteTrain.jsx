import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function TodoCompleteTrain() {
  const localStorageKey = "todosTrain"; // Unique key for local storage in TodoCompleteTrain
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Retrieve todos from local storage when component mounts
    const savedTodos = localStorage.getItem(localStorageKey);
    if (savedTodos) {
      // Parse and update the state with the saved todos
      const parsedTodos = JSON.parse(savedTodos);
      setTodos(parsedTodos);
    }
  }, [localStorageKey]); // Include localStorageKey in the dependency array

  const addTodo = (text) => {
    const newTodo = { id: v4(), title: text, isComplited: false };
    setTodos([...todos, newTodo]);
    saveTodos([...todos, newTodo]); // Save updated todos to local storage
  };

  const checkTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isComplited: !todo.isComplited } : todo)));
    saveTodos(todos); // Save updated todos to local storage
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => !(todo.id === id)));
    saveTodos(todos.filter((todo) => !(todo.id === id))); // Save updated todos to local storage
  };

  const getTodoPos = (id) => todos.findIndex((todo) => todo.id === id);

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id === over.id) return;

    setTodos((todos) => {
      const originalPos = getTodoPos(active.id);
      const newPos = getTodoPos(over.id);

      return arrayMove(todos, originalPos, newPos);
    });

    saveTodos(todos); // Save updated todos to local storage
  };

  const saveTodos = (todosToSave) => {
    localStorage.setItem(localStorageKey, JSON.stringify(todosToSave));
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <>
      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
      </DndContext>
      <TodoForm addTodo={addTodo} />
    </>
  );
}
