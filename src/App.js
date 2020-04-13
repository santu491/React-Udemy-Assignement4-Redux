import React, { Component } from 'react';

import Persons from './containers/Persons';
import { Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './redux/reducer'

const store=createStore(reducer)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <ol>
          <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
        </ol>
        <Persons />
      </div>
      </Provider>
    );
  }
}

export default App;
