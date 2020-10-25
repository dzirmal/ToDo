import React from 'react';
import styled from 'styled-components';
import List from './List';

function App() {
  return (
    <Container className='App'>
      <List />
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
