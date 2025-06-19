import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import StackNames from '../../navigation/StackNames';

const Header = () => {
  const navigation = useNavigation();
  const goToSettings = () => {
    navigation.navigate(StackNames.PublicStack, {
      screen: ScreenNames.Settings,
    });
  };
  return (
    <View style={styles.headerContainer}>
      {/* Profile Image */}
      <TouchableOpacity style={styles.profileImageWrapper} onPress={goToSettings}>
      <Image
        source={require('../../assets/images/boy.jpg')}
        style={styles.profileImage}
      />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.headerTitle}>اخبارك ايه</Text>

      {/* Notification Icon */}
      <TouchableOpacity style={styles.notificationWrapper}>
        <Icon name="notifications-outline" size={28} color="#333" />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
