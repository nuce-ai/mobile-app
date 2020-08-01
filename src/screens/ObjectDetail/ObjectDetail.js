import React, { Component } from 'react'
import {View,Alert,StyleSheet,Text,
    Image,ImageBackground,Dimensions,TouchableOpacity, TextInputComponent,
    SafeAreaView, ScrollView
} from 'react-native';
import {Block} from '../../components';
import {SIZES} from '../../components/theme';
import ButtonComponent from '../../components/Button.component'
import image from '../../constants/image'
import {theme} from '../../constants'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Svg,Circle} from 'react-native-svg'
import Picture from '../../constants/image'
import MagicDot from '../../components/MagicDot.component'
import {withRouter} from 'react-router';
// import Data from '../../constants/data';
import TextComponent from '../../components/Text'
import * as Speech from 'expo-speech';
class ObjectDetail extends Component {

    getId = (location) => {
        const re = /\d+/
        return location.match(re)[0]
    }
    speaker = (text) => {
        Speech.speak(text);
    }
    convertString = (text) => {
        return text.replace("_"," ");
    }
   render() {
       console.log(this.props)
        let id = this.getId(this.props.location.search)
        let Data = this.props.camera.data;
        return (
            <Block safe>
                <Block flex={false}>                 
                        <TouchableOpacity
                        style = {{alignItems : 'flex-start', marginLeft : 10,marginBottom:10}}
                        onPress={()=>{this.props.history.push("/home/list-object")}}
                        > 
                        <Image source={Picture.icon.back} style={{width: 30,height: 30}}/>
                        
                        </TouchableOpacity>
                </Block>
                <SafeAreaView>
                    <ScrollView>
                    {Data.length !== 0 &&
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
                    
                        <Image source={{uri: `data:image/gif;base64,${Data[id].image}`}} style={{
                                resizeMode: 'stretch',
                                width:width/2 + 130 ,
                                height:height/2 + 100,
                                borderRadius : 37,
                                
                            }}/>
                        </Block>
                        <Block row flex={false} center middle style={{marginBottom:20}}>     
                                <View style={{marginRight:10}} center middle>
                                    <TextComponent bold size={30}>{this.convertString(Data[id].label)}</TextComponent>
                                    {/* <TextComponent center>ˈpätid plant</TextComponent>  */}
                                </View>  
                                <TouchableOpacity
                                    onPress={() => this.speaker(this.convertString(Data[id].label))}
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
                <Block flex={false} center middle>  
                        <View style={{width :width - 50}}>
                            <Text   
                             
                                
                                >{this.props.camera.image_info.object_content}
                            </Text>
                        </View>                
                            
                </Block>
                    </ScrollView>
                </SafeAreaView>
                
            </Block>
        )
    }
}

const {height,width} = Dimensions.get('window');
const mapStateToProps = (state) =>{
    return ({
      camera : state.camera,
    })
  }
  const connectObjectDetail = connect(mapStateToProps)(ObjectDetail);
export default withRouter(connectObjectDetail)