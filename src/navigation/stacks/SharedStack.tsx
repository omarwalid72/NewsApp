import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ArticalDetails from "../../Screens/ArticalDetails/ArticalDetails";
import ScreenNames from "../ScreenNames";

const Stack = createStackNavigator();
const SharedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name={ScreenNames.ArticleDetails}
            component={ArticalDetails}
        />
    </Stack.Navigator>
  );
};

export default SharedStack;
