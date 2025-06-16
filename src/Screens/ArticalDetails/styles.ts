import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  headerBackButton: {
    borderRadius: 50,
    backgroundColor: '#3B82F6',
    padding: 8,
  },

  headerTitle: {
    fontSize: 18,
    fontFamily: 'Cairo-Bold',
    color: '#1E293B',
  },

  scrollContent: {
    paddingBottom: 30,
  },

  image: {
    width: width,
    height: 240,
    resizeMode: 'cover',
  },

  content: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.05,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  title: {
    color: '#0F172A',
    marginBottom: 12,
    fontSize: 20,
    fontFamily: 'Cairo-Bold',
    lineHeight: 28,
  },

  description: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
    marginBottom: 20,
    fontFamily: 'Cairo-Regular',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    borderRadius: 12,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Cairo-Bold',
  },
});

export default styles;
