import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
background-color: white;
border-radius: 17px;
padding: 10px;
display: flex;
height: 100%;
align-items: center;
justify-content: center;
flex: 1;
`;

const CardEl = ({ children }) => (
  <Card> {children} </Card>
)


export default CardEl;