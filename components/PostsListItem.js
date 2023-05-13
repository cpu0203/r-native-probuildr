import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';




const PostsListItem = ({item, index}) => {
  const navigation = useNavigation()

  const pressHandle = () => {
    navigation.navigate('PostPage', {
      title: item.title.rendered,
      content: item.content.rendered,
      thumbnail: item._embedded['wp:featuredmedia'][0].source_url
    })
    // console.log(item._embedded['wp:featuredmedia'][0].source_url)
  }





  return (
    <TouchableOpacity style={styles.card}  onPress={pressHandle}>
      <Text style={styles.h4}>{item.title.rendered}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 80,
    borderColor: 'rgba(200, 200, 200, 0.3)',
    borderWidth: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 5,
    marginBottom: 20,
    position: 'relative',
    // zIndex: 2
  },
  h4: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 500,
    textTransform: 'uppercase',
    lineHeight: 25
  },
})

export default PostsListItem;
