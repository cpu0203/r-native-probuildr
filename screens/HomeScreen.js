import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import image from '../assets/andre005_constructor_bulldozer_on_the_sand_on_the_left_part_of__1b3a681f-a1d0-4bf9-9bcb-52cbb67fcade.jpg'
// import logo from '../assets/brutal_logo_for_site_about_constructioN.png'
import Searching from '../components/Searching'
import PostsList from '../components/PostsList'
// import { useEffect, useState } from 'react'
// import Icon from 'react-native-vector-icons/Octicons';

import store from '../redux/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { appWhite } from '../assets/vars';
import MainHeader from '../components/MainHeader';
import { toggleShowMenu } from '../redux/mainSlice';




const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const showMenu = useSelector(state => state.posts.showMenu)


  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        
        <TouchableWithoutFeedback onPress={()=> dispatch(toggleShowMenu())}>
          <View style={[styles.darkBack, {
            opacity: showMenu ? .3 : 0,
            display: showMenu ? 'flex' : 'none',
          }]}></View>
        </TouchableWithoutFeedback>

        <MainHeader />
        
        {/* HEADER & LOGO TITLE */}
        {/* <View style={styles.heroBox}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.h1} onPress={logoClicked}>ProBuildr</Text>
          <TouchableOpacity style={styles.barsIconBox}>
            <Icon name="three-bars" size={30} color="#333" onPress={barsHandle} />
          </TouchableOpacity>
          <View style={styles.menuBox}>
            <Text style={styles.menuString} onPress={()=> menuLingGo(1)}>На главную</Text>
            <Text style={styles.menuString}>Ищу исполнителя</Text>
            <Text style={styles.menuVersion}>Версия: 1.0</Text>
          </View>
        </View> */}

        <Text style={styles.h2}
          onPress={() => navigation.navigate('PostPage')}>Приложение про строительство и ремонт</Text>

        <Searching />

        <StatusBar 
        // style="auto"
        barStyle="light-content"
         />

        <View style={styles.tab}>
          <ImageBackground source={image} 
            resizeMode="cover" 
            style={styles.image}
            imageStyle={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              opacity: .2
            }}>
            
            <PostsList />
          </ImageBackground>
        </View>
        
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appWhite,
  },
  darkBack: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#333',
    // opacity: .5
  },
  // heroBox: {
  //   // backgroundColor: 'pink',
  //   flexDirection: 'row',
  //   marginTop: 38,
  //   alignItems: 'center',
  //   marginRight: 30
  // },
  // logo: {
  //   width: 50,
  //   height: 50,
  //   marginLeft: 30
  // },
  // barsIconBox: {
  //   marginLeft: 'auto',
  //   zIndex: 2
  // },
  // h1: {
  //   fontSize: 30,
  //   fontWeight: 700,
  //   padding: 30,
  //   paddingBottom: 0,
  //   paddingLeft: 10,
  //   paddingTop: 0
  // },
  h2: {
    fontSize: 12,
    fontWeight: 500,
    padding: 30,
    paddingTop: 0,
    paddingBottom: 15,
    textTransform: 'capitalize',
    opacity: .7,
    zIndex: -1
  },
  tab: {
    flex: 1,
    backgroundColor: '#a59587',
    backgroundColor: '#342f2a',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: -1
    
  },
  image: {
    flex:1,
    padding: 25,
  },
  // menuBox: {
  //   position: 'absolute',
  //   minWidth: 260,
  //   // height: 200,
  //   backgroundColor: '#f6d7c8',
  //   right: -30,
  //   top: 0,
  //   paddingTop: 44,
  //   paddingLeft: 10,
  //   paddingRight: 30,
  //   borderTopLeftRadius: 10,
  //   borderBottomLeftRadius: 10,
  //   zIndex: 1
  // },
  // menuString: {
  //   textTransform: 'uppercase',
  //   fontSize: 18,
  //   color: '#333',
  //   lineHeight: 40
  // },
  // menuVersion: {
  //   opacity: .6,
  //   marginTop: 20,
  //   paddingBottom: 10
  // }
})

export default HomeScreen;
