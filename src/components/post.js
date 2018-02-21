import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Post = (props) => (
  <View style={styles.card}>
    <Text style={styles.title}>{props.title}</Text>
    <Text style={styles.author}>{props.author}</Text>
    <View style={styles.separator}></View>
    <Text style={styles.text}>{props.text}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5
  },
  title: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  author: {
    color: '#999999',
    fontSize: 12
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginVertical: 10,
  },
  text: {
    color: '#666666',
    fontSize: 12,
    lineHeight: 19
  }
});

export default Post;
