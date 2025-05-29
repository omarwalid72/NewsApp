import React from 'react';

import {SafeAreaView} from 'react-native';
import Homescreen from './src/Screens/HomeScreen/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import MainStack from './src/navigation/MainStack';

// Initialize RTL support

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
