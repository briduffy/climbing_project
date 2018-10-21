import React, { Component } from 'react';
import Routes from './Routes'
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Segment>
        <Switch>
          <Route exact path='/routes' component={Routes} />
        </Switch>
      </Segment>
    );
  }
}

export default App;