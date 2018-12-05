import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 95%;
  text-align: center;
`;
const List = styled.ul`
  display: grid;
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
const Card = styled.div`
  background-color: white;
  border-radius: 17px;
  padding: 10px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
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

const Results = props => (
  <Container>
    <h2> {props.appState.city} </h2>
    <Card>{JSON.stringify(props.weather[0], null, 4)}</Card>
    <List>
      {props.weather.slice(1,5).map((day, i) => (
        <ListItem key={i}>
          <Card>
            <LeftCol>
              <img src={weatherIconPath(day.weather_state_abbr)} alt={day.weather_state_name} width='32px'/>
              {day.the_temp.toFixed(1)}C
            </LeftCol>
            <CenterCol>
              <p> от {day.min_temp.toFixed(1)} до {day.max_temp.toFixed(1)} </p>
              <p> Ветер {(day.wind_speed * 0.44704).toFixed(1) }м/с </p>
            </CenterCol>
            <RightCol>
              
              {day.applicable_date}
            </RightCol>
          </Card>
        </ListItem>
      ))}
    </List>
  </Container>
);

Results.propTypes = {
  weather: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Results;
