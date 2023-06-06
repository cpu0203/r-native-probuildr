import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image, ScrollView, TouchableWithoutFeedback, Button, Share, TouchableHighlight} from 'react-native';
import { appWhite } from '../assets/vars';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import image from '../assets/andre005_sinematic_image_of_a_man_staying_on_old_wooden_floor_71aa5340-76be-426d-a42d-9739f96957ef.png'
// import Searching from '../components/Searching';
// import WebView from 'react-native-webview';

import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getSearching } from '../redux/searchSlice';





const imgHgt = 300

const PostScreen = ({route, navigation}) => {
  const {title, content, thumbnail, link} = route.params
  const dispatch = useDispatch()

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
    p: {
      textAlign: 'justify'
    },
    a: {
      color: '#f2a065'
    }
  }

  const thumbPressHandle = () => {
    console.log('image clicked')
    dispatch(getSearching('плитка'))
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: link
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          alert("Вы поделились знаниями!")
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        alert("Что-то пошло не так...")
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };





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
            style={styles.imageBack}
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
              <TouchableWithoutFeedback style={styles.thumbnailWrapper} onPress={thumbPressHandle}>
                <Image source={{uri: thumbnail}} style={styles.thumbnail} />
              </TouchableWithoutFeedback>
              <RenderHtml
                contentWidth={width}
                source={source}
                tagsStyles={tagsStyles}
              />
              <TouchableHighlight style={styles.shareButton}>
                <Button onPress={onShare} 
                  color={'#b15433'}
                  title="Поделиться" />
              </TouchableHighlight>
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
    fontSize: 24,
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

export default PostScreen;
