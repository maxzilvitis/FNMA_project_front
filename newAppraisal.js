import React from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, ActivityIndicator, Picker, Platform, KeyboardType, Button, Image} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import { Permissions, ImagePicker } from 'expo';


export default class NewAppraisal extends React.Component {

    constructor(props){
        super(props);
        this.state = {property_address: '', city: '', state: '', zip_code: '', borrower: '', owner_of_public_record: '', county:'',
        photos : [],
        hasStoragePermission: null,
        image : null,
        new_id : null
        };
        
    }

    async componentDidMount() {
        const storage = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const hasStoragePermission = (storage.status === 'granted');

        this.setState({ hasStoragePermission });
    };

    createFormData = (photo) => {
        var data = new FormData();
        data.append("file", {
            name: 'my_photo.jpg',
            type: 'image/jpg',
            uri: photo.uri.replace("file://", "")
          });
        data.append("id", this.state.new_id);
        console.log(data);
        return data;
      };

      handleUploadPhoto = () => {
        fetch("http://ec2-54-89-250-141.compute-1.amazonaws.com:3000/file", {
          method: "POST",
          body: this.createFormData(this.state.image)
        })
          .then(response => response.text())
          .then(response => {
            console.log("upload success", response);
            alert("Upload success!");
            this.setState({ photo: null });
            this.props.navigation.navigate('Home');
          })
          .catch(error => {
            console.log("upload error", error);
            alert("Upload failed!");
          });
      };

      _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect: [4, 3],
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result });
        }
      };

    onSubmit = async () => {
        console.log(JSON.stringify(this.state))
        fetch('http://ec2-54-89-250-141.compute-1.amazonaws.com:3000/house', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)

        })
        .then(response => response.json())
        .then((responseJSON) => {
            console.log('post response', responseJSON.body.id);
            this.setState({ 
                new_id: responseJSON.body.id,
            })
        })
        .then(() => {
            if(!this.props.image){
                this.props.navigation.navigate('Home');
            }
            else{
                this.handleUploadPhoto();
            }
        })
        
    }

    render() {

        let { image } = this.state;

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
                onChangeText={(property_address) => this.setState({property_address})}
                value={this.state.property_address}
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
                placeholder=" State..." 
                onChangeText={(state) => this.setState({state})}
                value={this.state.state}
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
                //keyboardType='numeric'
                maxLength={5}
                onChangeText={(zip_code) => this.setState({zip_code})}
                value={this.state.zip_code}
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

                <Button
                    title="Pick an image from camera roll"
                    onPress={this._pickImage}
                    />
                    {image &&
                    <Image source={{ uri: image.uri }} style={{ width: 200, height: 200}} />
                    }

                    {/* {image &&
                        <Button
                        title="Upload Image"
                        onPress={this.handleUploadPhoto}
                        />
                    } */}

                <Button style={{color:'green'}} title="Submit" onPress = {() => {this.onSubmit()}}></Button>
 

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