import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    marginBottom: 24,
    backgroundColor: '#f0f0f0',
    position: 'relative',
    overflow: 'hidden',
  },
 headingRow: {
  flexDirection: 'row-reverse',
  alignItems: 'center',
  marginVertical: 8,
  paddingHorizontal: 12,
  alignSelf: 'flex-end',
},
headingIconContainer: {
paddingTop: 8,
marginLeft: 5,
  },

heading: {
  fontSize: 18,
  fontFamily: 'Cairo-ExtraBold',
  color: '#1F2937',
},

  card: {
    flexDirection: 'column',
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
    width: '100%',
    height: 100,
    borderRadius: 12,
    backgroundColor: '#E3F0FB',
    marginBottom: 16,
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
      padding: 16,

  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Cairo-SemiBold',
    color: '#222',
    marginBottom: 8,
    lineHeight: 22,
  },
  cardText: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  cardImageContainer: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 12,
  },
favoriteButton: {
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  borderRadius: 24,
  padding: 8,
  borderWidth: 0.8,
  borderColor: 'rgba(255, 255, 255, 0.4)',
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowOffset: {width: 0, height: 2},
  shadowRadius: 8,
  elevation: 6,
  zIndex: 20,
},


});
