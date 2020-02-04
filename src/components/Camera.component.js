import React from 'react';
import { Text, View, TouchableOpacity ,Image,ImageBackground} from 'react-native';
import * as Permissions from 'expo-permissions';
import image from '../constants/image'
import { Camera } from 'expo-camera';
import { Block} from '../components';
// import SVG from 'react-native-svg-uri'
// import Ellipse from '../assets/images/screen-home/Ellipse.png'
import * as FileSystem  from 'expo-file-system'
export default class CameraExample extends React.Component {
  
   state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      flashMode : Camera.Constants.FlashMode.off,
      photo : '',
    };

    camera = React.createRef() 


  onPictureSaved  = async filePath => {
    console.log(filePath)
    FileSystem.makeDirectoryAsync('file:///Users/hoando/project/mobile-app/images/')
    // console.log(FileSystem.documentDirectory)
    FileSystem.moveAsync({
      from: filePath.uri,
      to: 'file:///Users/hoando/project/mobile-app/images/'
    })
    
  }
  
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  snap = async () => {
    if(this.camera){
      const options = {
        quality: 1,
        base64 : false,
        onPictureSaved : this.onPictureSaved
       }
      let photo = await this.camera.takePictureAsync(options)
  
  }
}
  render() {

   console.log("line 40",this.state.photo)
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <Block style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} 
            type={this.state.type}
            flashMode = {this.state.flashMode}
            ref = {ref => {
              this.camera = ref
            }}
          >
            <Block safe flex
              marginTop = {50}
              marginRight = {25}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Image
                style={{
                  width : 25,
                  height : 25,
                }} 
                source={image.icon.flip}/>
              </TouchableOpacity>
            </Block>
            <Block safe bottom center>
                <ImageBackground 
                  style={{
                    flexWrap : 'wrap',
                    width : 80,
                    height : 80,
              
                  }}
                  source={require('../assets/images/screen-home/Ellipse.png')}
                >
                  <Block center middle>           
                    <TouchableOpacity
                      onPress={this.snap}
                    >
                        <Image
                        style={{               
                          width : 60,
                          height : 60,               
                        }}
                        source={require('../assets/images/screen-home/EllipseCircle3.png')}
                        />
                    </TouchableOpacity>
                  </Block>
              </ImageBackground>
                
                
            </Block>
          </Camera>
        </Block>
      );
    }
  }
}