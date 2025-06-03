import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/MainStack';
import ScreenNames from '../../navigation/ScreenNames';
import styles from './styles';

const ArticalDetails = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<MainStackParamList, ScreenNames.ArticleDetails>>();
  const { article } = params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()} style={styles.headerBackButton}>
          <Text style={styles.headerBackText}>◀ Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Image */}
        <Image
          source={{ uri: article.urlToImage || 'https://via.placeholder.com/800x400' }}
          style={styles.image}
        />

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>{article.title}</Text>
          {article.description && (
            <Text style={styles.description}>{article.description}</Text>
          )}

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>📖 Read Full Article</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticalDetails;
