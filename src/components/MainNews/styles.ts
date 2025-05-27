import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 8,
  },
  imageBackground: {
    width: 300,
    height: 200,
    justifyContent: 'flex-end',
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 12,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 12,
  },
  headline: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#eee',
    fontSize: 14,
    marginTop: 4,
  },
  flatListContainer: {
    marginTop: 20,
  },
   addButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
