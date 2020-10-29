import React, { useState } from 'react';
import styled from 'styled-components';

import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import { Button } from '@material-ui/core';

function Todo({ todo, edit, complete, remove }) {
  const [display, setDisplay] = useState(false);

  return (
    <TodoContainer>
      {todo && (
        <Title>
          {display ? (
            <input
              id={todo.id}
              type='text'
              value={todo.title}
              onChange={(e) => edit(e, todo.id)}
            />
          ) : (
            todo.title
          )}
        </Title>
      )}
      {todo && (
        <Button
          size='medium'
          onClick={() => complete(todo.id, todo.title)}
          style={{
            backgroundColor: '#c9d6df',
            marginRight: '5px',
            marginLeft: '5px',
          }}>
          <CheckIcon />
        </Button>
      )}

      {todo && (
        <div className='save__edit'>
          {display ? (
            <Button
              onClick={() => setDisplay(false)}
              style={{
                backgroundColor: '#8db596',
                marginRight: '5px',
                marginLeft: '5px',
              }}>
              <SaveIcon />
            </Button>
          ) : (
            <Button
              onClick={() => setDisplay(true)}
              style={{
                backgroundColor: '#769fcd',
                marginRight: '5px',
                marginLeft: '5px',
              }}>
              <EditIcon />
            </Button>
          )}
        </div>
      )}

      {todo && (
        <Button
          onClick={() => remove(todo.id)}
          style={{
            backgroundColor: '#c06c84',
            marginRight: '5px',
            marginLeft: '5px',
          }}>
          <ClearIcon />
        </Button>
      )}
    </TodoContainer>
  );
}

export default Todo;

const TodoContainer = styled.div`
  display: flex;
  border: 1px solid lightGray;
`;

const Title = styled.span`
  flex: 1;
  text-align: left;
  padding: 10px;
`;
