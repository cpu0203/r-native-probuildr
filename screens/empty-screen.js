import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image, ScrollView, TouchableWithoutFeedback, Button, Share, TouchableHighlight} from 'react-native';
import { appWhite } from '../assets/vars';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import image from '../assets/andre005_sinematic_image_of_a_man_staying_on_old_wooden_floor_71aa5340-76be-426d-a42d-9739f96957ef.png'
// import Searching from '../components/Searching';
// import WebView from 'react-native-webview';

// import RenderHtml from 'react-native-render-html';
// import { useWindowDimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getSearching } from '../redux/searchSlice';





const imgHgt = 300

const IspolniteliScreen = ({route}) => {
  const dispatch = useDispatch()






  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        
        <Text style={styles.h2}
          onPress={() => navigation.navigate('PostPage')}>Поиск исполнителей</Text>

        {/* <StatusBar style="auto" /> */}

        <View style={styles.tab}>
          <ImageBackground source={image} 
            resizeMode="cover"
            blurRadius={5}
            style={styles.imageBack}
            imageStyle={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              opacity: .5
            }}>
            
            {/* CONTENT HERE */}


          </ImageBackground>
        </View>
        
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: appWhite,
  },
  h2: {
    fontSize: 24,
    fontWeight: 500,
    padding: 30,
    paddingTop: 10,
    paddingBottom: 30
  },
  tab: {
    flex: 1,
    backgroundColor: '#a59587',
    backgroundColor: '#342f2a',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden'
    
  },
  imageBack: {
    flex:1,
  },
  content: {
    fontSize: 30
  },
  thumbnailWrapper: {
    width: '100%',
    height: imgHgt,
  },
  thumbnail: {
    width: '100%',
    height: imgHgt,
    objectFit: 'cover',
    alignContent: 'center',

  },
  shareButton: {
    borderRadius: 50,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 30,
    overflow: 'hidden'
  }
  
})

export default IspolniteliScreen;
