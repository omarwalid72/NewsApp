import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    color: 'red',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 18,
  },
});
