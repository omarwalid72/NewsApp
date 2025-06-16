import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {MainStackParamList} from '../../navigation/MainStack';
import ScreenNames from '../../navigation/ScreenNames';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

const ArticleDetails = () => {
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<MainStackParamList, ScreenNames.ArticleDetails>>();
  const {article} = params;

  const handleReadMore = () => {
    if (article.url) {
      Linking.openURL(article.url);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerBackButton}>
          <Icon name="arrow-left" size={24} color="#E3F0FB" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>تفاصيل الخبر</Text>
        <View style={{width: 24}} /> {/* Placeholder for alignment */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Image */}
        <Image
          source={{uri: article.urlToImage || 'https://via.placeholder.com/800x400'}}
          style={styles.image}
        />

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>{article.title}</Text>

          {article.description && (
            <Text style={styles.description}>{article.description}</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={handleReadMore}>
            <Icon name="external-link" size={18} color="#fff" style={{marginRight: 8}} />
            <Text style={styles.buttonText}>قراءة المقال كاملًا</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticleDetails;
