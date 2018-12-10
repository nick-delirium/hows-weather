import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.a`
  background-color: #ffde02;
  color: black;
  border-radius: 17px;
  font-size: 1.5rem;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #c8a331;
  &:focus {
    outline: none;
  }
`;

const Button = ({ findWeather }) => {
  const handleClick = () => {
    findWeather();
  };
  return <StyledButton onClick={handleClick}> Как погодка? </StyledButton>;
};

Button.propTypes = ({
  findWeather: PropTypes.func.isRequired,
});

export default Button;
