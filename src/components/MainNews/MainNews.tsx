import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Dimensions} from 'react-native';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {fetchNews} from '../../store/slices/mainNewsSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import {MainStackParamList} from '../../navigation/MainStack';
import StackNames from '../../navigation/StackNames';

type Article = {
  id: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
};

const MainNewsList = () => {
  const {width} = Dimensions.get('window');
  const ITEM_WIDTH = width * 0.8; // Adjust the width of each item
  const dispatch = useAppDispatch();
  const news = useAppSelector(state => state.mainNews);
  const navigation =
    useNavigation<NavigationProp<MainStackParamList, ScreenNames.HomeScreen>>();

  const flatListRef = useRef<FlatList>(null);
  // const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

 

  const goToArticleDetails = (article: Article) => {
    navigation.navigate(StackNames.SharedStack, {
      screen: ScreenNames.ArticleDetails,
      params: { article: article },
    });
  };

  const renderItem = ({item}: {item: Article}) => (
    <TouchableOpacity
      onPress={() => goToArticleDetails(item)}
      style={styles.itemContainer}>
      <ImageBackground
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : 'https://images.unsplash.com/photo-1747582300720-9c71ee7f7fc2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={styles.imageBackground}
        imageStyle={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.headline} numberOfLines={2} ellipsizeMode="tail">
            {item.title}
          </Text>
          <Text style={styles.subtitle} numberOfLines={3} ellipsizeMode="tail">
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
    <View style={styles.container}>
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
        getItemLayout={(data, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
      />
    </View>
  );
};

export default MainNewsList;
