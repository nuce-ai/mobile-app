import React, { Component } from 'react'
import {Text,StyleSheet,View} from 'react-native';
import HomeContainer from '../containers/HomeContainer/HomeContainer'
export default class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
               <HomeContainer/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });