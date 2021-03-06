import React, { Component } from 'react'
import {View,Alert,StyleSheet,Text,Image,ScrollView ,Animated,AsyncStorage} from 'react-native';
import {Block} from '../../components';
import {SIZES} from '../../components/theme';
import ButtonComponent from '../../components/Button.component';
import LoadingOverlay from '../../components/LoadingOverlay';
import image from '../../constants/image';
import {theme} from '../../constants'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';


const backgrounds = [
    {
        id : "01",
        img : image.walkthrought.picture01,
        title : "Ứng dụng nhận diện đối tượng !",
        description : "Là một ứng dụng ứng dụng trí tuệ nhân tạo trong việc hỗ trợ học tiếng anh. ",
    },
    {
        id : "02",
        img : image.walkthrought.picture02,
        title : "NuceTeam",
        description : "Đỗ Hoàn, Nguyễn Thị Thanh Thư, Bùi Phương Mỹ, Trịnh Thị Oanh, Lê Hoàng Long",
    },
    {
        id : "03",
        img : image.walkthrought.picture03,
        title : "Giáo viên hưỡng dẫn",
        description : "Bùi Thanh Phong, Lê Đức Quang.",
    }
]

class WalkthroughtScreen extends Component {
    scrollX = new Animated.Value(0);

    state = {
        slideIndex: 0
    };
    componentDidMount() {
        this.scrollX.addListener(({ value }) => {
          this.setState({ slideIndex: Math.floor(value / SIZES.width) });
        });
      }
    renderImages = () => {
        return (
            <ScrollView 
                    horizontal 
                    pagingEnabled
                    scrollEnabled
                    decelerationRate={0}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false} 
                    onScroll={Animated.event([
                        { nativeEvent: { contentOffset: { x: this.scrollX } } }
                      ])}
                    >
                        {backgrounds.map((item, index) => (
                            <Block
                                center
                                bottom
                                key={`img-${index}`}
                                style={{ width: SIZES.width }}
                            >
                                <Image
                                source={item.img}
                                resizeMode="center"
                                style={{
                                    width: SIZES.width / 1.5,
                                    height: "100%"
                                }}
                                />
                            </Block>
                            ))}
                        
                        
                    </ScrollView>
        )
    }

    
    renderTexts() {
        const { slideIndex } = this.state;
        const background = backgrounds[slideIndex];

        return (
        <React.Fragment>
            <Text style={{
                fontWeight:"bold"
            }}>
            {background && background.title}
            </Text>
            <Text style={{
                textAlign : "center"
            }}>
            {background && background.description}
            </Text>
        </React.Fragment>
        );
    }
   
    renderDots() {
        const dotPosition = Animated.divide(this.scrollX, SIZES.width);
    
        return (
          <Block
            flex={false}
            row
            center
            middle
            margin={[SIZES.padding, 0, SIZES.padding * 2, 0]}
          >
            {backgrounds.map((item, index) => {
              const opacity = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: "clamp"
              });
    
              return (
                <Block
                  primary
                  animated
                  flex={false}
                  key={`dot-${index}`}
                  radius={SIZES.small}
                  margin={[0, SIZES.small / 2]}
                  style={[styles.dot, { opacity }]}
                />
              );
            })}
          </Block>
        );
      }
      // _storeData = async () => {
      //   try {
      //     await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
      //   } catch (error) {
      //     // Error saving data
      //   }
      // };
      handleLetGo = () => {
        this.props.history.push("/home/camera");
        // saveFile()
        // this._storeData()
      }
      
    render() {
        // console.log(RNFS.DocumentDirectoryPath)
        return (
            <Block safe>
                <Block center middle>
                        {this.renderImages()}
                        {this.renderTexts()}
                </Block>
              
                {this.renderDots()}
              
                <Block  flex={false} center top marginBottom={20}>
                        <ButtonComponent
                            content={"Let's go"}
                            event ={this.handleLetGo}
                        />
                </Block>
               
            </Block>
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
    },
    dot : {
        width : SIZES.base,
        height : SIZES.base
    }

})
export default withRouter(WalkthroughtScreen)