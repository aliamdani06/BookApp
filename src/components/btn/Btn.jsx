import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Btn = () => {
  return (
    <TouchableOpacity style={styles.btnn}>
      <Text style={styles.btntext}>View Details</Text>
      <Image
        source={require('../../images/share.png')}
        style={{width: 20, height: 20, tintColor: 'white'}}
      />
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btnn: {
    width: '100%',
    height: 45,
    backgroundColor: '#004D6D',
    elevation: 3,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  btntext: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    paddingRight: 10,
  },
});
