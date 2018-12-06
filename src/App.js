import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Button } from './containers/Button';
import { Results } from './containers/Results';
import { ProgressView } from './containers/ProgressView';

const Layout = styled.div`
  background: linear-gradient(to right, purple, #ff93a6);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

class App extends React.Component {
  render() {
    return (
      <Layout>
        {this.props.appState.finished && this.props.weather.length > 0 ? <Results /> : <Button />}
        {this.props.appState.progress && <ProgressView />}
      </Layout>
    );
  }
}

const mapStateToProps = ({ appState, weather }) => ({ appState, weather });

export default connect(mapStateToProps)(App);
