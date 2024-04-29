import  { useState } from "react";
import { TodoForm } from "./TodoForm";
import ItemList from "./ItemList";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([
    
  ]);
  return (
    <div className="TodoWrapper">
      <h1 data-testid="app-title">Get Things Done !</h1>
       <TodoForm todos={todos} setTodos={setTodos}/>
       <ItemList todos={todos} setTodos={setTodos}/>
    </div>
  );
};