import React from 'react';
import {View, Text} from 'react-native';

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 40}}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
