import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const LikeBtn = ({Btn, likePress}) => {
  return (
    <TouchableOpacity onPress={likePress} style={styles.border}>
      {Btn ? (
        <Image source={require('../../images/fill.png')} />
      ) : (
        <Image source={require('../../images/unfill.png')} />
      )}
    </TouchableOpacity>
  );
};

export default LikeBtn;

const styles = StyleSheet.create({
  border: {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
