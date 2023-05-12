import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';




const PostsListItem = ({item, index}) => {
  const navigation = useNavigation()

  /* useEffect(()=>{
    console.log(item)
  }, []) */

  const pressHandle = () => {
    navigation.navigate('PostPage', {
      title: item.title.rendered,
      content: item.content.rendered
      // item
    })
    // console.log(item)
  }


  return (
    <TouchableOpacity style={styles.card}  onPress={pressHandle}>
      {/* <View style={styles.colorBox}></View> */}
      <Text style={styles.h4}>{index+1+': '+item.title.rendered}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 80,
    borderColor: 'rgb(200, 200, 200)',
    borderWidth: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 5,
    marginBottom: 20,
    position: 'relative',
    // zIndex: 2
  },
  h4: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 500,
    textTransform: 'uppercase'
  },
  colorBox: {
    left: -5,
    right: -5,
    position: 'absolute',
    backgroundColor: 'blue',
    top: -5,
    bottom: -5,
    transform: 'rotate(3deg)',
    zIndex: -1
  }
})

export default PostsListItem;
