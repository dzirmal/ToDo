import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';

function Todos({ todos, setTodos }) {
  const edit = (e, id) => {
    const edit = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = e.target.value;
      }
      return todo;
    });
    setTodos(edit);
  };

  const complete = (id) => {
    // let completed = todos.find((todo) => todo.id === id);
    // setCompletedList([...completedList, completed]);
    // remove(id);

    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      })
    );
  };

  const remove = (id) => {
    const newList = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newList);
  };

  return (
    <Container className='list'>
      {todos
        .filter((todo) => todo.completed !== true)
        .map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            className='todo'
            edit={edit}
            complete={complete}
            remove={remove}
          />
        ))}
    </Container>
  );
}

export default Todos;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  border: 1px solid lightGray;
  margin: 0 auto;
  margin-top: 20px;
`;
