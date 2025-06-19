import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useAppSelector} from '../../store/hooks';

export interface Article {
  id: string;
  title: string;
  content: string;
  description?: string;
  urlToImage?: string;
}

const Favorites = () => {


  // Ensure favorites is an array of Article
  const fav = useAppSelector(state => state.favorites);


  const goToArticleDetails = (article: Article) => {
    // التنقل لتفاصيل المقال
    console.log('Open article:', article.title);
    // navigation.navigate(...);
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
          {item.content || 'لا يوجد وصف'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {fav.favorites.length === 0 ? (
        <Text style={styles.noFavoritesText}>لا توجد مقالات مفضلة بعد</Text>
      ) : (
        <FlatList
          data={fav.favorites}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id || `fav-${index}`}
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </View>
  );
};

export default Favorites;
