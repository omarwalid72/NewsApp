import React from 'react';

import {SafeAreaView} from 'react-native';
import Homescreen from './src/components/Screens/HomeScreen/Homescreen';
import { Provider} from 'react-redux';
import {store} from './src/store';

// Initialize RTL support

const App: React.FC = () => {
  return (
  <Provider store={store}>
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Homescreen />
    </SafeAreaView>
  </Provider>
  );
};

export default App;
