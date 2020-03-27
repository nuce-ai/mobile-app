import HomeScreen from './screens/HomeScreen/HomeScreen';
import WalkthroughtScreen from './screens/WalkthroughtScreen/WalkthroughtScreen';
import CameraScreen from './screens/CameraScreen/CameraScreen';
// import ProcessingScreen from './screens/ProcessingScreen/ProcessingScreen';
import AfterSelectScreen from './screens/AfterSelectScreen/AfterSelectScreen';
import TestSpeak from './screens/AfterSelectScreen/testSpeak';
import ListObjectScreen from './screens/ListObjectScreen/ListObjectScreen';
import ObjectDetail from './screens/ObjectDetail/ObjectDetail';
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
        path : "/list-object",
        component :ListObjectScreen,
        layout : "/home"
    },
    {
        path : "/object-detail",
        component :ObjectDetail,
        layout : "/home"
    },

    {
        path : "/test-speak",
        component :TestSpeak,
        layout : "/home"
    },
   



]