import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity,Text, ImageBackground } from 'react-native';
import {Block} from './index';
import LottieView from 'lottie-react-native'
import picture from '../constants/image'
export default class LoadingOverlay extends Component {
    

    render() {
        return (
            <View>          
                    <LottieView
                        source={require('../assets/lottiefiles/trail-loading.json')}
                        autoPlay
                        
                        resizeMode="center"
                        // style={{width:350}}
                    />   
      
            </View>
        )
    }
}
const styles = StyleSheet.create({
    lottie: {
      width: 100,
      height: 100
    }
  });