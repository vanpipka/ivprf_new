
import { registerRootComponent } from 'expo';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { GetTagsInfo } from './components/WebAPI';
import LoginScreen from './screens/LoginScreen';
import OnePlaneScreen from './screens/OnePlaneScreen';
import MainScreen from './screens/MainScreen';
import PlaneTypeSearch from './screens/PlaneTypeSearchScreen';

//import VideoCall from './screens/VideoCallScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer>
            <Stack.Navigator
            initialRouteName="LoginScreen">
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OnePlaneScreen"
                component={OnePlaneScreen}
                options={{}}
              />
              <Stack.Screen
                name="PlaneTypeSearch"
                component={PlaneTypeSearch}
                options={{}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {

    return Promise.all([
      Asset.loadAsync([
        require('./assets/icon.png'),
      ]),
      //GetTagsInfo(),
      //Font.loadAsync({
        // This is the font that we are using for our tab bar
      //  ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        //'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      //}),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
