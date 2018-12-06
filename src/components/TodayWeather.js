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
  text-align: left;
  border-right: 1px solid rgba(0,0,0, 0.1);
  p {
    margin: 2.5px 0px;
  }
`;
const RightCol = styled.div`
  width: 20%;
  order: 2;
  text-align: center;
  div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    p {
      margin-top: 0px;
    }
  }
`;
const PlacedDiv = styled.div`
  text-align: ${props => (props.center ? 'center' : 'right')};
`;
const PlacedSpan = styled.span`
  font-size: ${props => (props.small ? '0.8rem' : '1.2rem')};
  padding: ${props => (props.padding ? '5px' : '5px 5px 0px')};
`;

const weatherIconPath = name => `https://www.metaweather.com/static/img/weather/${name}.svg`;

const getRussianDirection = (dir) => {
  if (dir > 315 || (dir < 45 && dir >= 0)) {
    return 'северный';
  }
  if (dir > 45 && dir < 135) {
    return 'восточный';
  }
  if (dir > 135 && dir < 225) {
    return 'южный';
  }
  if (dir > 225 && dir < 315) {
    return 'западный';
  }
  return '???';
};
const monthNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const d = new Date();

const TodayWeather = ({
  min_temp,
  max_temp,
  the_temp,
  weather_state_abbr,
  weather_state_name,
  wind_direction,
  wind_speed,
  humidity,
  air_pressure,
  predictability,
}) => (
  <TodayLayout>
    <CenterCol>
      <PlacedDiv center>
        <PlacedSpan padding>
          {monthNames[d.getMonth()]}
          ,
          {d.getDate()}
        </PlacedSpan>
      </PlacedDiv>
      <p>
        Сегодня температура будет от
        {min_temp.toFixed(1)}
        °C и до
        {max_temp.toFixed(1)}
        °C.
      </p>
      <p>
        Ветер
        {getRussianDirection(wind_direction)}
        ,
        {(wind_speed * 0.44704).toFixed(1)}
        м/с.
      </p>
      <p>
        Влажность:
        {humidity}
        %, давление воздуха:
        {(air_pressure * 0.750062).toFixed(1)}
        мм рт ст.
      </p>
      <PlacedDiv align="right">
        <PlacedSpan small>
          Точность прогноза:
          {predictability}
          %
        </PlacedSpan>
      </PlacedDiv>
    </CenterCol>
    <RightCol>
      <div>
        <img
          src={weatherIconPath(weather_state_abbr)}
          alt={weather_state_name}
          width="32px"
        />
        <p>
          {the_temp.toFixed(1)}
          °C
        </p>
      </div>
    </RightCol>
  </TodayLayout>
);

TodayWeather.propTypes = {
  weather_state_name: PropTypes.string.isRequired,
  weather_state_abbr: PropTypes.string.isRequired,
  min_temp: PropTypes.number.isRequired,
  max_temp: PropTypes.number.isRequired,
  the_temp: PropTypes.number.isRequired,
  wind_speed: PropTypes.number.isRequired,
  wind_direction: PropTypes.number.isRequired,
  air_pressure: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  predictability: PropTypes.number.isRequired,
};

export default TodayWeather;
