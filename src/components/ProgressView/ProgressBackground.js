import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const ProgressBackground = ({children}) => (
  <Background> {children} </Background>
)

export default ProgressBackground;