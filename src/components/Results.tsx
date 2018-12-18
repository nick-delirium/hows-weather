import * as React from 'react';
import styled from 'styled-components';

import TodayWeather from './TodayWeather';
import List from './List';
import Card from './Card';

const Container = styled.div`
  width: 95%;
  text-align: center;
`;

export interface Props {
  appState: { city: string }
  weather: 
    Array<{
      id: number,
      min_temp: number,
      max_temp: number,
      the_temp: number,
      weather_state_abbr: string,
      weather_state_name: string,
      wind_direction: number,
      wind_speed: number,
      humidity: number,
      air_pressure: number,
      predictability: number
      applicable_date: number,
    }>
}


const Results: React.SFC<Props> = ({ appState, weather }) => (
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

export default Results;
