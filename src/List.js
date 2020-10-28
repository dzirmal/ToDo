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
import SaveIcon from '@material-ui/icons/Save';

function List() {
  const [todo, setTodo] = useState('');
  const [editTodo, setEditTodo] = useState('');
  const [list, setList] = useState([
    {
      title: 'Buy Milk',
      id: '111111',
    },
    {
      title: 'Sleeping Time',
      id: '111ff111',
    },
    {
      title: 'Walk for one Hour!',
      id: '1111ss11',
    },
    {
      title: 'Swimming',
      id: '111aa111',
    },
    {
      title: 'Biking',
      id: '1111gg11',
    },
    {
      title: 'Gaming',
      id: '1ee11111',
    },
  ]);
  const inputRef = useRef(null);
  const [completedList, setCompletedList] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    if (todo === '') return;
    const haveToDo = {
      title: todo,
      id: uuidv4(),
    };

    setTodo('');
    setList([...list, haveToDo]);
  };

  const complete = (id) => {
    let completed = list.find((todo) => todo.id === id);
    setCompletedList([...completedList, completed]);
    remove(id);
  };

  const edit = (id) => {
    let edit = list.find((todo) => todo.id === id);
    // inputRef.current.focus();

    setEditTodo(edit.title);
    console.log(edit);
  };

  const save = (id) => {
    console.log('save btn is clicked');
  };

  const remove = (id) => {
    const newList = list.filter((todo) => {
      return todo.id !== id;
    });
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

      <div className='list'>
        {list.map((todo, value) => (
          <div key={todo.id} className='todo'>
            {todo && (
              <span>
                <input
                  id={todo.id}
                  type='text'
                  value={editTodo}
                  ref={inputRef}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
                {todo.title}
              </span>
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
              <Button
                onClick={() => edit(todo.id)}
                style={{
                  backgroundColor: '#769fcd',
                  marginRight: '5px',
                  marginLeft: '5px',
                }}>
                <EditIcon /> <SaveIcon />
              </Button>
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
          </div>
        ))}
      </div>
      <div>Completed List</div>
      <div className='list'>
        {completedList.map((todo) => (
          <div key={todo.id} className='todo'>
            <span>{todo.title}</span>
            <span>
              <CheckIcon style={{ backgroundColor: 'green' }} />
            </span>
            <span>Completed</span>
          </div>
        ))}
      </div>
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
    &.list {
      display: flex;
      flex-direction: column;
      width: 450px;
      border: 1px solid lightGray;
      margin: 0 auto;
      margin-top: 20px;
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
