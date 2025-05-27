module.exports = {
  dependencies: {
    // Disable auto-linking for vector icons on iOS (already linked manually or via Podfile)
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
  project: {
    ios: {
      sourceDir: './ios',
    },
    android: {
      sourceDir: './android',
    },
  },
  assets: ['./src/assets/fonts'], // Remove trailing slash (optional but cleaner)
};
