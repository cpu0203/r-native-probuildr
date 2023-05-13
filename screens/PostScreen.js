import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image, ScrollView} from 'react-native';
import { appWhite } from '../assets/vars';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import image from '../assets/andre005_sinematic_image_of_a_man_staying_on_old_wooden_floor_71aa5340-76be-426d-a42d-9739f96957ef.png'
// import Searching from '../components/Searching';
// import WebView from 'react-native-webview';

import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';






const PostScreen = ({route, navigation}) => {
  const {title, content, thumbnail} = route.params

  const { width } = useWindowDimensions()

  const source = {
    html: content
  }

  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: '#fff',
      fontSize: '20px',
      paddingLeft: '25px',
      paddingRight: '25px',
    },
    a: {
      color: 'green'
    },
    p: {}
  }





  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        
        <Text style={styles.h2}
          onPress={() => navigation.navigate('PostPage')}>{title}</Text>

        <StatusBar style="auto" />

        <View style={styles.tab}>
          <ImageBackground source={{uri: thumbnail}} 
            resizeMode="cover"
            blurRadius={5}
            style={styles.image}
            imageStyle={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              opacity: .5
            }}>
            

            {/* <WebView
              originWhitelist={['*']}
              source={{ html: content }} 
              style={styles.content} /> */}

            <ScrollView style={{ flex: 1 }}>
              <Image source={{uri: thumbnail}} style={styles.thumbnail} />
              <RenderHtml
                contentWidth={width}
                source={source}
                tagsStyles={tagsStyles}
              />
            </ScrollView>

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
    fontSize: 20,
    fontWeight: 500,
    padding: 30,
    paddingTop: 0,
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
  image: {
    flex:1,
    // padding: 25,
    // fontSize: 30
  },
  content: {
    fontSize: 30
  },
  thumbnail: {
    width: '100%',
    height: 150,
    objectFit: 'cover',
    alignContent: 'center',
  }
})

export default PostScreen;
