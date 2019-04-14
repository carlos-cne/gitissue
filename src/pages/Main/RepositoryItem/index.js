import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const RepositoryItem = ({ repository, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate('Issues', { repository })}
  >
    <View style={styles.repositoryInfo}>
      <Image style={styles.avatar} source={{ uri: repository.avatar }} />
      <View style={styles.repositoryDescription}>
        <Text style={styles.repositoryName}>{repository.name}</Text>
        <Text style={styles.repositoryOwner}>{repository.owner}</Text>
      </View>
    </View>
    <Icon style={styles.icon} name="chevron-right" />
  </TouchableOpacity>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(RepositoryItem);
