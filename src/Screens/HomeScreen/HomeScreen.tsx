import {ScrollView,SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import MainNewsList from '../../components/MainNews/MainNews';
import TopNews from '../../components/TopNews/TopNews';

const HomeScreen = () => {
  return (
    <SafeAreaView >
      <Header />
      <MainNewsList />
      <TopNews />
    </SafeAreaView>
  );
};

export default HomeScreen;
