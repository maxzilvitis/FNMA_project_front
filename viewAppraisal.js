import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';

class MyListItem extends React.PureComponent {
    //_onPress = () => {
    //  this.props.onPressItem(this.props.id);
    //};
  
    render() {
      //let { image } = this.state;
      const textColor = this.props.selected ? 'red' : 'black';
      return (
        <TouchableOpacity onPress={this._onPress}>
          <View>
            <Text style={{color: textColor, fontSize: 25}}>Reference ID #{this.props.id}: </Text>
            <Text style={{fontSize: 25}}>Address: </Text>
            <Text style={{fontSize: 25, alignSelf: "center"}}>{this.props.address}</Text>
            <Text style={{fontSize: 25, alignSelf: "center"}}>{this.props.city}, {this.props.state} {this.props.zip}</Text>
            <Text style={{fontSize: 25}}>Borrower: {this.props.borrower}</Text>
            <Text style={{fontSize: 25}}>Owner: {this.props.owner}</Text>
            <Text style={{fontSize: 25}}>County: {this.props.county}</Text>
            {/* {image && */}
              <Image source={{uri: this.props.img}} style={{ width: 200, height: 200 }} />
            {/* } */}
          </View>
        </TouchableOpacity>
      );
    }
  }


export default class ViewAppraisal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading : true,
            //image : null
        };
      }

    componentWillMount() {
        this.getAppraisalInfo();
    }

    getAppraisalInfo(){
        fetch('http://ec2-54-89-250-141.compute-1.amazonaws.com:3000/list/query/byID' + '?id=' + this.props.navigation.state.params.passedData)
        .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            //console.log(JSON.stringify(myJson));
            this.setState({ 
                isLoading: false,
                dataSource : myJson
            })
          }.bind(this))
          .catch((error) => {
            console.error(error);
          });
    }

    _renderItem = ({item}) => (
        <MyListItem
          id={item.id}
          //onPressItem={this._onPressItem}
          //selected={!!this.state.selected.get(item.id)}
          id={item.id}
          address={item.property_address}
          city={item.city}
          state={item.state}
          zip={item.zip_code}
          borrower={item.borrower}
          owner={item.owner_of_public_record}
          county={item.county}
          img={item.attachment_location}
        />
      )

    render() {
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }
        return (
            // <Text>Appraisal View</Text>
            <View style={{ flex: 1, paddingTop:20 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderItem}
                    //{({item}) => <Text>{item.id}, {item.property_address}, {item.city}, {item.state}</Text>}
                    keyExtractor={({id}, index) => id.toString()}//{this._keyExtractor}//{({id}, index) => id}
                />                
            </View>
        );
    }
}
