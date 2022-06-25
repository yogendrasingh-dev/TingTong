import AuthNavigator from './AuthNavigator';
import BottomTab from './BottomTabNavigtor';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {userAuthStateListener} from '../redux/actions';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const currentUserObj = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(userAuthStateListener());
    }, 1000);
  }, []);

  if (currentUserObj.splashLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!currentUserObj.currentUser ? (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        ) : (
          <Stack.Screen name="TABS" component={BottomTab} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
