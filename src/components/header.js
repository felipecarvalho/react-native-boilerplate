import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  defaultView: {
    height: 76,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  title: {
    marginVertical: 36,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333333',
  },
});

const Header = ({ title }) => (
  <View style={styles.defaultView}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

Header.defaultProps = {
  title: 'Title',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
