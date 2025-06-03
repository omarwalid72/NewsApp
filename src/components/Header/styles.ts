import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#E3F0FB',
    elevation: 5,
    marginBottom: 20,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationWrapper: {
    position: 'relative',
  },
  notificationIcon: {
    width: 28,
    height: 30,
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
   
});