import React, { Component } from 'react'
import { NativeRouter, Route, Link, Redirect } from "react-router-native";
import {AsyncStorage} from 'react-native';
import Routers from '../routes'
export default class Home extends Component {

    constructor(props){
      super(props);
      this.state = {
        show: null
      }
    }
    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('show_walkthrought');
        if (value !== null) {
          // We have data!!
          this.setState({show:value})
          console.log(value)
        }
      } catch (error) {
        // Error retrieving data
      }
    };
    componentDidMount() {
      console.log('run')
      this._retrieveData()
    }
    
    getRoutes = routes => {
      console.log("line 26",this.state.show)
        return routes.map((prop, key) => {
          if (prop.layout === "/home") {
            return (
              this.state.show ? 
              <Route
                path={prop.layout + prop.path}
                render={props => (        
                  <prop.component
                   {...props}           
                  />
                )}
                key={key}
              /> : <Redirect to='/walkthrought'/>
            );
          } else {
            return null;
          }
        });
      }
    render() {
        
        console.log("line 42",this.state.show)
        return (
            <React.Fragment>
                {this.getRoutes(Routers)}
            </React.Fragment>
        )
    }
}
