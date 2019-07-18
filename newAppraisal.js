import React from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, ActivityIndicator, Picker, Platform, KeyboardType, Button} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

export default class NewAppraisal extends React.Component {

    constructor(props){
        super(props);
        this.state = {address: '', city: '', zip: '',county: '', province: '', borrower: '', owner_of_public_record: '' };
    }
    render() {
        return (
            
            <View style={styles.container}>
                
                <TextInput
                style = {
                    {   height:30,
                        width:"50%",
                        borderColor:'blue',
                        borderWidth:1,
                        marginBottom: 20,
                        borderTopRightRadius:10,
                        borderBottomRightRadius:10,
                        borderTopLeftRadius:10,
                        borderBottomLeftRadius:10,
                        textAlign:"center"}
                    }
                placeholder=" Property Address..." 
                onChangeText={(address) => this.setState({address})}
                value={this.state.address}
                />

                <TextInput
                style = {
                    {   height:30,
                        width:"50%",
                        borderColor:'blue',
                        borderWidth:1,
                        marginBottom: 20,
                        borderTopRightRadius:10,
                        borderBottomRightRadius:10,
                        borderTopLeftRadius:10,
                        borderBottomLeftRadius:10,
                        textAlign:"center"}
                    }
                placeholder=" City..." 
                onChangeText={(city) => this.setState({city})}
                value={this.state.city}
                /> 

                {/* make the state selection a picker*/}

                <TextInput
                style = {
                    
                    {   height:30,
                        width:"50%",
                        borderColor:'blue',
                        borderWidth:1,
                        marginBottom: 20,
                        borderTopRightRadius:10,
                        borderBottomRightRadius:10,
                        borderTopLeftRadius:10,
                        borderBottomLeftRadius:10,
                        textAlign:"center"}
                    }
                placeholder=" Zip Code..." 
                keyboardType='numeric'
                maxLength={5}
                onChangeText={(zip) => this.setState({zip})}
                value={this.state.zip}
                /> 

                {/*}

                Where state radio would be (Disabled for now until CSS-like issues are dealt with)


                <Picker
                selectedValue={this.state.province}
                style={{height: 50, width: 100, marginVertical:10}}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({role: itemValue})
                }>
                <Picker.Item label="Owner" value="owner" />
                <Picker.Item label="Tenant" value="tenant" />
                <Picker.Item label="Vacant" value="vacant" />
                </Picker>
                */}
                <TextInput
                style = {
                    {   height:30,
                        width:"50%",
                        borderColor:'blue',
                        borderWidth:1,
                        marginBottom: 20,
                        borderTopRightRadius:10,
                        borderBottomRightRadius:10,
                        borderTopLeftRadius:10,
                        borderBottomLeftRadius:10,
                        textAlign:"center"}
                    }
                placeholder=" County..." 
                onChangeText={(county) => this.setState({county})}
                value={this.state.county}
                />

                <TextInput
                style = {
                    {   height:30,
                        width:"50%",
                        borderColor:'blue',
                        borderWidth:1,
                        marginBottom: 20,
                        borderTopRightRadius:10,
                        borderBottomRightRadius:10,
                        borderTopLeftRadius:10,
                        borderBottomLeftRadius:10,
                        textAlign:"center"}
                    }
                placeholder=" Borrower..." 
                onChangeText={(borrower) => this.setState({borrower})}
                value={this.state.borrower}
                />

                <TextInput
                style = {
                    {   height:30,
                        width:"50%",
                        borderColor:'blue',
                        borderWidth:1,
                        marginBottom: 20,
                        borderTopRightRadius:10,
                        borderBottomRightRadius:10,
                        borderTopLeftRadius:10,
                        borderBottomLeftRadius:10,
                        textAlign:"center"}
                    }
                placeholder=" Owner of Public Record..." 
                onChangeText={(owner_of_public_record) => this.setState({owner_of_public_record})}
                value={this.state.owner_of_public_record}
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
