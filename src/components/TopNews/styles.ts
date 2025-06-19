import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    marginBottom: 24,
    backgroundColor: '#E3F0FB',
    position: 'relative',
    overflow: 'hidden',
  },
  headingRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#E3F0FB',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 6,
    elevation: 3,
    alignSelf: 'flex-end',
  },
  headingIcon: {
    marginRight: 8,
    color: '#1F2937',
    paddingLeft: 4,
  },

  heading: {
    fontSize: 18,
    fontFamily: 'Cairo-Bold',
    color: '#1F2937',
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
