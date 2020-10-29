import React from 'react';

function CompletedTodos({ todos }) {
  const completed = todos.filter((todo) => todo.completed !== false);
  return (
    <div>
      {completed.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
}

export default CompletedTodos;
