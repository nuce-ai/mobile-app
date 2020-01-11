import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity,Text } from 'react-native';


export default class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <TouchableOpacity
            style = {styles.button}
            onPress = {this.props.event}
        >
          <Text 
            style = {styles.text}
          >{this.props.content}</Text>
        </TouchableOpacity>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  button : {
    backgroundColor : "#047BF9",
    padding : 10,
    borderRadius :  19,
    width : 139,
    height : 37,
  },
  text : {
    color : '#ffffff',
    textAlign : "center",
  }
})