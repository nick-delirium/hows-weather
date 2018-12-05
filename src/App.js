import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Button } from './containers/Button';
import { Results } from './containers/Results';
import ProgressView from './components/ProgressView';

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
        {this.props.appState.finished ? <Results /> : <Button />}
        {this.props.appState.progress && <ProgressView />}
      </Layout>
    );
  }
}

const mapStateToProps = ({ appState }) => ({ appState });

export default connect(mapStateToProps)(App);
