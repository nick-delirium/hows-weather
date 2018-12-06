import React from 'react';
import styled from 'styled-components';

import ProgressBackground from './ProgressBackground';
import ProgressIcon from './ProgressIcon';
import ProgressText from './ProgressText'

const Centered = styled.div`
  position: fixed;
  top: calc(50% + 32px);
  text-align: center;
  width: 100%;
`;

const ProgressView = props => (
  <ProgressBackground>
    <ProgressIcon />
    <Centered>
      {props.appState.state.map((event, i) => (
        <ProgressText key={i}>{event}</ProgressText>
      ))}
    </Centered>
  </ProgressBackground>
);

export default ProgressView;