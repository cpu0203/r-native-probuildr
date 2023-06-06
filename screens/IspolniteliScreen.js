import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image, ScrollView, TouchableWithoutFeedback, Button, Share, TouchableHighlight, FlatList} from 'react-native';
import { appWhite, searchers } from '../assets/vars';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import image from '../assets/andre005_sinematic_image_of_a_man_staying_on_old_wooden_floor_71aa5340-76be-426d-a42d-9739f96957ef.png'
// import WebView from 'react-native-webview';
import logoImage from '../assets/brutal_logo_for_site_about_constructioN.png'

import { useDispatch, useSelector } from 'react-redux';
import { getSearching } from '../redux/searchSlice';
import SearchersListItem from '../components/SearchersListItem';
import ModalBox from '../components/ModalBox';






const IspolniteliScreen = ({route}) => {
  const [modalVisible, setModalVisible] = React.useState(false)
  const dispatch = useDispatch()




  return (
    <SafeAreaProvider>
      <View style={styles.container}>

        {/* MODAL */}
        <ModalBox data={{modalVisible, setModalVisible}} />

        <View style={styles.header}>
          <Image
            style={styles.logoImage}
            source={logoImage}
          />
          <Text style={styles.h2}
            onPress={() => navigation.navigate('PostPage')}>Поиск исполнителей</Text>
        </View>

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

            <FlatList
              data={searchers}
              // renderItem={({item}) => <Text>{item.title}</Text>}
              renderItem={({item}) => <SearchersListItem data={item} modalParams={{modalVisible, setModalVisible}} />}
              keyExtractor={item => item.id}
            />

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
  header: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  h2: {
    fontSize: 24,
    fontWeight: 500,
    padding: 30,
    paddingTop: 10,
    paddingBottom: 30,
    paddingLeft: 10
  },
  tab: {
    flex: 1,
    backgroundColor: '#a59587',
    backgroundColor: '#342f2a',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    
  },
  imageBack: {
    flex:1,
    padding: 30
  },
  
})

export default IspolniteliScreen;
