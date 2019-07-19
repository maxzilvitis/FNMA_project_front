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
      {/* </View> */}
      {/* <View style={styles.container}> */}
      <Text> Click to add a new appraisal </Text>
      <Button
        title="Add New Appraisal"
        onPress={() =>
          this.props.navigation.navigate('NewAppraisal')
        }
      />

      {/* <Text> Click to use camera </Text>
      <Button
        title="Camera Test"
        onPress={() =>
          this.props.navigation.navigate('Camera')
        }
      />
      <Text> Click to access camera roll </Text>
      <Button
        title="Select a picture"
        onPress={() =>
          this.props.navigation.navigate('Pictures')
        }
      /> */}

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