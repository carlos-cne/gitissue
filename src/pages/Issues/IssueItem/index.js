import React from 'react';

import {
  View, Image, Text, TouchableOpacity, Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const goToUrl = url => Linking.openURL(url);

const IssueItem = ({ issue }) => (
  <TouchableOpacity style={styles.container} onPress={() => goToUrl(issue.html_url)}>
    <View style={styles.issueData}>
      <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
      <View style={styles.issueInfo}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {issue.title}
        </Text>
        <Text style={styles.login}>{issue.user.login}</Text>
      </View>
    </View>
    <Icon style={styles.icon} name="chevron-right" />
  </TouchableOpacity>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    html_url: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }).isRequired,
    title: PropTypes.string,
  }).isRequired,
};

export default IssueItem;
