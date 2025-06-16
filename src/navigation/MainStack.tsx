import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ArticalDetails from '../Screens/ArticalDetails/ArticalDetails';
import ScreenNames from './ScreenNames';
import AuthStack from './stacks/AuthStack';
import MainTabs from './tabs/MainTabs';

type Article = {
  id: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
};

const MainStack = () => {
  const Stack = createStackNavigator<MainStackParamList>();
  return (
    <Stack.Navigator  screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
          name={ScreenNames.Auth}
          component={AuthStack}
        />
        <Stack.Screen
          name={ScreenNames.MainTabs}
          component={MainTabs}
        />

      </Stack.Navigator>
  );
};

export default MainStack;
export type MainStackParamList = {
  [ScreenNames.Auth]: undefined;
  [ScreenNames.MainTabs]: undefined;
  // };
};
