import React, { Component } from 'react'
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
class ProcessingScreen extends Component {
    speaker = () => {
        Speech.speak(this.props.camera.data[0].label);
    }
   render() {
        // console.log("Line 20 : day la man hinh",Object.keys(this.props.camera.data[0])
        console.log(this.props.camera.data)
        return (
            <Block safe>
                <Block flex={false}>                 
                        <TouchableOpacity
                        style = {{alignItems : 'flex-start', marginLeft : 30,marginBottom:10}}
                        onPress={()=>{this.props.history.push("/home/camera")}}
                        > 
                        <Image source={Picture.icon.back} style={{width: 30,height: 30}}/>
                        
                        </TouchableOpacity>
                </Block>
                {this.props.camera.data.length !== 0 &&
                <Block center>
                        <Block flex={false}
                            style={{
                                width:width/2 + 130 ,
                                height:height/2 + 130,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.32,
                                shadowRadius: 5.46,
                                borderRadius : 37,
                                elevation: 9,
                                
                            }}
                        >
                    
                        <Image source={{uri: `data:image/gif;base64,${this.props.camera.data[0].image}`}} style={{
                                resizeMode: 'stretch',
                                width:width/2 + 130 ,
                                height:height/2 + 100,
                                borderRadius : 37,
                                
                            }}/>
                        </Block>
                        <Block row flex={false} center middle style={{marginBottom:20}}>     
                                <View style={{marginRight:10}} center middle>
                                    <TextComponent bold size={30}>{this.props.camera.data[0].label}</TextComponent>
                                    {/* <TextComponent center>dôg</TextComponent>  */}
                                </View>  
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
                        
                        
    
                  
                </Block>
   }
                {/* <Block flex={false} center>                  
                            <Text>Menu Component</Text>
                </Block> */}
            </Block>
        )
    }
}

const {height,width} = Dimensions.get('window');
const mapStateToProps = (state) =>{
    return ({
      camera : state.camera
    })
  }
  const connectProcessingScreen = connect(mapStateToProps)(ProcessingScreen);
export default withRouter(connectProcessingScreen)