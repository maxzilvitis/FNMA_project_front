import React from 'react';
import AppNavigator from './AppNavigator';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Home from './home';
import Appraisals from './appraisals'

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Appraisals: {
    screen: Appraisals
  }
});

const App = createAppContainer(RootStack);

export default App;

/*
export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
*/

/*
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});
export default createAppContainer(AppNavigator);
*/

/*
export default function App() {
  return (
    // <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text>Welcome to the appraisal app!</Text>
        <Text>View existing appraisals or add a new one by choosing an option below.</Text>
      
      <View style={{
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'stretch'
        }}>
          <Button
            title={'View All Appraisals'}
            icon={{ name: 'lock' }}
            onPress={() => {
              //function getMoviesFromApiAsync() {
                fetch('http://ec2-54-89-250-141.compute-1.amazonaws.com:3000/list')//,
                  .then(function(response) {
                    return response.json();
                  })
                  .then(function(myJson) {
                    console.log(JSON.stringify(myJson));
                    data: myJson;
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              //}
            }}
          />
      
          <Button
            title={'Add New Appraisal'}
            backgroundColor={'#FB6567'}
            icon={{ name: 'face' }}
            //onPress={Actions.signUp}
          />

      </View>
    </ScrollView>
      
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
*/