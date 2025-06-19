import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Favorites from '../../Screens/Favorites/Favorites';
import ScreenNames from '../ScreenNames';
import StackNames from '../../navigation/StackNames';
import PublicStack from '../stacks/PublicStack';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeTabBarIcon = ({color}: {color: string}) => (
  <Ionicons name="home" size={20} color={color} />
);
const FavoritesTabBarIcon = ({color}: {color: string}) => (
  <Ionicons name="heart" size={20} color={color} />
);

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={StackNames.PublicStack}
        component={PublicStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: HomeTabBarIcon,
          tabBarActiveTintColor: '#556cd6',
          tabBarInactiveTintColor: '#b0b0b0',
          tabBarShowLabel: true,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Favorites}
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: FavoritesTabBarIcon,
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: '#b0b0b0',
        }}
      />
    </Tab.Navigator>
  );
};
export default MainTabs;
