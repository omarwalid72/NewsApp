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
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addFavorite, removeFavorite } from '../../store/slices/favoriteSlice';

const ArticleDetails = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<MainStackParamList, ScreenNames.ArticleDetails>>();
  const { article } = route.params;
  const favorites = useAppSelector(state => state.favorites.favorites);
  const isFavorited = favorites.some(fav => fav.url === article.url);

  const handleReadMore = () => {
    if (article.url) {
      Linking.openURL(article.url);
    }
  };
  const dispatch = useAppDispatch();

  const handleFavoritePress = () => {
    if (isFavorited) {
      dispatch(removeFavorite(article.url)); // Assuming you have a removeFavorite action
    } else {
      dispatch(addFavorite(article));
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
        <TouchableOpacity onPress={handleFavoritePress} style={[
          styles.favoriteButton,
          isFavorited && styles.favoritedButton
        ]}>
          <IonicIcons
            name={isFavorited ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorited ? '#E3F0FB' : '#E3F0FB'}
          />
        </TouchableOpacity>
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