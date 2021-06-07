import React from 'react';
import {View, Stylesheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from './auth/AuthScreen';
import HomeScreen from './home/HomeScreen';
import ChatScreen from './chat/ChatScreen';
import FriendsScreen from './friends/FriendsScreen';
import ProfileScreen from './profile/ProfileScreen';

const Tab = createBottomTabNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const FriendsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

// const LoginContainer = () =>{

// }

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Feed"
        component={HomeScreenContainer}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreenContainer}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreenContainer}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreenContainer}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreenContainer = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const ChatScreenContainer = () => {
  return (
    <ChatStack.Navigator initialRouteName="Chat">
      <ChatStack.Screen name="Chat" component={ChatScreen} />
    </ChatStack.Navigator>
  );
};

const FriendsScreenContainer = () => {
  return (
    <FriendsStack.Navigator initialRouteName="Friends">
      <FriendsStack.Screen name="Friends" component={FriendsScreen} />
    </FriendsStack.Navigator>
  );
};

const ProfileScreenContainer = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
