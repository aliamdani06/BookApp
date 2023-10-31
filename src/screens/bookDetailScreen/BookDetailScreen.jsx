import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {RatingInput} from 'react-native-stock-star-rating';
import Btn from '../../components/btn/btn';
import {useRoute} from '@react-navigation/native';

const BookDetailScreen = ({navigation}) => {
  const {
    author,
    country,
    title,
    reviews,
    price,
    imageLink,
    language,
    pages,
    year,
    rating,
  } = useRoute().params;
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginTop: 20}}>
          <Image
            source={require('../../images/back.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>

        <View style={styles.card}>
          <Image
            resizeMode="cover"
            style={styles.Img}
            source={{uri: imageLink}}
          />

          <View style={styles.detailCont}>
            <View style={styles.detail}>
              <Text style={styles.title}>Rating</Text>
              <RatingInput
                rating={rating}
                size={20}
                maxStars={5}
                bordered={false}
              />
            </View>

            <View style={styles.detail}>
              <Text style={styles.title}>Reviews</Text>
              <Text style={styles.subtile}>({reviews})</Text>
            </View>

            <View style={styles.detail}>
              <Text style={styles.title}>Price</Text>
              <Text style={styles.subtile}>$ {price}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.heading}>{title}</Text>

        <View style={styles.bookDetail}>
          <Text style={styles.detailHead}>Author:</Text>
          <Text style={styles.subDetailHead}>{author}</Text>
        </View>
        <View style={styles.bookDetail}>
          <Text style={styles.detailHead}>Country:</Text>
          <Text style={styles.subDetailHead}>{country}</Text>
        </View>
        <View style={styles.bookDetail}>
          <Text style={styles.detailHead}>Language:</Text>
          <Text style={styles.subDetailHead}>{language}</Text>
        </View>
        <View style={styles.bookDetail}>
          <Text style={styles.detailHead}>Year:</Text>
          <Text style={styles.subDetailHead}>{year}</Text>
        </View>
        <View style={styles.bookDetail}>
          <Text style={styles.detailHead}>Pages:</Text>
          <Text style={styles.subDetailHead}>{pages}</Text>
        </View>

        <Btn />
      </View>
    </ScrollView>
  );
};

export default BookDetailScreen;

const styles = StyleSheet.create({
  Img: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  title: {
    fontWeight: '500',
    color: 'black',
    fontSize: 14,
  },
  subtile: {
    color: 'grey',
    fontWeight: '400',
    fontSize: 14,
  },
  detail: {
    alignItems: 'center',
  },
  detailCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  card: {
    marginTop: 30,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
  },
  heading: {
    fontWeight: '600',
    fontSize: 22,
    color: 'black',
    marginTop: 15,
    marginBottom: 20,
  },
  bookDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  detailHead: {
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
    paddingRight: 4,
  },
  subDetailHead: {
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
  },
});
