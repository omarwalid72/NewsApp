import { Text, View } from 'react-native';
import React from 'react';
import Header from '../../Header/Header';
import MainNewsList from '../../MainNews/MainNews';


const Homescreen = () => {

    return (
      <View>
        <Header />
        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Latest News</Text>
          <MainNewsList />
        </View>
      </View>
    );
  };


export default Homescreen;
