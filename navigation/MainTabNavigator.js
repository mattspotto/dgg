import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
// eslint-disable-next-line import/no-cycle
import GameDetailScreen from '../screens/GameDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

export const defaultNavigationProps = {
  headerTintColor: Colors.tintColor,
  headerTitleStyle: {
    color: Colors.tintColor
  },
  headerStyle: {
    backgroundColor: Colors.b2,
    borderBottomColor: Colors.secondaryBorder
  }
};

export const homeNavigationProps = {
  headerStyle: {
    backgroundColor: Colors.b2,
    borderBottomColor: Colors.b2,
  }
};

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator screenOptions={defaultNavigationProps}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name="home"
          />
        ),
      }}
    />
    
    <HomeStack.Screen
      name="GameDetail"
      component={GameDetailScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name="home"
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default () => (
  <Tabs.Navigator tabBarOptions={{
    activeTintColor: Colors.tintColor,
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: Colors.b2,
    },
    showLabel: false
  }}>
    <Tabs.Screen name="HomeStack" component={HomeStackNavigator} />

    <Tabs.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name="heart"
          />
        ),
      }}
    />
  </Tabs.Navigator>
)
