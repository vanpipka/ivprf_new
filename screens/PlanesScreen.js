import React from 'react';
import { Platform, Alert, ScrollView, ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, KeyboardAvoidingView, FlatList, RefreshControl } from 'react-native';
import ErrorPage from '../components/ErrorPage'
import PlaneItem from '../components/PlaneItem'
import Const from '../constants/Const';
import {setPlaneInfo} from '../components/DB_API';

function PostHeaders(props) {

  let headers = {};
  headers["Content-Length"]    = props.contentLength;
  headers["Accept"]            = "application/json";
  headers["Accept-Language"]   = "ru-RU,ru;q=0.9,de-RU;q=0.8,de;q=0.7,en-US;q=0.6,en;q=0.5";
  headers["Connection"]        = "keep-alive";
  headers["Content-Type"]      = "application/json";

  return headers;

}

async function getTokenAsync(props) {

  console.log("/api/users/plane/");
  const SIGNUP_URL = Const["SERVER_URL"] + "/api/users/plane/";
  const AUTH_TOKEN = await AsyncStorage.getItem("auth_token");
  let result    = "";
  let response  = await fetch(SIGNUP_URL, {method: 'POST', body: {}, headers: {authorization: AUTH_TOKEN}});
  let text = await response.text()

  let data      = JSON.parse(text)

  return data

}

export default class PlanesScreen extends React.PureComponent {

  static navigationOptions = ({navigation, screenProps}) => {

    const params = navigation.state.params || {};

    return {
      title:  params.title,
      headerLeft:  null,
      //headerRight: () => params.headerRight,
      headerStyle: {
        backgroundColor: '#D30068',
      },
    }
  }

  constructor(props) {
      super(props);
      const { navigation } = this.props;

      console.log('PLANE SCREEN CONSTRUCTOR');

      this.state={
          loading: true,
          data: [],
          error: ""
      };

  }

  _setNavigationParams() {
    console.log("_setNavigationParams");

    this.props.navigation.setParams({title: 'FPL'});
  }

  componentDidMount(){
    this._setNavigationParams();
    this._loadDataAsync();
  }

  _loadDataAsync = async () => {
        let data = await getTokenAsync();

        if (data["data"] !== undefined){
          this.setState({loading: false, data: data["data"] })
          setPlaneInfo(data["data"])
        }else{
          if (data["title"] == "UNAUTHORIZED"){
            this.props.navigation.navigate('LoginScreen', {user: {}});
          }else{
            this.setState({error: data["detail"], loading: false})
          }
        }
  }

  _onPressItem = (props) => {

      if (props["id"] == undefined) {
          return;
      }

      this.props.navigation.navigate("OnePlaneScreen", props);
  };

  _renderItem = ({item}) => (
      <PlaneItem
        key = {item.id.toString()}
        onPressItem={this._onPressItem}
        shortCard={true}
        data={item}
        user={this.state.user}
      />
  );

  render() {

      if (this.state.loading == true) {
          return(
            <View style={styles.container}>
                <ActivityIndicator  size="large" color="red" />
            </View>
          )
      }
      else if (this.state.error != "") {
          return(<View style={styles.container}>
            <ErrorPage onClose={this._loadDataAsync} errorText={this.state.error}/>
          </View>)
      }else{
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
              data={this.state.data}
              extraData={this.props.uniqueValue}
              keyExtractor={(item, index) => item.id.toString()}
              renderItem={this._renderItem}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.loading}
                  onRefresh={this._loadDataAsync}
                />
              }
            />
            <TouchableOpacity style={styles.button} onPress = {()=>{this._onPressItem({})}}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>????????????????</Text>
            </TouchableOpacity>
          </View>
      );
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#688bb0',
    width: '97%',
    margin: 8,
    borderRadius: 8,
    height: 50,
  },
});
