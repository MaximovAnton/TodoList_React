import React, { useState } from "react";
import s from './TodoList.module.css'
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const Music = () => {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput){
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTodos((old) => [...old,newItem ])
    }
  }

  const removeTask = (id) => {
        setTodos((old) => old.filter((todo) => todo.id !== id))
  }

  const handleToggle = (id) => {
    setTodos((old) => old.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    )
  }

  return (
    <div className={s.music}>
      <h1>Список задач {todos.length}</h1>

      <TodoForm addTask={addTask} />

      {todos.map(todo => {
        return <Todo
          todo={todo}
          key={todo.id}
          toggleTask={handleToggle} 
          removeTask={removeTask}/>
      })}
    </div>
  )
}

export default Music