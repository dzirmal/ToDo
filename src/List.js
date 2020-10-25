import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

// components
// import ToDo from './Todo';

// Material UI
import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';

function List() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([
    'Buy Milk',
    'Sleeping Time',
    'Walk for one Hour!',
    'Swimming',
    'Biking',
    'Gaming',
  ]);
  const inputRef = useRef(null);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    if (input === '') return;
    // const haveToDo =
    // {
    //   title: todo,
    //   id: uuidv4(),
    //   completed: false,
    // };

    setTodo(input);
    setInput('');
    setList([...list, input]);
  };

  const submit = (e) => {
    e.preventDefault();
    addTodo(e);
  };

  const complete = (e) => {
    e.preventDefault();
    let completedList = list.splice(list.indexOf(list.length), 1);

    setCompleted([...completed, completedList]);
    // remove(e);
    console.log('CompletedList:', completedList);
  };

  const edit = (e) => {
    e.preventDefault();
    console.log('edit btn clicked');
  };

  const remove = (e) => {
    e.preventDefault();
    let newList = list.splice((1, 1));
    setList(newList);
  };

  return (
    <Container>
      <h1>To Do</h1>
      <p>Add a ToDo</p>
      <form onSubmit={submit}>
        <input
          type='text'
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <div className='todo'>{input}</div>
        <Button
          size='large'
          onClick={addTodo}
          style={{
            backgroundColor: '#00adb5',
            marginTop: '10px',
            marginBottom: '10px',
          }}>
          <AddCircleIcon style={{ marginRight: '10px' }} />
          ADD
        </Button>
      </form>

      <div className='list'>
        {list.map((todo, i) => (
          <div key={i} className='todo'>
            {todo && <span>{todo}</span>}
            {todo && (
              <Button
                size='medium'
                onClick={complete}
                style={{
                  backgroundColor: '#c9d6df',
                  marginRight: '5px',
                  marginLeft: '5px',
                }}>
                <CheckIcon />
              </Button>
            )}
            {todo && (
              <Button
                onClick={edit}
                style={{
                  backgroundColor: '#769fcd',
                  marginRight: '5px',
                  marginLeft: '5px',
                }}>
                <EditIcon />
              </Button>
            )}
            {todo && (
              <Button
                onClick={remove}
                style={{
                  backgroundColor: '#c06c84',
                  marginRight: '5px',
                  marginLeft: '5px',
                }}>
                <ClearIcon />
              </Button>
            )}
          </div>
        ))}
      </div>
      <div>Completed List</div>
      <div className='completedList'>{completed}</div>
    </Container>
  );
}

export default List;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;
  & > div {
    margin-top: 10px;
    &.completedList {
      display: flex;
      flex-direction: column;
      width: 450px;
      border: 1px solid lightGray;
      margin: 0 auto;
      margin-top: 20px;
    }
    &.list {
      display: flex;
      flex-direction: column;
      width: 450px;
      border: 1px solid lightGray;
      margin: 0 auto;
      & > div {
        &.todo {
          display: flex;
          border: 1px solid lightGray;
          & > span {
            flex: 1;
            text-align: left;
            padding: 10px;
          }
        }
      }
    }
  }
`;
