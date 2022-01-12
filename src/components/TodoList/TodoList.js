import React from 'react';

export default function TodoList({ task }) {
  return (
    <div>
      <input type="checkbox" />
      {task}
    </div>
  );
}

// map through
