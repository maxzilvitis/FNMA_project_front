import React from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Home from './home';
import Appraisals from './appraisals'
import NewAppraisal from './newAppraisal'
import ViewAppraisal from './viewAppraisal'
import Camera from './camera'
import Pictures from './pictures'

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Appraisals: {
    screen: Appraisals
  },
  NewAppraisal: {
    screen: NewAppraisal
  },
  ViewAppraisal: {
    screen: ViewAppraisal
  },
  Camera: {
    screen: Camera
  },
  Pictures: {
    screen: Pictures
  }
});

const App = createAppContainer(RootStack);

export default App;
