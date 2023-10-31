import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SplashScreen from '../screens/splashscrenn/SplashScreen';
import BookDetailScreen from '../screens/bookDetailScreen/BookDetailScreen';

const RootNaviagtion = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BookDetailScreen"
          component={BookDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNaviagtion;
