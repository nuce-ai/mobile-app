import React, { Component } from 'react'
import { NativeRouter, Route, Link } from "react-router-native";

import Routers from '../routes'
export default class Home extends Component {
    getRoutes = routes => {
    
        return routes.map((prop, key) => {
          if (prop.layout === "/home") {
            return (
              <Route
                path={prop.layout + prop.path}
                render={props => (        
                  <prop.component
                   {...props}           
                  />
                )}
                key={key}
              />
            );
          } else {
            return null;
          }
        });
      }
    render() {
        return (
            <React.Fragment>
                {this.getRoutes(Routers)}
            </React.Fragment>
        )
    }
}
