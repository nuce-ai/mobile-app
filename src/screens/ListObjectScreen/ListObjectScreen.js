import React, { Component } from 'react'
import {View,Alert,StyleSheet,Text,Image,ImageBackground,Dimensions,
    TouchableOpacity, TextInputComponent,SafeAreaView, ScrollView} from 'react-native';
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
import Data from '../../constants/data'
class ListObjectScreen extends Component {
    speaker = () => {
        Speech.speak(this.props.camera.data[0].label);
    }
    handleGetDetail = (id) => {
        // console.log(e);
        this.props.history.push(`/home/object-detail?id=${id}`)
    }
   render() {
        // console.log("Line 20 : day la man hinh",Object.keys(this.props.camera.data[0])
        console.log(this.props.camera.data)
        return (
            <Block safe>
                <Block flex={false} marginBottom = {10}>           
                   
                        <TouchableOpacity
                                style = {{alignItems : 'flex-start', marginLeft : 10,marginBottom:10}}
                                onPress={()=>{this.props.history.push("/home/camera")}}
                                > 
                                <Image source={Picture.icon.back} style={{width: 30,height: 30}}/>

                        </TouchableOpacity>
                         
                        <TextComponent
                           size = {20}
                           bold
                           center
                        style={{marginTop : 2}}
                        >
                            DANH SÁCH ĐỐI TƯỢNG 
                        </TextComponent>
                </Block>
                {this.props.camera.data.length === 0 &&
                <Block flex={true} center>      
                        <ImageBackground source={Picture.icon.unknown}
                            style={{
                                width : width,
                                height : height,
                            }}
                        ></ImageBackground>
                </Block>
                }
                {
                    this.props.camera.data.length !== 0 && 
                    <SafeAreaView >
                <ScrollView>
                <Block center>

                
                {
                 this.props.camera.data.map((value,index)=>{
                   
                    return(
                    <TouchableOpacity key={index}
                    onPress={() => this.handleGetDetail(index)}
                    >

                   
                        <Image 
                            source={{uri: `data:image/gif;base64,${value.image}`}} 
                            style={{
                                resizeMode: 'stretch',
                                width:width/2 + 130 ,
                                height:height/2 + 100,
                                borderRadius : 37,
                                marginBottom: 10,
                                
                            }}/>
                    </TouchableOpacity>
                         )
                 })
                }
                </Block>
                </ScrollView>
                </SafeAreaView>

                }


                {/* <SafeAreaView >
                <ScrollView>
                <Block center>

                
                {
                 Data.payload.map((value,index)=>{
                   
                    return(
                    <TouchableOpacity key={index} 
                    onPress={() => this.handleGetDetail(index)}>

                   
                        <Image 

                            source={{uri: `data:image/gif;base64,${value.image}`}} 
                            style={{
                                resizeMode: 'stretch',
                                width:width/2 + 130 ,
                                height:height/2 + 100,
                                borderRadius : 37,
                                marginBottom: 10,
                                
                            }}/>
                    </TouchableOpacity>
                         )
                 })
                }
                </Block>
                </ScrollView>
                </SafeAreaView> */}
                
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
  const connectListObjectScreen = connect(mapStateToProps)(ListObjectScreen);
export default withRouter(connectListObjectScreen)