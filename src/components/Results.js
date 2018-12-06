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

const Results = ({ appState, weather }) => (
  <Container>
    <h2>
      {appState.city}
    </h2>
    <Card>
      <TodayWeather {...weather[0]} />
    </Card>
    <List props={[...weather.slice(1)]} />
  </Container>
);

Results.propTypes = {
  appState: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
  weather: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Results;
