import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchNews } from '../../store/slices/mainNewsSlice';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import { MainStackParamList } from '../../navigation/MainStack';

type Article = {
  id: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
};



const MainNewsList = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector(state => state.mainNews);
  const navigation = useNavigation<NavigationProp<MainStackParamList, ScreenNames.HomeScreen>>();

  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  // Auto scroll every 5 seconds
  useEffect(() => {
    if (news.articles.length === 0) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % news.articles.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, news.articles.length]);

  const goToArticleDetails = (article: Article) => {
    navigation.navigate(ScreenNames.ArticleDetails, { article });
  };

  const renderItem = ({ item }: { item: Article }) => (
    <TouchableOpacity onPress={() => goToArticleDetails(item)} style={styles.itemContainer}>
      <ImageBackground
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : 'https://images.unsplash.com/photo-1747582300720-9c71ee7f7fc2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={styles.imageBackground}
        imageStyle={styles.image}>
        <View style={styles.overlay}>
          <Text
            style={styles.headline}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.title}
          </Text>
          <Text
            style={styles.subtitle}
            numberOfLines={3}
            ellipsizeMode="tail">
            {item.description}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  if (news.loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  if (news.error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {news.error}</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={news.articles}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id || `article-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        contentContainerStyle={styles.flatListContainer}
        initialNumToRender={3}
        windowSize={5}
        removeClippedSubviews
      />
    </View>
  );
};

export default MainNewsList;
