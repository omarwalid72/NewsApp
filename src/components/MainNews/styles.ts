import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
 itemContainer: {
  marginHorizontal: 8,
  backgroundColor: '#111', // darker than black but allows shadow to show
  borderRadius: 16,
},

  imageBackground: {
    width: 320,
    height: 220,
    justifyContent: 'flex-end',
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 16,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    padding: 14,
  },
  headline: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    color: '#ddd',
    fontSize: 15,
    marginTop: 6,
    lineHeight: 20,
  },
  flatListContainer: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  addButton: {
    backgroundColor: '#1e90ff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 16,
    shadowColor: '#1e90ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
