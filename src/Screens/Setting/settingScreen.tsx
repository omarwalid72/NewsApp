import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';
import StackNames from '../../navigation/StackNames';


const SettingScreen = () => {
    const {reset} = useNavigation();
    const handleLogout = () => {
      reset({
        index: 0,
        routes: [{name : StackNames.AuthStack}],
      });
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={() => { handleLogout();}}>
        <Text style={styles.logoutButtonText}>تسجيل الخروج</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
