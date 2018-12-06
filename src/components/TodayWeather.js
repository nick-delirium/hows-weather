import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TodayLayout = styled.div`
 display: flex;
 flex: 1;
 justify-content: center;
`;
const CenterCol = styled.div`
  width: 80%
  order: 1;
  text-align: center;
  border-right: 1px solid rgba(0,0,0, 0.1);
  p {
    margin: 2.5px 0px;
  }
`;
const RightCol = styled.div`
  width: 20%;
  order: 2;
  text-align: center;
  p {
    margin-top: 0px;
  }
`;

const weatherIconPath = (name) => {
  return `https://www.metaweather.com/static/img/weather/${name}.svg`
}
const getRussianDirection = (dir) => {
    if (dir > 315 || (dir < 45 && dir >= 0)) {
      return 'северный';
    }
    else if (dir > 45 && dir < 135) {
      return 'восточный';
    }
    else if (dir > 135 && dir < 225) {
      return 'южный'
    }
    else if (dir > 225 && dir < 315) {
      return 'западный';
    }
}

const TodayWeather = ({ props }) => (
  <TodayLayout>
    <CenterCol>
      <p>Сегодня температура будет от {props.min_temp.toFixed(1)}°C и до {props.max_temp.toFixed(1)}°C. </p>
      <p> Ветер {getRussianDirection(props.wind_direction)}, {(props.wind_speed * 0.44704).toFixed(1) }м/с </p>
    </CenterCol>
    <RightCol>
      <img src={weatherIconPath(props.weather_state_abbr)} alt={props.weather_state_name} width='32px'/>
      <p>{props.the_temp.toFixed(1)}°C</p>
    </RightCol>
  </TodayLayout>
)

TodayWeather.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number,
    weather_state_name: PropTypes.string,
    weather_state_abbr: PropTypes.string,
    wind_direction_compass: PropTypes.string,
    created: PropTypes.string,
    applicable_date: PropTypes.string,
    min_temp: PropTypes.number,
    max_temp: PropTypes.number,
    the_temp: PropTypes.number,
    wind_speed: PropTypes.number,
    wind_direction: PropTypes.number,
    air_pressure: PropTypes.number,
    humidity: PropTypes.number,
    visibility: PropTypes.number,
    predictability: PropTypes.number
  })
}

export default TodayWeather;