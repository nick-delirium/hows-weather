import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from './Card';

const List = styled.ul`
  display: grid;
  justify-content: center;
  list-style: none;
  grid-template-columns: repeat(auto-fill, 265px);
  grid-auto-flow: dense;
  grid-auto-rows: auto;
  grid-gap: 8px;
`;

const ListItem = styled.li`
  grid-row: span 1;
  border-radius: 10px;
  font-size: 1.1rem;
`;
const LeftCol = styled.div`
  width: 25%;
  order:1;
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
`;

const weatherIconPath = (name) => {
  return `https://www.metaweather.com/static/img/weather/${name}.svg`
}

const ListEl = ({ props }) => (
  <List>
  {console.log(props)}
  {props.map((day, i) => (
    <ListItem key={i}>
      <Card>
        <LeftCol>
          {day.applicable_date}
        </LeftCol>
        <CenterCol>
          <p> от {day.min_temp.toFixed(1)}°C до {day.max_temp.toFixed(1)}°C </p>
          <p> Ветер {(day.wind_speed * 0.44704).toFixed(1) }м/с </p>
        </CenterCol>
        <RightCol>
          <img src={weatherIconPath(day.weather_state_abbr)} alt={day.weather_state_name} width='32px'/>
          {day.the_temp.toFixed(1)}°C
        </RightCol>
      </Card>
    </ListItem>
  ))}
  </List>
)

ListEl.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ListEl;