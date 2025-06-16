import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    marginBottom: 24,
    backgroundColor: '#E3F0FB',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundDecoration: {
    position: 'absolute',
    top: -100,
    left: -50,
    width: width + 100,
    height: 200,
    backgroundColor: '#E3F0FB',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 150,
    transform: [{rotate: '-5deg'}],
    zIndex: -1,
    opacity: 0.7,
  },
  backgroundCircle: {
    position: 'absolute',
    bottom: 0,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E3F0FB',
    zIndex: -1,
    opacity: 0.4,
  },
  headingRow: {
    flexDirection: 'row',

  },
  headingIcon: {
    marginRight: 8,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
    marginBottom: 16,
  },

  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 14,
    borderColor: '#E3F0FB',
    borderWidth: 1,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 14,
    backgroundColor: '#E3F0FB',
  },
  cardImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 14,
    backgroundColor: '#E3F0FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Cairo-SemiBold',
    color: '#222',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
});
