import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useAppSelector} from '../../store/hooks';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import StackNames from '../../navigation/StackNames';

export interface Article {
  id: string;
  title: string;
  content: string;
  description?: string;
  urlToImage?: string;
  url?: string;
}

const Favorites = () => {
  const favorites = useAppSelector(state => state.favorites.favorites);
  const navigation = useNavigation();

   const goToArticleDetails = (article: Article) => {
    navigation.navigate(StackNames.SharedStack, {
      screen: ScreenNames.ArticleDetails,
      params: { article: article },
    });
  };

  const renderItem = ({item, index}: {item: Article; index: number}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => goToArticleDetails(item)}
      activeOpacity={0.8}>
      {item.urlToImage && (
        <Image
          source={{uri: item.urlToImage}}
          style={styles.cardImage}
          resizeMode="cover"
        />
      )}
      <View style={styles.cardContent}>
        <View style={styles.titleRow}>
          <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode="tail">
            {item.title}
          </Text>
        </View>
        <Text style={styles.cardText} numberOfLines={3} ellipsizeMode="tail">
          {item.description || item.content || 'لا يوجد وصف'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>المقالات المفضلة</Text>
      
      {favorites.length === 0 ? (
        <View style={styles.emptyState}>
          <Icon name="heart" size={60} color="#e5e7eb" />
          <Text style={styles.noFavoritesText}>لا توجد مقالات مفضلة بعد</Text>
          <Text style={styles.noFavoritesSubText}>
            اضغط على أيقونة القلب لحفظ المقالات المفضلة لديك
          </Text>
        </View>
      ) : (
        <FlatList 
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id || `fav-${index}`}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F0FB',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontFamily: 'Cairo-Bold',
    color: '#1e293b',
    textAlign: 'right',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'Cairo-SemiBold',
    color: '#1e293b',
    flex: 1,
    textAlign: 'right',
  },
  cardText: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#64748b',
    textAlign: 'right',
    lineHeight: 22,
  },
  removeButton: {
    padding: 8,
    marginLeft: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  noFavoritesText: {
    fontSize: 18,
    fontFamily: 'Cairo-SemiBold',
    color: '#64748b',
    marginTop: 16,
  },
  noFavoritesSubText: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#94a3b8',
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});

export default Favorites;
