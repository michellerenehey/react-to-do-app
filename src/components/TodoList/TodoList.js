import React from 'react';

export default function TodoList({ todo, handleToggle }) {
  return (
    <div>
      <input type="checkbox" onChange={() => handleToggle(todo)} checked={todo.is_complete} />
      {todo.task}
    </div>
  );
}

// map through
