import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import Favorites from '../../Screens/Favorites/Favorites';
import ScreenNames from '../ScreenNames';

const Tab = createBottomTabNavigator();
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#fff',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name={ScreenNames.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={ScreenNames.Favorites}
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
        }}
      />
    </Tab.Navigator>
  );
};
export default MainTabs;
