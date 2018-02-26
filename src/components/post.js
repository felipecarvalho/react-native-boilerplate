import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  title: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  author: {
    color: '#999999',
    fontSize: 12,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginVertical: 10,
  },
  text: {
    color: '#666666',
    fontSize: 12,
    lineHeight: 19,
  },
});

const Post = ({ title, author, text }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <View style={styles.separator} />
    <Text style={styles.text}>{text}</Text>
  </View>
);

Post.defaultProps = {
  title: 'Title',
  author: 'Author',
  text: 'Lorem ipsum sit amet',
};

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  text: PropTypes.string,
};

export default Post;
