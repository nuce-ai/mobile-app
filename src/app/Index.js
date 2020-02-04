import React, { Component } from 'react'
import {Text,StyleSheet,View} from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
// import WalkthroughtScreen from '../screens/WalkthroughtScreen/WalkthroughtScreen';
import CameraComponent from '../components/Camera.component';
export default class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
               {/* <WalkthroughtScreen/> */}
                <CameraComponent/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9FBFC',
    },
  });