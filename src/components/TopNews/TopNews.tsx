import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles'; // Adjust the import path as necessary
import {useAppSelector, useAppDispatch} from '../../store/hooks'; // Adjust the import path as necessary
import {fetchNews} from '../../store/slices/mainNewsSlice'; // Adjust the import path as necessary
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '../../navigation/MainStack';
import ScreenNames from '../../navigation/ScreenNames';

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
  const navigation =
    useNavigation<NavigationProp<MainStackParamList, ScreenNames.HomeScreen>>();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const goToArticleDetails = (article: Article) => {
    navigation.navigate(ScreenNames.ArticleDetails, {article});
  };

  const renderItem = ({item, index}: {item: Article; index: number}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => goToArticleDetails(item)}
      key={item.id || `article-${index}`}>
      {item.urlToImage && (
        <Image
          source={{uri: item.urlToImage}}
          style={styles.cardImage}
          resizeMode="cover"
        />
      )}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.cardText} numberOfLines={3} ellipsizeMode="tail">
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top News</Text>
      <FlatList
        data={topNews.articles} // Use fetched news or dummy data
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TopNews;
