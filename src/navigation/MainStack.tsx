import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ArticalDetails from '../Screens/ArticalDetails/ArticalDetails';
import ScreenNames from './ScreenNames';

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
      <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={ScreenNames.ArticleDetails} component={ArticalDetails} />
    </Stack.Navigator>
  );
};

export default MainStack;
export type MainStackParamList = {
  [ScreenNames.HomeScreen]: undefined;
  [ScreenNames.ArticleDetails]: { article: Article };
  // };
};
