import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F0FB',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#E3F0FB',
    borderBottomWidth: 1,
    borderBottomColor: '#B6D7F2',
  },

  headerBackButton: {
    padding: 4,
  },
  headerBackText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
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
        shadowOffset: { width: 0, height: 4 },
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
    fontFamily: 'Cairo-regular',
    fontSize: 20,
  },

  description: {
    fontSize: 16,
    color: '#334155',
    lineHeight: 24,
    marginBottom: 20,
    fontFamily: 'Cairo-Regular',
  },

  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Cairo-Bold',
  },
});

export default styles;
