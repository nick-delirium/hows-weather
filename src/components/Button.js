import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const StyledButton = styled.button`
  background-color: #FFDE02;
  font-weight: bold;
  color: black;
  border-radius: 17px;
  font-size: 1rem;
  padding: 7px;
  cursor: pointer;
  border: 1px solid #C8A331;
`;

const Button = ({ props }) => {
  console.log(props)
  const handleClick = () => {
    props.inProgress(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const { latitude, longitude } = pos.coords;
          props.inProgress(false);
          props.changeLocation({ latitude, longitude });
        },
        () => {
          props.inProgress(false);
        }
      );
    } else {
      axios.get('http://localhost:8085/api/ip').then(r => {
        const { ip } = r.data;
        props.changeIp(ip);
        props.inProgress(false);
      });
    }
  };
  return <StyledButton onClick={handleClick}> Как погодка? </StyledButton>
};

export default Button;
