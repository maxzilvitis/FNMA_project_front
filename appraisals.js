import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

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
            //console.log(this.state.dataList);
            //this.setState((state, props) => {
            //    return {data: myJson};
            //});
          }.bind(this))
          .catch((error) => {
            console.error(error);
          });
    }
/*
    renderItems() {
        const items = this.dataList;
        this.data.foreach( ( dataItem ) => {
            items.put( <Text>{ dataItem.borrower }</Text> );
        } )
        return items;
        }
*/
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
            renderItem={({item}) => <Text>{item.id}, {item.property_address}, {item.city}, {item.state}</Text>}
            keyExtractor={({id}, index) => id}
          />
        </View>
      );
      /*
    return (
      <View style={styles.container}>
        <Text> Add friends here! </Text>
        <ListView
            dataSource={this.state.dataList}
            renderRow = {function(rowData) {
                    return (
                      <View style={styles.row}>
                        <Text>{rowData.id}</Text>
                        <Text>{rowData.property_address}</Text>
                        <Text>{rowData.city}</Text>
                      </View>
                    );
                  
                //(rowData) => <Text>{rowData}</Text>}
                }
            }
        />
      </View>
    );
    */
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