import React from 'react';
import { CameraRoll, View, Button, ScrollView, Image } from 'react-native';
import { Permissions, ImagePicker } from 'expo';
//import { CameraRoll } from "@react-native-community/cameraroll";
//import { PermissionsAndroid } from 'react-native'

//import CameraPage from './camera.page';

export default class Pictures extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photos : [],
            hasStoragePermission: null,
            image : null
        };
        //this.fn = this.fn.bind(this);
      }

      async componentDidMount() {
        const storage = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const hasStoragePermission = (storage.status === 'granted');

        this.setState({ hasStoragePermission });
    };

    createFormData = (photo) => {

        //const myuri = photo.uri;
        //const uriParts = uri.split('.');
        //const fileType = uriParts[uriParts.length - 1];
        //const formData = new FormData();
        var data = new FormData();
        
        data.append("file", {
            name: 'my_photo.jpg',
            type: 'image/jpg',
            uri: photo.uri.replace("file://", "")
          });

        console.log(data);

      
      
        return data;
      };

      handleUploadPhoto = () => {
        fetch("ADD_LINK", {
          method: "POST",
          body: this.createFormData(this.state.image)
        })
          .then(response => response.text())
          .then(response => {
            console.log("upload success", response);
            alert("Upload success!");
            this.setState({ photo: null });
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


     render() {

        let { image } = this.state;
      return (
        
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="Pick an image from camera roll"
              onPress={this._pickImage}
            />
            {image &&
              <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
            }

            {image &&
                <Button
                title="Upload Image"
                onPress={this.handleUploadPhoto}
                />
            }
          </View>
      );
     }
};