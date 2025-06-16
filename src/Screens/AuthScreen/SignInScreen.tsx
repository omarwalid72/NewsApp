import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';

const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.MainTabs)}>
      <Text>SignInScreen</Text>
    </TouchableOpacity>
  );
};

export default SignInScreen;
