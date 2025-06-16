import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Profile Image */}
      <Image
        source={require('../../assets/images/boy.jpg')}
        style={styles.profileImage}
      />

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
