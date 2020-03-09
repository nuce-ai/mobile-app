import HomeScreen from './screens/HomeScreen/HomeScreen';
import WalkthroughtScreen from './screens/WalkthroughtScreen/WalkthroughtScreen';
import CameraScreen from './screens/CameraScreen/CameraScreen';
// import ProcessingScreen from './screens/ProcessingScreen/ProcessingScreen';
import AfterSelectScreen from './screens/AfterSelectScreen/AfterSelectScreen'
import TestSpeak from './screens/AfterSelectScreen/testSpeak'

export default Routers = [
    {
        path : "/walkthrought",
        component :WalkthroughtScreen,
    },
    {
        path : "/home",
        component :HomeScreen,
        
    },
    {
        path : "/camera",
        component :CameraScreen,
        layout : "/home"
    },
    {
        path : "/after-processing",
        component :AfterSelectScreen,
        layout : "/home"
    },
    {
        path : "/test-speak",
        component :TestSpeak,
        layout : "/home"
    }


]