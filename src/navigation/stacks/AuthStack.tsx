import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SignInScreen from "../../Screens/AuthScreen/SignInScreen";
import SignUpScreen from "../../Screens/AuthScreen/SignUpScreen";
import ScreenNames from "../ScreenNames";

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.SignIn} component={SignInScreen} />
      <Stack.Screen name={ScreenNames.SignUp} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
