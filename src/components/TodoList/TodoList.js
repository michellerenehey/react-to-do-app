import React from 'react';

export default function TodoList({ todo, handleToggle, handleDelete }) {
  return (
    <div>
      <input type="checkbox" onChange={() => handleToggle(todo)} checked={todo.is_complete} />
      {todo.task}
      <button onClick={() => handleDelete(todo.id)}>X</button>
    </div>
  );
}

// map through
