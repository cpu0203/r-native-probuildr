import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import logo from '../assets/brutal_logo_for_site_about_constructioN.png'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowMenu } from '../redux/mainSlice';
import { appWhite } from '../assets/vars';
import { getGlavPage } from '../redux/glavPageSlice';



const MainHeader = () => {
  const navigation = useNavigation()
  const appVersion = useSelector(state => state.glavPage.versionValue)
  const versionOnSite = useSelector(state => state.glavPage.versionOnSite)
  const showMenu = useSelector(state => state.posts.showMenu)
  const dispatch = useDispatch()

  React.useEffect(()=> {
    dispatch(getGlavPage())
  }, [])

  const logoClicked = () => {}
  
  const barsHandle = () => {
    dispatch(toggleShowMenu())
  }

  const menuLingGo = arg => {
    if(arg === 2) {
      dispatch(toggleShowMenu())
      navigation.navigate('Ispolniteli')
    }
  }

  const versionHandler = () => {
    if(appVersion === versionOnSite) return appVersion
    return 'обновите приложение'
  }



  return (
    <>
      <View style={styles.heroBox}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.h1} onPress={logoClicked}>ProBuildr</Text>
        <TouchableOpacity style={styles.barsIconBox}>
          <Icon name="three-bars" size={30} color="#333" onPress={barsHandle} />
        </TouchableOpacity>
        <View style={[styles.menuBox, {
          right: showMenu ? -30 : -800,
          }]}>
          <Text style={[styles.menuString, {
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid',
          }]} onPress={()=> menuLingGo(1)}>На главную</Text>
          <Text style={styles.menuString} onPress={()=> menuLingGo(2)}>Ищу исполнителя</Text>
          <Text style={styles.menuVersion}>Версия: {versionHandler()}</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  heroBox: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    marginTop: 38,
    alignItems: 'center',
    marginRight: 30
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 30
  },
  barsIconBox: {
    marginLeft: 'auto',
    zIndex: 2
  },
  h1: {
    fontSize: 30,
    fontWeight: 700,
    padding: 30,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingTop: 0
  },
  menuBox: {
    position: 'absolute',
    minWidth: 260,
    backgroundColor: appWhite,
    // right: -30,
    top: 0,
    paddingTop: 44,
    paddingLeft: 10,
    paddingRight: 30,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    zIndex: 1,
    transition: '.5s'
  },
  menuString: {
    textTransform: 'uppercase',
    fontSize: 18,
    color: '#333',
    lineHeight: 45
  },
  menuVersion: {
    opacity: .6,
    marginTop: 20,
    paddingBottom: 10
  }
})

export default MainHeader;
