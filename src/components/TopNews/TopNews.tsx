import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {fetchNews} from '../../store/slices/mainNewsSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '../../navigation/MainStack';
import ScreenNames from '../../navigation/ScreenNames';
import StackNames from '../../navigation/StackNames';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {addFavorite, removeFavorite} from '../../store/slices/favoriteSlice';

type Article = {
  id: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
};

const TopNews = () => {
  const dispatch = useAppDispatch();
  const topNews = useAppSelector(state => state.mainNews);
  const favorites = useAppSelector(state => state.favorites.favorites);

  const navigation =
    useNavigation<NavigationProp<MainStackParamList, ScreenNames.HomeScreen>>();
    

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const goToArticleDetails = (article: Article) => {
    navigation.navigate(StackNames.SharedStack, {
      screen: ScreenNames.ArticleDetails,
      params: {article: article},
    });
  };
   const ToggleFavorite = (article: Article) => {
    if (favorites.some(fav => fav.url === article.url)) {
      dispatch(removeFavorite(article.url));
    } else {
      dispatch(addFavorite(article));
    }
  };
  const isArticleFavorited = (url: string) => {
    return favorites.some(fav => fav.url === url);
  };



const renderItem = ({item, index}: {item: Article; index: number}) => {
 

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => goToArticleDetails(item)}
      key={item.id || `article-${index}`}>

      <View style={styles.cardImageContainer}>
        <TouchableOpacity
          onPress={() => {
            ToggleFavorite(item);
          }}
          style={styles.favoriteButton}>
          <Ionicons
            name={isArticleFavorited(item.url) ? 'heart' : 'heart-outline'}
            size={20}
            color={isArticleFavorited(item.url) ? '#E3F0FB' : '#E3F0FB'}
          />
        </TouchableOpacity>

        {/* صورة المقال */}
        {item.urlToImage ? (
          <Image
            source={{uri: item.urlToImage}}
            style={styles.cardImage}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.cardImagePlaceholder}>
            <Text>لا صورة</Text>
          </View>
        )}
      </View>

      {/* المحتوى */}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.cardText} numberOfLines={3}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};



  return (
    <View style={styles.container}>
      <View style={styles.headingRow}>
        <View style={styles.headingIconContainer}>
          <Ionicons
            name="newspaper"
            size={22}
            color="#1F2937"
          />
        </View>
        <View>
          <Text style={styles.heading}>اخر الاخبار</Text>
        </View>
      </View>
      <FlatList
        data={topNews.articles}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TopNews;
