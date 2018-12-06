import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../containers/Button';
import Results from '../containers/Results';
import ProgressView from '../containers/ProgressView';

const Layout = styled.div`
  background: linear-gradient(to right, purple, #ff93a6);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const App = ({ appState, weather }) => (
  <Layout>
    {appState.finished && weather.length > 0 ? <Results /> : <Button />}
    {appState.progress && <ProgressView />}
  </Layout>
);

App.propTypes = ({
  appState: PropTypes.shape({
    finished: PropTypes.bool,
    progress: PropTypes.bool,
  }).isRequired,
  weather: PropTypes.arrayOf(PropTypes.object).isRequired,
});

export default App;
