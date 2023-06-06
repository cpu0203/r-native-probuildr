import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchValue, getSearching } from '../redux/searchSlice';


const Searching = () => {
  const [searchRequest, setSearchRequest] = React.useState('')
  const dispatch = useDispatch()
  const searched = useSelector(state => state.searching.searchValue)
  

  const myIcon = <Icon name="search" 
    size={20} 
    color="#838383" 
    style={styles.icon} />

    React.useEffect(()=>{
      if(searched.length > 0) setSearchRequest('')
    }, [searched])


  const inputHandle = async () => {
    if(searchRequest.trim().length < 3) return
    dispatch(clearSearchValue())
    await dispatch(getSearching(searchRequest.toLowerCase()))
    Keyboard.dismiss()
  }


  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchRequest}
        placeholderTextColor="#838383" 
        value={searchRequest}
        placeholder="поиск..."
        maxLength={40}
        onSubmitEditing={inputHandle}
      />
      <TouchableWithoutFeedback onPress={inputHandle}>{myIcon}</TouchableWithoutFeedback>
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
  marginBottom: 18,
  paddingLeft: 30,
  paddingRight: 30,
  zIndex: -1
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
    backgroundColor: 'rgba(155, 140, 109,0.2)',
    color: '#838383'
  },
  icon: {
    position: 'absolute',
    right: 40,
    opacity: .4
  }
})

export default Searching
