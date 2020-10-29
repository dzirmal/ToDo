import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function AddTodo({ todos, setTodos }) {
  const [todo, setTodo] = useState('');
  const inputRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    if (todo === '') return;
    const haveToDo = {
      title: todo,
      id: uuidv4(),
    };

    setTodo('');
    setTodos([...todos, haveToDo]);
  };

  return (
    <Container>
      <p>Add a ToDo</p>
      <form onSubmit={submit}>
        <input
          type='text'
          ref={inputRef}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <div className='todo'>{todo}</div>
        <Button
          size='large'
          type='submit'
          style={{
            backgroundColor: '#00adb5',
            marginTop: '10px',
            marginBottom: '10px',
          }}>
          <AddCircleIcon style={{ marginRight: '10px' }} />
          ADD
        </Button>
      </form>
    </Container>
  );
}

export default AddTodo;

const Container = styled.div``;
