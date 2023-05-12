import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import { appWhite } from '../assets/vars';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import image from '../assets/andre005_sinematic_image_of_a_man_staying_on_old_wooden_floor_71aa5340-76be-426d-a42d-9739f96957ef.png'
import Searching from '../components/Searching';


const PostScreen = ({route, navigation}) => {
  const {title, content} = route.params

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        
        <Text style={styles.h1}>ProBuildr</Text>
        <Text style={styles.h2}
          onPress={() => navigation.navigate('PostPage')}>{title}</Text>

        <StatusBar style="auto" />

        <View style={styles.tab}>
          <ImageBackground source={image} 
            resizeMode="cover" 
            style={styles.image}
            imageStyle={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              opacity: .5
            }}>
            <Searching />
            <WebView source={{ html: content }} />
            {/* <Text>{content}</Text> */}
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
  h1: {
    fontSize: 30,
    fontWeight: 700,
    padding: 30,
    paddingBottom: 0,
    marginTop: 10,
  },
  h2: {
    fontSize: 20,
    fontWeight: 500,
    padding: 30,
    paddingTop: 10,
  },
  tab: {
    flex: 1,
    backgroundColor: '#a59587',
    backgroundColor: '#342f2a',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    
  },
  image: {
    flex:1,
    padding: 25,
  }
})

export default PostScreen;
