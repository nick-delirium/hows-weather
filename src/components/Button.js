import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const StyledButton = styled.button`
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
  const handleClick = () => {
    props.inProgress(true);
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
      axios.get('http://localhost:8085/api/ip').then(r => {
        // const { ip } = r.data;
        // props.changeIp(ip); find loc by ip
        props.changeFinishSt(true)
        props.inProgress(false);
      });
    }
  };
  return <StyledButton onClick={handleClick}> Как погодка? </StyledButton>
};

export default Button;
