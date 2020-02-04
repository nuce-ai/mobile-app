import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image, Dimensions } from 'react-native';
import * as MediaLibrary from 'expo-media-library'
import {Camera} from 'expo-camera';

import * as Permissions from 'expo-permissions';
import * as cameraReducer from '../redux/reducers/CameraReducer/camera.reducer'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class CameraExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollGranted: false,
      cameraGranted: false,
      path : null,
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
  renderCamera = () => {
    return (
      <View style={styles.container}>
        <Camera
          type={Camera.Constants.Type.back}
          style={{ flex: 1 }}
          ref={ref => {
            this.camera = ref;
          }}
        />
        <TouchableOpacity
          onPress={() =>
            this.state.rollGranted && this.state.cameraGranted
              ? this.takePictureAndCreateAlbum()
              : Alert.alert('Permissions not granted')
          }
          style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Snap
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  renderImage() {
    console.log("line 59",this.state.path)
    return (
      <View>
        <Image
          source={{uri : this.state.path}}
          style={styles.preview}
        />
        <Text
          style={styles.cancel}
          onPress={() => this.setState({ path: null })}
        >Cancel
        </Text>
      </View>
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
  }
  handleObjectDetected = () => {
    // TODO:
  }


  takePictureAndCreateAlbum = async () => {
    this.props.cameraAction.processRequest()
    console.log('tpaca');
    const { uri } = await this.camera.takePictureAsync();
    console.log('uri', uri);
    this.setState({ path : uri})
    const asset = await MediaLibrary.createAssetAsync(uri);
    console.log('asset', asset);
    MediaLibrary.createAlbumAsync('Expo', asset)
      .then((result) => {
        console.log(result)
      })
      .catch(error => {
        Alert.alert('An Error Occurred!')
      });
  };

  render() {
    console.log("path ",this.state.path)
    return (
      <React.Fragment>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </React.Fragment>
        
    );
  }
}

const styles = StyleSheet.create({
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
    width: 200,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingVertical: 4,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  preview: {
    width : "100%",
    height: "100%",
  },
  cancel: {
    position: 'absolute',
    right: 20,
    top: 20,
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
export default connectCameraScreen
