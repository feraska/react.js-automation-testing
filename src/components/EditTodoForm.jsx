import React, {useState} from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm" data-testid="edit-form">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' data-testid="edit-input"/>
    <FontAwesomeIcon icon={faXmark} className='cancel-icon' onClick={()=> editTodo(task.task, task.id)}  data-testid="cancel-btn"/>
    <button type="submit" className='todo-btn' data-testid="submit">Add Task</button>
  </form>
  )
}