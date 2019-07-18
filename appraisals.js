import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? 'red' : 'black';
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{color: textColor, fontSize: 25, flexDirection: "row"}}>ID #{this.props.id}: {this.props.address}, {this.props.city}, {this.props.state}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class Appraisals extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoading : true
            //data : [{"id":1,"property_address":"123 Fake St","city":"Anytown","state":"ZZ","zip_code":"00000","borrower":"John Doe","owner_of_public_record":"Jane Doe","county":"FakeCounty"}]
            //dataList : []
        };
        //this.fn = this.fn.bind(this);
      }

    componentWillMount() {
        this.getAppraisals();
        //this.setState({data : data});
    }

    getAppraisals(){
        fetch('ADD_LINK_HERE')
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

    //_keyExtractor = (item, index) => item.id;

    _onPressItem = (id) => {
      //console.log(id)
      this.props.navigation.navigate('ViewAppraisal', {passedData: id})
    }

    _renderItem = ({item}) => (
      <MyListItem
        id={item.id}
        onPressItem={this._onPressItem}
        //selected={!!this.state.selected.get(item.id)}
        id={item.id}
        address={item.property_address}
        city={item.city}
        state={item.state}
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
  
      return(
        <View style={{flex: 1, paddingTop:20}}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});