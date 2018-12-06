import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TodayWeather from './TodayWeather';
import List from './List';
import Card from './Card';

const Container = styled.div`
  width: 95%;
  text-align: center;
`;


const Results = props => (
  <Container>
    <h2> {props.appState.city} </h2>
    <Card>
      <TodayWeather props={props.weather[0]} />
    </Card>
    <List props={[...props.weather.slice(1,5)]} />
  </Container>
);

Results.propTypes = {
  weather: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Results;
