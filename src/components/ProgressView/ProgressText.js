import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: rgba(255,255,255, 0.7);
  font-size: 1.2rem;
  margin-top:0px;
`;

const ProgressText = ({children}) => (
  <Text>{children}</Text>
)

export default ProgressText;