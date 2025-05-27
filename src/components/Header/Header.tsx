import {Text, View, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Profile Image */}
      <Image
        source={require('../../assets/images/boy.jpg')}
        style={styles.profileImage}
      />

      {/* Title */}
      <Text style={styles.headerTitle}> News</Text>

      {/* Notification Icon */}
      <View style={styles.notificationWrapper}>
        <Image
          source={require('../../assets/images/R.jpg')}
          style={styles.notificationIcon}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
