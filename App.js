import React ,{Component} from 'react';
import store from './src/redux/configureStore';
import {Provider} from 'react-redux';
import Index from './src/app/Index'

const App = () => (
  <Provider store={store}>
    <Index/>
  </Provider>
)
export default class AppSaga extends Component{
  render() {
    return <App/>
  }
} 