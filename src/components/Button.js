import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.a`
  background-color: #FFDE02;
  color: black;
  border-radius: 17px;
  font-size: 1.5rem;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #C8A331;
  &:focus {
    outline: none
  }
`;

const Button = props => {
  const handleClick = (event) => {
    props.inProgress(true);
    props.appState('Ищем Вас')
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const { latitude, longitude } = pos.coords;
          props.setWeather({ latitude, longitude });
        },
        () => {
          props.inProgress(false);
        }
      );
    } else {
      alert('Геолокация недоступна.')
    }
  };
  return <StyledButton onClick={handleClick}> Как погодка? </StyledButton>
};

export default Button;
