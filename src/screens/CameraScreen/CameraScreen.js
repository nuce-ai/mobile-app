import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity, Alert, Image, Dimensions ,ImageBackground,ActivityIndicator} from 'react-native';
import * as MediaLibrary from 'expo-media-library'
import {Camera} from 'expo-camera';
import {Block,Button,Card,Input,Text} from '../../components/index'
import * as Permissions from 'expo-permissions';
import * as cameraReducer from '../../redux/reducers/CameraReducer/camera.reducer'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Picture from '../../constants/image';
import Spinner from 'react-native-loading-spinner-overlay';
import {withRouter} from 'react-router'
class CameraExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollGranted: false,
      cameraGranted: false,
      path : null,
      type : true,
      flash : false,
      // path : 'file:///Users/hoando/Library/Developer/CoreSimulator/Devices/45C583E8-5C73-40D8-9E4A-460A22CE912C/data/Containers/Data/Application/243D3B46-DBCA-4FAC-ACA1-F2191A248EC8/Library/Caches/ExponentExperienceData/%2540anonymous%252FMobileApp-5ec18f9d-4589-41a0-8a0b-b0bed965a2c0/Camera/FF837BCB-6390-4EC0-8F0A-44BC8C2ED10F.jpg'
    };
  }
  
  componentDidMount() {
    this.getCameraPermissions();
  }

  async getCameraPermissions() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
      this.setState({ cameraGranted: true });
    } else {
      this.setState({ cameraGranted: false });
      console.log('Uh oh! The user has not granted us permission.');
    }
    this.getCameraRollPermissions();
  }
  handleCameraFlip = () => {
    this.setState({
      type : !this.state.type
    })
  }
  handleCameraFlash = () => {
    this.setState({ 
      flash : !this.state.flash
    })
  }
  renderCamera = () => {
    return (
      <Block>
        <Camera
          type={this.state.type ? Camera.Constants.Type.back : Camera.Constants.Type.front}
          flashMode={this.state.flash ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off}
          whiteBalance = {Camera.Constants.WhiteBalance.auto}

          style={{flex:1,justifyContent: 'space-between' }}
          ref={ref => {
            this.camera = ref;
          }}
        >   
         <Block safe row flex={false}>
           <Block column>
            <TouchableOpacity
              style = {{alignItems : 'flex-start', marginLeft : 30}}
              onPress = {this.handleCameraFlash}
              > 
              <Image source={Picture.icon.lightning} style={{width: 30,height: 30}}/>
              </TouchableOpacity>
           </Block>
           
          <Block column>
            <TouchableOpacity
            style={{alignItems: 'flex-end',marginRight: 30}}
            onPress = {this.handleCameraFlip}
            >
              <Image source={Picture.icon.flip} style={{width: 30,height: 30}}/>
            </TouchableOpacity>
          </Block> 
         </Block>
        <Block bottom style={{position: 'absolute',bottom : 0,width: "100%",marginBottom : 20}} center>
          <ImageBackground 
            source={Picture.icon.eclipse} 
            style={{width : 80,height : 80}}>
            <Block middle center margin>
              <TouchableOpacity
              onPress={() =>
                this.state.rollGranted && this.state.cameraGranted
                  ? this.takePictureAndCreateAlbum()
                  : Alert.alert('Permissions not granted')
              }
              >
                <Image source={Picture.icon.eclipseCircle} style={{height:60,width:60}}/>
              </TouchableOpacity>
            </Block>
            
          </ImageBackground>
          {/*  */}
        </Block>
        
        </Camera>
      </Block>
    );
  }
  renderImage() {
    console.log(this.props.camera.isRequest)
    return (
      <Block>
        <Spinner
          visible={this.props.camera.isRequest}
          textStyle={styles.spinnerTextStyle}
          animation={"none"}
        />
        <ImageBackground
          source={{uri : this.state.path}}
          style={styles.preview}
        />
        <Block bottom row flex={false}>
            <Block column center black 
            style={{padding : 30,borderTopLeftRadius: 35}}
            >
              <TouchableOpacity
               onPress = {this.handleBack}
              >
                  <Image
                    source={Picture.icon.leftArrow}
                    style={{width : 35,height : 35}}
                  /> 
              </TouchableOpacity>               
                </Block>
                <Block column center black style={{padding : 30}}>
                  <TouchableOpacity
                    onPress = {this.handleObjectDetected}
                  >
                    <Image
                      source={Picture.icon.magicWand}
                      style={{width : 35,height : 35}}
                    /> 
                  </TouchableOpacity>
                </Block>
                <Block column center black style={{padding : 30,borderTopRightRadius: 35}}>
                  <TouchableOpacity
                    onPress = {this.handleSaveImage}
                  >
                    <Image
                      source={Picture.icon.download}
                      style={{width : 35,height : 35}}
                    /> 
                  </TouchableOpacity>             
                </Block>
        </Block>
      </Block>
    );
  }

  async getCameraRollPermissions() {
   
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      this.setState({ rollGranted: true });
    } else {
      console.log('Uh oh! The user has not granted us permission.');
      this.setState({ rollGranted: false });
    }
  }
  handleSaveImage  = async () => {
    // TODO:
    let uri = this.state.path;
    const asset = await MediaLibrary.createAssetAsync(uri);
    console.log('asset', asset);
    MediaLibrary.createAlbumAsync('Expo', asset)
      .then((result) => {
        console.log(result)
        Alert.alert('Save image successfully')
      })
      .catch(error => {
        Alert.alert('An Error Occurred!')
      });
  }
  
  handleObjectDetected = () => {
    this.props.cameraAction.processRequest({path:this.state.path,callback:this.AlertSuccess})
    // this.props.history.push("/home/after-processing")
  }
  AlertSuccess = () => {
    this.props.history.push("/home/after-processing")
}
 handleBack = () => {
   this.setState({
    path : null,
  })
 }

  takePictureAndCreateAlbum = async () => {
   
    console.log('tpaca');
    const { uri } = await this.camera.takePictureAsync();
    console.log('uri', uri);
    this.setState({ path : uri})
    
    
  };
  render() {
    console.log(height);
    console.log(width);
    return (
      <React.Fragment>
        {this.state.path ? this.renderImage() : this.renderCamera()}
        {/* {this.renderImage()} */}
      </React.Fragment>
        
    );
  }
}
const {height,width} = Dimensions.get('window');
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingVertical: 4,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',

  },
  preview: {
    flex : 1,
    width : width,
    height: height,
  },
  cancel: {
    position: 'absolute',
    right: 20,
    top: 50,
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '600',
    fontSize: 17,
  }


});


const mapStateToProps = (state) =>{
  return ({
    camera : state.camera
  })
}
const mapDispatchToProps = (dispatch) => {
  return {
    cameraAction : bindActionCreators(cameraReducer.actions.camera,dispatch)
  }
}
const connectCameraScreen = connect(mapStateToProps,mapDispatchToProps)(CameraExamples);
export default withRouter(connectCameraScreen)
