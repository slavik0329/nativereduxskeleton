'use strict';

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux'
import {incrementCount} from '../actions/main'

var Main = React.createClass({
    componentDidMount() {
    },
    increment() {
      this.props.dispatch(incrementCount());
    },
    render: function () {
        return (
            <View style={styles.container}>
                <Text>Counter:  {this.props.main.counter}</Text>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.increment} />
            </View>
        );
    }
});

function mapStateToProps(state) {
  return {
    main: state.main
  }
}

module.exports = connect(mapStateToProps)(Main)

var styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:20
    },
    button: {
      width: 50,
      height: 30,
      backgroundColor: "#eee"
    }

});
