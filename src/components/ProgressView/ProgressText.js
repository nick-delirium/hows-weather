import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  color: rgba(255,255,255, 0.7);
  font-size: 1.2rem;
  margin-top:0px;
`;

const ProgressText = ({ children }) => (
  <Text>
    {children}
  </Text>
);

ProgressText.propTypes = ({
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
});

export default ProgressText;
