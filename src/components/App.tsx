import * as React from 'react';
import styled from 'styled-components';

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


export interface Props {
  appState: { finished: boolean, progress: boolean },
  weather: Array<object>,
}


const App: React.SFC<Props> = ({ appState, weather }) => (
  <Layout>
    {appState.finished && weather.length > 0 ? <Results /> : <Button />}
    {appState.progress && <ProgressView />}
  </Layout>
);

export default App;
