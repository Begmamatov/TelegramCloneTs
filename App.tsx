import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {HomePage, ProfilePage} from './src/screens';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const HeaderTopTabs = ({props}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.route.name}</Text>
    </View>
  );
};

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarPosition="top"
      tabBar={props => <HeaderTopTabs {...props} />}>
      <Tab.Screen name="Home" component={HomePage} options={{title: 'Home'}} />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
}
export default App;

import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';

const Stack = createStackNavigator();

function Router() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="myTabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
