import React from 'react';
import styled from 'styled-components';

function Announcement() {
  return <Container>super Deal! Free Shipping on Orders over $50</Container>;
}
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export default Announcement;
