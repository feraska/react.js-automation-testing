import  {useState} from 'react'
import { v4 as uuidv4 } from "uuid";
export const TodoForm = ({todos,setTodos}) => {
    const [value, setValue] = useState('');
    const [error,setError] = useState(false)
    const addTodo = (todo) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
    }
    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        setError(false)
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        } else {
            setError(true)
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm" >
    <input 
    type="text" 
    value={value} 
    onChange={(e) => setValue(e.target.value)} 
    className="todo-input" 
    placeholder='What is the task today?'
    data-testid="task-name"
     />
    <button
    type="submit"
    className='todo-btn'
    data-testid="task-add-btn"
    >
    Add Task
    </button>
    {error&&
    <div 
    className='msg'
    data-testid="error-message"
    >
        Error data
        </div>
        }
  </form>
  )
}