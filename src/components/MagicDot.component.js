
import React, { Component } from 'react'
import {View,Dimensions,TouchableOpacity} from 'react-native';
import {Svg,Circle} from 'react-native-svg'
export default class MagicDot extends Component {
   render() {   
       let x = this.props.x;
       let y = this.props.y;  
    return (     
        <View
            onLayout={event => {
                const layout = event.nativeEvent.layout;
                console.log('height:', height);
                console.log('width:', width);
                console.log('x:', layout.x);
                console.log('y:', layout.y);
              }}
              style={{
                  position: 'absolute',
                  top : y,
                  left : x,
              }}
        >
            <TouchableOpacity>
                <Svg height="100" width="100"
                    style={{shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 6.27,
                            elevation: 10}}>
                    <Circle cx="50" cy="50" r="30" fill={this.props.color} />
                </Svg>
            </TouchableOpacity>
        </View>
        )
    }
}
const {height,width} = Dimensions.get('window');