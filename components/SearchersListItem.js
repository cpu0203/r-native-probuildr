import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InfoIcon from 'react-native-vector-icons/Ionicons';





const SearchersListItem = ({data, modalParams}) => {

  const {modalVisible, setModalVisible} = modalParams

  const cardClicked = () => {
    setModalVisible(!modalVisible)
  }

  
  return (
    <TouchableOpacity onPress={cardClicked}>
    <View style={styles.itemCard}>

      <Text style={styles.itemCardTitle}>
        <View><Icon name="android-messages" size={24} style={{
          top: 6,
          paddingRight: 10
        }} color="#fff" /></View>
        {data.title}
      </Text>

      <Text style={styles.infoName}>
        <View style={{opacity: .6}}><InfoIcon name="md-information-circle-outline" size={16} style={{
          top: 4,
          paddingRight: 5
        }} color="#fff" /></View>
        {data.name}</Text>

      <Text style={styles.infoName}>
        <View style={{opacity: .6}}><InfoIcon name="location-outline" size={16} style={{
          top: 4,
          paddingRight: 5
        }} color="#fff" /></View>
        {data.location}</Text>

      <Text style={[styles.infoName, {textAlign: 'center', paddingTop: 10}]}>
        {data.data}</Text>

    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemCard: {
    backgroundColor: 'rgba(255,255,255,.15)',
    fontSize: 20,
    borderRadius: 8,
    padding: 7,
    paddingTop: 15,
    paddingBottom: 24,
    marginBottom: 20
  },
  itemCardTitle: {
    fontSize: 20,
    color: '#fff',
    opacity: .7,
    marginBottom: 20,
    lineHeight: 26
  },
  infoName: {
    fontSize: 14,
    color: '#fff',
    opacity: .5,
    
  }
})

export default SearchersListItem;
