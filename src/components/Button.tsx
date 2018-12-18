import * as React from 'react';
import styled from 'styled-components';

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

export interface Props {
  findWeather: Function
}

const Button: React.SFC<Props> = ({ findWeather }) => {
  const handleClick = () => {
    findWeather();
  };
  return <StyledButton onClick={handleClick}> Как погодка? </StyledButton>;
};

export default Button;
