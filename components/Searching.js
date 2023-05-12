import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Searching = () => {
  const [number, onChangeNumber] = React.useState('')

  const myIcon = <Icon name="search" size={20} color="#838383" style={styles.icon} />


  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholderTextColor="rgba(255,255,255,.7)" 
        value={number}
        placeholder="поиск..."
      />
      {myIcon}
    </View>
  )
}

const styles = StyleSheet.create({
  inputBox: {
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  height: 50,
  position: 'relative',
  marginBottom: 20
  },
  input: {
    flex: 1,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    paddingRight: 45,
    paddingLeft: 15,
    borderRadius: 25,
    backgroundColor: 'rgba(255,241,136,0.3)',
    color: '#fff'
  },
  icon: {
    position: 'absolute',
    right: 15,
    opacity: .8
  }
})

export default Searching
