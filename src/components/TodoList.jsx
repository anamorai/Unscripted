import Todo from "./Todo"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

const TodoList = ({ todos, checkTodo, deleteTodo }) => {
  return (
    <>
      <SortableContext items={ todos } strategy={ verticalListSortingStrategy }>
        { todos.map(todo => (
          <Todo
            key={ todo.id }
            title={ todo.title }
            checkTodo={ checkTodo }
            deleteTodo={ deleteTodo }
            id={ todo.id }
            isComplited={ todo.isComplited }
          />
        )) }
      </SortableContext>
    </>
  )
}

export default TodoList;