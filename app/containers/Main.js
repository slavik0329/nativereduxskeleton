'use strict';

import React, {Component} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {incrementCount} from "../actions/main";

class Main extends Component {
  componentDidMount() {
  }

  increment() {
    this.props.dispatch(incrementCount());
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Counter: {this.props.main.counter}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={this.increment.bind(this)}/>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    main: state.main
  }
}

export default connect(mapStateToProps)(Main)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  button: {
    width: 50,
    height: 30,
    backgroundColor: "#eee"
  }

});
