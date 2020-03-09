import {View,Alert,StyleSheet,Text,Image,ImageBackground,Dimensions,TouchableOpacity, TextInputComponent} from 'react-native';
import {Block} from '../../components';
import TextComponent from '../../components/Text'
import {SIZES} from '../../components/theme';
import ButtonComponent from '../../components/Button.component'
import image from '../../constants/image';
import {theme} from '../../constants'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Svg,Circle} from 'react-native-svg'
import Picture from '../../constants/image'
import MagicDot from '../../components/MagicDot.component'
import {withRouter} from 'react-router';
import * as Speech from 'expo-speech';
import React, { Component } from 'react'

export default class TestSpeak extends Component {
    speaker = () => {
        console.log("speak")
        Speech.speak("Do you something about");
        
    }

    render() {
        return (
            <Block safe>
                <TouchableOpacity
                    onPress={this.speaker}
                >
                                    <Image
                                        source={Picture.icon.volume}
                                        style={{
                                            width:30,height:30
                                    }}
                                    />  
                                </TouchableOpacity> 
            </Block>
        )
    }
}
