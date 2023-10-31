import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Card from '../../components/card/Card';
import axios from 'axios';
import Data from '../../context/Context';

const HomeScreen = ({navigation}) => {
  const {bookData, setBookData} = useContext(Data);
  const [tempData, setTempData] = useState();
  console.log('data----->', tempData);
  const fetchData = async () => {
    const response = await axios('https://books-list-api.vercel.app/books', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
      },
    });
    setBookData(response.data.data);
    setTempData(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchBook = txt => {
    let data = tempData;
    const filterData = data.filter(({title}) =>
      title.toLowerCase().includes(txt.toLowerCase()),
    );
    if (filterData.length > 0) {
      setBookData(filterData);
    } else {
      setBookData(data);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 20,
      }}>
      <View style={styles.container}>
        <Text style={styles.text}>Hi Nick</Text>
        <Image
          source={require('../../images/profile.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../../images/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          placeholderTextColor={'black'}
          placeholder="Search"
          style={styles.input}
          onChangeText={value => searchBook(value)}
        />
      </View>
      {tempData ? (
        <FlatList
          numColumns={2}
          data={bookData}
          renderItem={({item}) => <Card navigation={navigation} item={item} />}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#004D6D" />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 19,
    color: 'black',
  },
  input: {
    color: 'black',
    paddingLeft: 5,
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#EFEFEF',
    marginTop: 20,
    height: 45,
    paddingLeft: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    margin: 10,
    tintColor: 'gray',
  },
});
