import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import settingScreen from "../../Screens/Setting/settingScreen";
import ScreenNames from "../ScreenNames";

const Stack = createStackNavigator();
const PublicStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name={ScreenNames.HomeScreen}
            component={HomeScreen}
        />
        <Stack.Screen
            name={ScreenNames.Settings}
            component={settingScreen}
        />
    </Stack.Navigator>
  );
};

export default PublicStack;
