import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Header = (props) => (
  <View style={styles.defaultView}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  defaultView : {
    height: 76,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%'
  },
  title: {
    marginVertical: 36,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333333'
  }
});

export default Header;
