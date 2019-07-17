import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import Appraisals from './appraisals';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Click to view a list of appraisals </Text>
        <Button
          title="View All Appraisals"
          onPress={() =>
            this.props.navigation.navigate('Appraisals')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});