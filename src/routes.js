import HomeScreen from './screens/HomeScreen/HomeScreen';
import WalkthroughtScreen from './screens/WalkthroughtScreen/WalkthroughtScreen';
import CameraComponent from './components/Camera.component';
import ProcessingScreen from './screens/ProcessingScreen/ProcessingScreen';
import AfterSelectScreen from './screens/AfterSelectScreen/AfterSelectScreen'


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
        component :CameraComponent,
        layout : "/home"
    },
    {
        path : "/after-processing",
        component :AfterSelectScreen,
        layout : "/home"
    },


]