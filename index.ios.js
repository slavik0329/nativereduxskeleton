/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './app/containers/Main';

import { Provider } from 'react-redux'
import configureStore from './app/store/configure-store'

const store = configureStore()
window.reduxStore = store;

export default class nativereduxskele extends Component {
  render() {
    return (
     <Provider store={store}>
       <Main/>
     </Provider>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('nativereduxskele', () => nativereduxskele);
