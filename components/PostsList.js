import React, { useEffect } from 'react';
import {View, StyleSheet, Text, FlatList, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { currentPageToOne, fetchPosts, setPostsZero } from '../redux/mainSlice';
import { useNavigation } from '@react-navigation/native';
import PostsListItem from './PostsListItem';
import appWhite from '../assets/vars'

import Icon from 'react-native-vector-icons/FontAwesome';
import IconEvil from 'react-native-vector-icons/MaterialIcons';
import { clearSearchValue, clearStatus } from '../redux/searchSlice';
import { goUnicode } from '../assets/fns';





const PostsList = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const searchReq = useSelector(state => state.searching.searchReq)
  const searchData = useSelector(state => state.searching.searchValue)
  const data = useSelector(state => state.posts.posts)
  const count = useSelector(state => state.posts.pagesQuantity)
  const status = useSelector(state => state.posts.status)
  const searchStatus = useSelector(state => state.searching.status)
  const currentPage = useSelector(state => state.posts.currentPage)
  const myIcon = <Icon name="book" size={20} color="#e3e3e3" style={styles.icon} />
  const checkIcon = <Icon name="check" size={22} color="#e3e3e3" />
  const closeIcon = <Icon name="close" size={24} color="#e3e3e3" />
  const closeStatusIcon = <Icon name="close" size={24} color="#ff541f" />
  const refreshIcon = <IconEvil name="refresh" size={24} color="#e3e3e3" />

  useEffect(()=>{
    dispatch(setPostsZero())
    dispatch(fetchPosts(currentPage))
  }, [])


  const getCurrentPost = async (postId) => {
    const req = await fetch(`https://www.probuildr.ru/rest/wp-json/wp/v2/posts/${postId}?_embed`)
    res = await req.json()
    return res
  }

  const fetchMorePosts = () => {
    if(currentPage < count) dispatch(fetchPosts(+currentPage + 1))
  }

  const serchTitleClick = async item => {

    const clickedPost = await getCurrentPost(item.id)
    navigation.navigate('PostPage', {
      title: goUnicode(clickedPost.title.rendered),
      content: clickedPost.content.rendered,
      thumbnail: clickedPost._embedded['wp:featuredmedia'][0].source_url
    })
  }

  const closeSearched = () => {
    dispatch(clearSearchValue())
  }

  const searchStatusPressed = () => {
    dispatch(clearStatus())
  }

  const refreshHandle = () => {
    dispatch(currentPageToOne())
    dispatch(setPostsZero())
  }

  


  
  return (
    <View style={{paddingBottom: 20}}>
      {!searchData.length ?
        !status && <View style={styles.biblTitleBox}>
          <Text style={styles.h3} onPress={()=> navigation.navigate('PostPage')}>
            {myIcon} Библиотека знаний
          </Text>
          <TouchableHighlight style={styles.refreshIc} onPress={refreshHandle}>{refreshIcon}</TouchableHighlight>
        </View> :
        <Text style={styles.h3} onPress={()=> navigation.navigate('PostPage')}>
          {myIcon} Результаты поиска "{searchReq}" ({searchData.length}):
        </Text>
      }

      {status && <Text style={[styles.h3, {marginBottom: 25}]}>{status}</Text>}
      {searchStatus && <Text style={styles.searchStatus} onPress={searchStatusPressed}>{closeStatusIcon} {searchStatus}</Text>}

      {/* <Text style={{
        color: '#fff',
        fontSize: 20,
        marginBottom: 10
      }}>currentPage = {currentPage}</Text> */}

      {/* SEARCHED LIST */}
      {searchData.length > 0 &&
        <View style={styles.list2wrapper}>
          <Text onPress={closeSearched} style={styles.closeIconOver}>{closeIcon}</Text>
        <FlatList
          style={styles.list2}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 50}}
          data={searchData}
          renderItem={({item, index}) => <Text style={styles.searchedTitle}
            onPress={() => serchTitleClick(item)}>{checkIcon} {goUnicode(item.title)}</Text>}
          keyExtractor={item => item.id}
        />
        </View>
      }

      {/* POSTS LIST */}
      {!searchData.length > 0 &&
        <FlatList
          contentContainerStyle={{paddingBottom: 50}}
          onEndReached={fetchMorePosts}
          onEndReachedThreshold={0.3}
          data={data}
          renderItem={({item, index}) => <PostsListItem item={item} index={index} />}
          keyExtractor={item => item.id}
        />
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  h3: {
    fontSize: 18,
    color: '#fff',
  },
  list2wrapper: {
    position: 'relative'
  },
  list2: {
    marginBottom: 30,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.2)',
    borderRadius: 5,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  /* status: {
    color: '#fff',
    fontSize: 25,
    // textAlign: 'center',
    paddingBottom: 20,
  }, */
  searchStatus: {
    textAlign: 'left',
    fontSize: 20,
    color: '#ff541f',
    paddingBottom: 20,
    opacity: .7
  },
  searchedTitle: {
    color: '#fff',
    opacity: .8,
    fontSize: 20,
    lineHeight: 30,
    textTransform: 'uppercase',
    paddingBottom: 25
  },
  closeIconOver: {
    width: 22,
    height: 22,
    position: 'absolute',
    top: 10,
    right: -8,
    zIndex: 2
  },
  biblTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  refreshIc: {
    // backgroundColor: 'pink',
    marginLeft: 'auto'
  }

})

export default PostsList;
