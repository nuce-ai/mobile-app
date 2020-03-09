import React, { Component } from 'react'
import {Text,StyleSheet,View} from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import WalkthroughtScreen from '../screens/WalkthroughtScreen/WalkthroughtScreen';
import ProcessingScreen from '../screens/ProcessingScreen/ProcessingScreen';
import AfterSelectScreen from '../screens/AfterSelectScreen/AfterSelectScreen';
import { NativeRouter,Switch,Redirect,Route} from 'react-router-native';
import Home from '../layout/home';

export default class Index extends Component {
    
    render() {
        return (
            <NativeRouter>
                <Switch>
                    <Route path='/home' render={props => <Home {...props}/>}/>
                    <Route path="/walkthrought" render={props => <WalkthroughtScreen {...props}/>}/>
                    {/* <Redirect from="/" to="home/camera"/> */}
                    <Redirect from="/" to="/walkthrought"/>
                </Switch>
            </NativeRouter>
            // <View style={styles.container}>
            //    {/* <WalkthroughtScreen/> */}
            //     <CameraComponent/>
            //     {/* <ProcessingScreen/> */}
            //     {/* <AfterSelectScreen/> */}
                
            // </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9FBFC',
    },
  });