import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {RatingInput} from 'react-native-stock-star-rating';
import LikeBtn from '../likeBtn/LikeBtn';

const Card = ({item, navigation}) => {
  const {imageLink, title, price, rating, is_liked, reviews} = item;

  const [favouriteBtn, setFavouriteBtn] = useState(is_liked);
  const [starRating, setStarRating] = useState(rating);

  const likeToggle = () => {
    setFavouriteBtn(!favouriteBtn);
  };
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BookDetailScreen', item);
        }}>
        <ImageBackground style={styles.cardImg} source={{uri: imageLink}}>
          <LikeBtn Btn={favouriteBtn} likePress={likeToggle} />
        </ImageBackground>
      </TouchableOpacity>
      <Text style={styles.cardText}>
        {title.slice(0, 10)}
        {title.length > 10 ? '...' : null}
      </Text>
      <View style={styles.ratingCont}>
        <RatingInput
          rating={starRating}
          setRating={setStarRating}
          size={20}
          maxStars={5}
          bordered={false}
        />
        <Text style={styles.ratingtext}>({reviews})</Text>
      </View>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    marginRight: 20,
  },
  cardText: {
    color: 'black',
    fontSize: 18,
    marginTop: 3,
    fontWeight: 'bold',
  },
  cardImg: {
    height: 219,
    width: 147,
  },
  ratingCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingtext: {
    color: 'grey',
    marginLeft: 5,
  },
  price: {
    fontWeight: 'bold',
    color: 'black',
  },
});
