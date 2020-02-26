import React, { Component } from 'react'
import {View,Alert,StyleSheet,Text,Image,ImageBackground,Dimensions,TouchableOpacity} from 'react-native';
import {Block} from '../../components';
import {SIZES} from '../../components/theme';
import ButtonComponent from '../../components/Button.component'
import image from '../../constants/image';
import {theme} from '../../constants'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Svg,Circle} from 'react-native-svg'
import Picture from '../../constants/image'
import MagicDot from '../../components/MagicDot.component'
export default class ProcessingScreen extends Component {

    constructor(props) {

        super(props)
        
        this.myComponent = React.createRef()
    }
    
   render() {
        
        return (
            <Block>
                <ImageBackground
                    source={Picture.picture.object_recongition}
                    style={{width : width,height : height}}
                >  
                
                {/* <MagicDot
                    x = {100}
                    y = {300}
                    color = '#ffffff'
                /> */}
                </ImageBackground>
            </Block>
        )
    }
}

const {height,width} = Dimensions.get('window');