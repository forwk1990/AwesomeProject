/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import Entry from './app/entry';
import {AppRegistry} from 'react-native'

export default class AwesomeProject extends React.Component {
  render() {
    return (
      <Entry/>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
