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

const Button = ({ inProgress, appState, setWeather }) => {
  const handleClick = () => {
    inProgress(true);
    appState('Ищем Вас');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setWeather({ latitude, longitude });
        },
        () => {
          alert('Геолокация недоступна.');
          inProgress(false);
        },
      );
    } else {
      alert('Геолокация недоступна.');
    }
  };
  return <StyledButton onClick={handleClick}> Как погодка? </StyledButton>;
};

Button.propTypes = ({
  inProgress: PropTypes.func.isRequired,
  appState: PropTypes.func.isRequired,
  setWeather: PropTypes.func.isRequired,
});

export default Button;
