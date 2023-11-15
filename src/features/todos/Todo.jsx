import React from "react";

const Todo = (todo) => {
  return (
    <article>
      <div className='todo'>
        <input
          type='checkbox'
          checked={todo.completed}
          id={todo.id}
          onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
        />
        <label htmlFor={todo.id}>{todo.title}</label>
      </div>
      <button className='trash' onClick={() => deleteTodo({ id: todo.id })}>
        Delete
      </button>
    </article>
  );
};

export default Todo;
