import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AppWithNavigationState from './navigator'

export default class App extends React.Component {
  store = configureStore()

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

