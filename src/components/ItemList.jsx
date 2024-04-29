import { EditTodoForm } from "./EditTodoForm";
import { Todo } from "./Todo";

const ItemList = ({todos,setTodos}) => {
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
    return (
        <>
        {
        todos.map((todo) =>(
          <div data-testid="task">
            {todo.isEditing ? (
              <EditTodoForm editTodo={editTask} task={todo} key={todo.id}/>
            ) : (
              <Todo
                key={todo.id}
                task={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
              />
            )
          }
        
          </div>

        )
      )
      }
      </>     
    )
   
}


export default ItemList;