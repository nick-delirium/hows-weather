import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  background-color: white;
  border-radius: 17px;
  max-width: 95vw;
  padding: 10px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const CardEl = ({ children }) => (
  <Card>
    {children}
  </Card>
);

CardEl.propTypes = ({
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
});

export default CardEl;
