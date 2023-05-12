import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import image from './assets/andre005_sinematic_image_of_a_man_staying_on_old_wooden_floor_71aa5340-76be-426d-a42d-9739f96957ef.png'
import Searching from './components/Searching'
import PostsList from './components/PostsList'
import { useEffect, useState } from 'react'

import store from './redux/store'
import { Provider, useDispatch } from 'react-redux'

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import PostScreen from './screens/PostScreen'

const Stack = createNativeStackNavigator();

const appWhite = '#f9f4f2'



export default function App() {



  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // title: 'Welcome',
            headerShown: false
          }}
          />

          <Stack.Screen
          name="PostPage"
          component={PostScreen}
          options={{headerShown: false}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({

})
