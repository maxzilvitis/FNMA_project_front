import React from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Home from './home';
import Appraisals from './appraisals'
import NewAppraisal from './newAppraisal'

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Appraisals: {
    screen: Appraisals
  },
  NewAppraisal: {
    screen: NewAppraisal
  }
});

const App = createAppContainer(RootStack);

export default App;
