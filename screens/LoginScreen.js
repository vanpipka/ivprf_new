import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ActivityIndicator, AsyncStorage } from 'react-native';

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

  console.log(1);
  const SIGNUP_URL = "http://84.38.182.177/api/auth/";//props.url;
  let result = "";

  let body = JSON.stringify({"login":"41486@mil.ru","password":"hExQX6q$"});
  let response  = await fetch(SIGNUP_URL, {method: 'POST', body: body});
  let auth_token = (""+response.headers.get('Set-Cookie')).replace("auth_token=", "").replace("; Path=/", "")

  let data  = JSON.parse(await response.text());

  if (data['result'] == true && auth_token.length != 0) {
      await AsyncStorage.setItem('auth_token', auth_token);
      return {result: true}
  }else{
      return {result: false, text: "Какая то ошибка"}
  }
}

export default class LoginScreen extends React.PureComponent {

  constructor(props) {
      super(props);

      const { navigation } = this.props;

      this.state = {login: "41486@mil.ru",
                    password: "hExQX6q$",
                    loading: false};

  }

  getTokenAsync = async () => {
      this.setState({loading: true})
      let res = await getTokenAsync()
      this.setState({loading: false})

      if (res.result == true) {
        this.props.navigation.replace('MainScreen', {user: {}});
      }else{
        Alert.alert("Ошибка", res.text)
      }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text></Text>
        <StatusBar style="auto" />
        <View style={styles.inputView} >
          <TextInput
              style={styles.inputText}
              value={this.state.login}
              placeholder="Email..."
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({login:text})}/>
        </View>
        <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              value={this.state.password}
              style={styles.inputText}
              placeholder="Password..."
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({password:text})}/>
        </View>

        <TouchableOpacity onPress={()=>this.getTokenAsync()} style={styles.button}>
            {this.state.loading == true ? <ActivityIndicator  size="small" color="white" /> : null}
            <Text style = {{fontWeight: "bold", color: "white"}}>Войти</Text>
        </TouchableOpacity>
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
  inputView:{
    width:"80%",
    backgroundColor:"#e9eef5",
    borderRadius:8,
    borderWidth: 1,
    borderColor: "#ccd8e6",
    height:50,
    marginBottom:8,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#4d7198"
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d7198',
    width: '80%',
    margin: 8,
    borderRadius: 8,
    height: 50,
  },
});
