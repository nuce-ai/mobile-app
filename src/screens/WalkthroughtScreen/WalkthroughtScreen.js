import React, { Component } from 'react'
import {View,Alert,StyleSheet,Text,Image,ScrollView } from 'react-native';

import ButtonComponent from '../../components/Button.component'
import walkthroughtImage from '../../assets/images/screen-walkthrought/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


export default class WalkthroughtScreen extends Component {
    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.row1}/>
                <View style={styles.row2}>
                    <ScrollView horizontal>
                        <View style="">
                            <Image
                                source={walkthroughtImage.walkthrought03}
                                style={styles.walkthrought_image}
                            />
                        </View>
                    </ScrollView>
                   
                </View>
               
                <View style={styles.row3}>
                    <Text style={styles.row3_text}>
                        Typography is a big deal.{"\n"} Making the right typography 
                    </Text>
                    <ButtonComponent 
                        content={"Start"}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        
    },
    row1 : {
        flex :1,
     
    },
    row2 : {
        flex : 5,
    },
    row3 : {
        flex : 3,
        alignItems : "center",
        justifyContent : "center",
    },
    row3_text : {
       paddingBottom : 10,
       textAlign : "center",
    },
    walkthrought_image: {
        resizeMode : 'stretch',
        width : "100%",
        height : "100%",
    }

})