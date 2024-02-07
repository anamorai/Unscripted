import Todo from "./Todo"

const TodoList = ({todos, checkTodo, deleteTodo}) => {
  return (
    <>
        {todos.map(todo => (
            <Todo 
                key={todo.id} 
                title={todo.title} 
                checkTodo={checkTodo} 
                deleteTodo={deleteTodo}
                id={todo.id} 
                isComplited={todo.isComplited}
            />
        ))}
       
    </>
  )
}

export default TodoList;
