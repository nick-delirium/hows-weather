import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const List = styled.ul`
  display: grid;
  padding-left: 0;
  justify-content: center;
  list-style: none;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-auto-flow: dense;
  grid-auto-rows: auto;
  grid-gap: 8px;
`;
const ListItem = styled.li`
  grid-row: span 1;
  border-radius: 10px;
  font-size: 1.1rem;
  max-width: 90vw;
  @media only screen and (max-width: 764px) {
    margin: 0 auto;
    width: 100%;
  }
`;
const LeftCol = styled.div`
  width: 25%;
  order: 1;
  text-align: center;
`;
const CenterCol = styled.div`
  width: 50%
  order: 2;
  text-align: center;
  border-left: 1px solid rgba(0,0,0, 0.1);
  border-right: 1px solid rgba(0,0,0, 0.1);
  p {
    margin: 2.5px 0px;
  }
`;
const RightCol = styled.div`
  width: 25%;
  order: 3;
  text-align: center;
  p {
    margin-top: 0px;
  }
`;

const weatherIconPath = (name: string): string => `https://www.metaweather.com/static/img/weather/${name}.svg`;

export interface Props {
  props: Array<{
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

/* eslint-disable */
// strange eslint behaviour here, .map is method, not prop and props is already destructured
const ListEl: React.SFC<Props> = ({ props }) => (
  <List>
    {props.map(day => (
      <ListItem key={day.id}>
        <Card>
          <LeftCol>
            {day.applicable_date}
          </LeftCol>
          <CenterCol>
            <p>
              от
              {day.min_temp.toFixed(1)}
              °C до
              {day.max_temp.toFixed(1)}
              °C
            </p>
            <p>
              Ветер
              {(day.wind_speed * 0.44704).toFixed(1)}
              м/с
            </p>
          </CenterCol>
          <RightCol>
            <img
              src={weatherIconPath(day.weather_state_abbr)}
              alt={day.weather_state_name}
              width="32px"
            />
            <p>
              {day.the_temp.toFixed(1)}
              °C
            </p>
          </RightCol>
        </Card>
      </ListItem>
    ))}
  </List>
);

export default ListEl;
