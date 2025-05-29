import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },

  // Header Styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#E3F0FB',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(226, 232, 240, 0.5)',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  headerBackButton: {
    padding: 8,
  },
  headerBackText: {
    fontSize: 16,
    color: '#3B82F6',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },
  headerSpacer: {
    width: 60,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  // Image Section
  imageContainer: {
    marginVertical: -25,
    marginBottom: -50,
    zIndex: 1,
  },
  image: {
    width: width,
    height: 280,
    resizeMode: 'cover',
  },


  // Floating Card
  floatingCard: {
    backgroundColor: '#E3F0FB',
    borderRadius: 24,
borderWidth: 1,
    borderColor: '#65B9FF',
    padding: 24,
    margin: 20,
    marginTop: 0,
    zIndex: 2,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.15,
        shadowRadius: 24,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  // Trust Badges
  trustBadges: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  badge: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  badgeText: {
    fontSize: 12,
    color: '#3730A3',
    fontWeight: '600',
  },

  // Content
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 16,
    lineHeight: 32,
  },

  metaInfo: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  metaText: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },

  descriptionContainer: {
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 26,
    fontWeight: '400',
  },

  // Action Buttons
  actionButtons: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E2E8F0',
  },
  secondaryButtonText: {
    color: '#475569',
    fontWeight: '600',
    fontSize: 16,
  },

  // Trust Section
  infoSection: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 0,
    padding: 20,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 16,
  },
  trustFeatures: {
    gap: 12,
  },
  trustFeature: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trustIcon: {
    fontSize: 16,
    marginRight: 12,
  },
  trustText: {
    fontSize: 15,
    color: '#475569',
    fontWeight: '500',
  },
});

export default styles;
