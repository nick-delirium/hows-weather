import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Background = styled.div`
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const ProgressBackground = ({ children }) => (
  <Background>
    {children}
  </Background>
);


ProgressBackground.propTypes = ({
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
});

export default ProgressBackground;
