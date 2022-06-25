import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Images from '@Images';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Feed = function () {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        headerShown: false,
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Feed}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({color}) => (
            <AntDesign name={'search1'} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Feed}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({}) => (
            <Image
              source={Images.plusIcon.source}
              style={{height: 35, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Feed}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'message-minus-outline'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Feed}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({color}) => (
            <Ionicons name={'person-outline'} size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
