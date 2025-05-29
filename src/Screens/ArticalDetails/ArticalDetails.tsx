import React from 'react';
import { Text, SafeAreaView, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import { MainStackParamList } from '../../navigation/MainStack';
import styles from './styles';

const ArticalDetails = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<MainStackParamList, ScreenNames.ArticleDetails>>();
  const { article } = params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()} style={styles.headerBackButton}>
          <Text style={styles.headerBackText}> Go Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Article</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* Hero Image Section */}
<View style={styles.imageContainer}>
  <Image
    source={{
      uri: article.urlToImage ||
        'https://images.unsplash.com/photo-1747582300720-9c71ee7f7fc2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }}
    style={styles.image}
    defaultSource={require('../../assets/images/steppeland-lutgarde-de-brouwer-cSbCJWblPm4-unsplash.jpg')}
  />
</View>

        {/* Floating Content Card */}
        <View style={styles.floatingCard}>
          {/* Trust Indicators */}
          <View style={styles.trustBadges}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>📰 Verified</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>🔒 Secure</Text>
            </View>
          </View>

          {/* Article Content */}
          <Text style={styles.title}>{article.title}</Text>
          {/* Meta Information */}
          <View style={styles.metaInfo}>
            <Text style={styles.metaText}>📅 Latest News</Text>
            <Text style={styles.metaText}>⏱️ 3 min read</Text>
          </View>

          {article.description && (
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{article.description}</Text>
            </View>
          )}

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>📖 Read Full Article</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticalDetails;
