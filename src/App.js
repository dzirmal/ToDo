import React, { useState } from 'react';
import styled from 'styled-components';
import AddTodo from './components/AddTodo';
import CompletedTodos from './components/CompletedTodos';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      title: 'Buy Milk',
      id: '111111',
      completed: false,
    },
    {
      title: 'Sleeping Time',
      id: '111ff111',
      completed: false,
    },
    {
      title: 'Walk for one Hour!',
      id: '1111ss11',
      completed: false,
    },
    {
      title: 'Swimming',
      id: '111aa111',
      completed: false,
    },
    {
      title: 'Biking',
      id: '1111gg11',
      completed: false,
    },
    {
      title: 'Gaming',
      id: '1ee11111',
      completed: false,
    },
  ]);

  return (
    <Container className='App'>
      <AddTodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
      <CompletedTodos todos={todos} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 600px;
  margin: auto;
  border: 1px solid lightGray;
`;
