import React from 'react';

export default function TodoList({ task, message }) {
  return (
    <div>
      <input type="checkbox" />
      {task}
    </div>
  );
}

// map through
