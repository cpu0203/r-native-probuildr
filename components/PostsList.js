import React, { useEffect } from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setPostsZero } from '../redux/mainSlice';
import { useNavigation } from '@react-navigation/native';
import PostsListItem from './PostsListItem';




const PostsList = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const data = useSelector(state => state.posts.posts)
  const count = useSelector(state => state.posts.pagesQuantity)
  const status = useSelector(state => state.posts.status)
  const currentPage = useSelector(state => state.posts.currentPage)

  useEffect(()=>{
    dispatch(setPostsZero())
    dispatch(fetchPosts(currentPage))
  }, [])

  const fetchMorePosts = () => {
    if(currentPage < count) dispatch(fetchPosts(+currentPage + 1))
  }

  


  
  return (
    <View>
      <Text style={styles.h3}
      onPress={()=> navigation.navigate('PostPage')}>Библиотека знаний</Text>

      {status && <Text style={styles.status}>{status}</Text>}

      <FlatList
        // onScrollBeginDrag={() => console.log("start")}
        style={styles.list}
        contentContainerStyle={{flexGrow: 1}}
        onEndReached={fetchMorePosts}
        onEndReachedThreshold={0.2}
        data={data}
        renderItem={({item, index}) => <PostsListItem item={item} index={index} />}
        keyExtractor={item => item.id}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  h3: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20
  },
  list: {
    marginBottom: 110,
    width: '100%',
  },
  status: {
    color: '#fff',
    fontSize: 25
  }
})

export default PostsList;
