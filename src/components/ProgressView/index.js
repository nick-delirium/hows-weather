import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProgressBackground from './ProgressBackground';
import ProgressIcon from './ProgressIcon';
import ProgressText from './ProgressText';

const Centered = styled.div`
  position: fixed;
  top: calc(50% + 32px);
  text-align: center;
  width: 100%;
`;

const ProgressView = ({ appState }) => (
  <ProgressBackground>
    <ProgressIcon />
    <Centered>
      {appState.state.map((event, i) => (
        <ProgressText key={i}>{event}</ProgressText>
      ))}
    </Centered>
  </ProgressBackground>
);

ProgressView.propTypes = ({
  appState: PropTypes.shape({
    state: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
});

export default ProgressView;
