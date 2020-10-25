import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

function Todo({ todo }) {
  return (
    <Container>
      {todo}
      <Button>Remove</Button>
    </Container>
  );
}

export default Todo;

const Container = styled.div``;
