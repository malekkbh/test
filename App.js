import React from 'react';
import {View} from 'react-native';
import MainNavigator from './route/nav';
import TestProvider from './store/testProvider';
import TestContext from './store/testContext';

const App = () => {
  return (
    <View style={{flex:1 , backgroundColor:'green'}}>
      <TestProvider>
        <TestContext.Consumer>
          {context => (
            <View style={{flex: 1, backgroundColor: 'red'}}>
              <MainNavigator />
            </View>
          )}
        </TestContext.Consumer>
      </TestProvider>
    </View>
  );
};

export default App;
