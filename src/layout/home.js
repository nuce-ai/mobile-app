import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import { NativeRouter, Route, Link, Redirect} from "react-router-native";
import Routers from '../routes'



export default class Home extends Component {

    constructor(props){
      super(props);
      this.state = {
        show : null
      }
    }
    //  _loadInitialState = async () =>  {
 
    //     var value = await AsyncStorage.getItem("@MySuperStore:key");
    //     if (value !== null){
    //       this.setState({show: value});  
    //     } 
    // }
    // componentDidMount() {
    //   this._loadInitialState().done()
    // }
    
    getRoutes = (routes) => {
        return routes.map((prop, key) => {
          if (prop.layout === "/home") {
            return (
            //  this.state.show === null && this.state.show === '1' ?
              <Route
                path={prop.layout + prop.path}
                render={props => (        
                  <prop.component
                   {...props}           
                  />
                )}
                key={key}
              /> 
              // :<Redirect to='/walkthrought'/>
            );
          } else {
            return null;
          }
        });
      }

    render() {
      // console.log("line50:",this.state.show)
         return(<React.Fragment>
                {
               this.getRoutes(Routers)
                }
            </React.Fragment>)
        //     )
        //   }
        //   else{
        //     return null 
        //   }
        // }
        //   )
 
    }
}
