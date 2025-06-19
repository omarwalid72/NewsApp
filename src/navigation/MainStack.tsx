import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenNames from './ScreenNames';
import AuthStack from './stacks/AuthStack';
import MainTabs from './tabs/MainTabs';
import SharedStack from './stacks/SharedStack';
import StackNames from './StackNames';

// type Article = {
//   id: string;
//   title: string;
//   description: string;
//   url: string;
//   urlToImage?: string;
// };

const MainStack = () => {
  const Stack = createStackNavigator<MainStackParamList>();
  return (
    <Stack.Navigator  screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
          name={StackNames.AuthStack}
          component={AuthStack}
        />
        <Stack.Screen
          name={StackNames.MainTabs}
          component={MainTabs}
        />
        <Stack.Screen
          name={StackNames.SharedStack}
          component={SharedStack}
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
