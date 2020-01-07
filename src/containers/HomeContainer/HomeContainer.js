import React, { Component } from 'react'
import {Text,View,Alert} from 'react-native';
import ButtonComponent from '../../components/Button.component'
import * as homeReducer from '../../redux/reducers/HomeReducer/home.reducer'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class HomeContainer extends Component {
    constructor(props){
        super(props);
       this.state = {
           color : "white"
       }
    }
    updateState = () => {
        this.setState({
            color : "orange"
        })
    }
    handleClickMe = () => {
        Alert.alert("click me startup");
        console.log(this.props.homeAction);
        this.props.homeAction.homeRequest()
    }
    render() {
        
        return (
            <View>
                {/* ext>Home Container + {this.state.color}</Text> */}
                <ButtonComponent
                    content = "Click me"
                    event = {() => this.handleClickMe()}

                />
                
            </View>
        )
    }
}
const mapStateToProps = state => {
    return({
        home : state.home,
    })
}
const mapDispatchToProps = dispatch => {
    return{
        homeAction : bindActionCreators(homeReducer.actions.home,dispatch)
    }
}

const connectHomeContainer = connect(mapStateToProps,mapDispatchToProps)(HomeContainer);
export default connectHomeContainer