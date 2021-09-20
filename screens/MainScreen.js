import * as React from 'react';
import { Text, View } from 'react-native';
//import News from './NewsScreen';
//import TestsScreen from './MainTestsScreen';
//import Dialogs from './DialogsScreen';
import {  StackActions } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FplScreen from '../screens/FplScreen';
import PlanesScreen from '../screens/PlanesScreen';
import { Icon } from 'react-native-elements';

function Page3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page3!</Text>
    </View>
  );
}

function Page4() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page4!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MainScreen({route, navigation}) {

  const { user } = route.params;

  console.log("export default function Main ");
  console.log(user);

  return (
      <Tab.Navigator>
        <Tab.Screen
            name="FplScreen"
            component={FplScreen}
            initialParams={user}
            options={{
              tabBarLabel: 'Планы ИВП',
              tabBarIcon: ({ focused }) => (
                <Icon
                  name='view-list'
                  color='grey' />
              ),
            }}
        />
        <Tab.Screen
            name="PlanesScreen"
            component={PlanesScreen}
            initialParams={user}
            options={{
              tabBarLabel: 'ВС',
              tabBarIcon: ({ focused }) => (
                <Icon
                  name='airplanemode-active'
                  color='grey' />
              ),
            }}
        />
        <Tab.Screen
            name="Page3"
            component={Page3}
            initialParams={user}
        />
        <Tab.Screen
            name="Page4"
            component={Page4}
            initialParams={user}
        />
      </Tab.Navigator>
  );
}
