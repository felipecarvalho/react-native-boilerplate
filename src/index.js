/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';

import Header from 'components/header.js';
import Post from 'components/post.js';

import 'config/reactotron.config';
import 'config/devtools.config';

export default class App extends Component {
  static defaultProps = {
    appTitle: 'News Feed',
    posts: [
      { id: 0, title: 'Tight supply, rising prices weigh on US home sales', author: 'Lucia Mutikani', text: 'U.S. home sales unexpectedly fell in January, leading to the biggest year-on-year decline in more than three years, as a persistent shortage of houses pushed up prices and kept first-time buyers out of the market.' },
      { id: 1, title: 'Tops Markets Files for Chapter 11 Bankruptcy Protection', author: 'Katy Stech Fere', text: 'Supermarket chain Tops Markets LLC filed for bankruptcy protection Wednesday, the latest regional grocery chain to look to restructure its balance sheet as consumers move to nontraditonal food retailers.' },
      { id: 2, title: 'Supreme Court limits Dodd-Frank protections for whistleblowers', author: 'Lydia Wheeler', text: 'In a unanimous decision, the court ruled the protections only kick in when a whistleblower reports fraud to the SEC.' },
      { id: 3, title: 'Sling TV now has 2.2M subscribers', author: 'Sarah Perez', text: 'Dish-owned streaming TV service Sling TV now has 2.21 million subscribers at the end of the fourth quarter, the company announced this morning.' },
      { id: 4, title: 'Rite Aid: Its Time To Move On', author: 'Vince Martin', text: 'RAD shareholders no doubt are disappointed with the Albertsons deal, a mostly stock deal that values Rite Aid barely above $2 against the $9 originally offered.' },
      { id: 5, title: 'Global cybercrime costs $600 bn annually: study', author: 'Daily Mail', text: 'The annual cost of cybercrime has hit $600 billion worldwide, fueled by growing sophistication of hackers and proliferation of criminal marketplaces.' },
    ]
  }

  static propTypes = {
    appTitle: PropTypes.string,
    posts: PropTypes.array
  }

  componentDidMount(){
    console.tron.log(`It's running`);
  };

  render() {
    return (
      <View style={styles.defaultView}>
        <Header title={this.props.appTitle} />
        <ScrollView style={styles.scroll}>
          {this.props.posts.map(post =>
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              text={post.text}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaultView: {
    flex: 1,
    backgroundColor: '#EE7777'
  },
  scroll: {
    paddingTop: 10
  }
});
