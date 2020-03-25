import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity,Text, ImageBackground } from 'react-native';
import {Block} from './index';
import LottieView from 'lottie-react-native'
import picture from '../constants/image'
export default class LoadingOverlay extends Component {
    

    render() {
        return (
            <Block>
                <ImageBackground
                source={picture.picture.object_recongition}
                style={{width: '100%', height: '100%'}}
                >
                    <LottieView
                        source={require('../assets/lottiefiles/trail-loading.json')}
                        autoPlay
                        
                        resizeMode="center"
                        // style={{width:350}}
                    />   
                </ImageBackground>
                   
            </Block>
        )
    }
}
const styles = StyleSheet.create({
    lottie: {
      width: 100,
      height: 100
    }
  });