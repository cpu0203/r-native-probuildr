import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import DoubleClick from 'react-native-double-tap';
import RenderHTML from 'react-native-render-html';
import { goUnicode } from '../assets/fns';
import Icon from 'react-native-vector-icons/Feather';




const PostsListItem = ({item, index}) => {
  const navigation = useNavigation()
  const [showDescription, setShowDescription] = React.useState(false)
  const myIcon = <Icon name="info" size={14} color="#e3e3e3" 
  style={styles.icon} />

  const { width } = useWindowDimensions()

  const source = {
    html: item.excerpt.rendered
  }
  const sourceTitle = {
    html: item.title.rendered
  }

  const tagsStylesTitle = {
    body: {
      whiteSpace: 'normal',
      color: '#fff',
      opacity: .8,
      fontSize: '20px',
      fontWeight: 500,
      paddingLeft: '10px',
      paddingRight: '10px',
      textTransform: 'uppercase'
    },
  }
  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: '#fff',
      fontSize: '18px',
      fontWeight: 300,
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  }


  const pressHandle = () => {
    if(showDescription) setShowDescription(false)

    navigation.navigate('PostPage', {
      title: goUnicode(item.title.rendered),
      content: item.content.rendered,
      thumbnail: item._embedded['wp:featuredmedia'][0].source_url,
      link: `https://www.probuildr.ru/post/?name=${item.slug}`
    })
  }

  const pressDoubleHandle = () => {
    setShowDescription(!showDescription)
  }





  return (
    <DoubleClick
      singleTap={pressHandle}
      doubleTap={pressDoubleHandle}
      delay={200}
    >
      <View style={styles.card}>
        {!showDescription ?
          <>
            <RenderHTML
              contentWidth={width}
              source={sourceTitle}
              tagsStyles={tagsStylesTitle}
            />
            <Text style={styles.textAbove}>{myIcon}  Описание по двойному клику</Text>
          </> :
          <RenderHTML
            contentWidth={width}
            source={source}
            tagsStyles={tagsStyles}
          />
        }
      </View>
    </DoubleClick>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    minHeight: 120,
    borderColor: 'rgba(200, 200, 200, 0.3)',
    borderWidth: 1,
    borderLeftWidth: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 5,
    marginBottom: 20,
    position: 'relative',
    justifyContent: 'center'
    // zIndex: 2
  },
  h4: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 500,
    textTransform: 'uppercase',
    lineHeight: 25
  },
  textAbove: {
    color: '#fff',
    opacity: .45,
    marginLeft: 10
  }
})

export default PostsListItem;
