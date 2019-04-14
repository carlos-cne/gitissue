import React, { Component } from 'react';
import api from '~/services/api';
import PropTypes from 'prop-types';

import {
  View, Text, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import IssueItem from './IssueItem';

import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    loading: true,
    data: [],
    error: '',
    status: 'all',
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async (status = 'all') => {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');
    this.setState({ loading: true });
    try {
      const { data } = await api.get(`/repositories/${repository.id}/issues?state=${status}`);
      this.setState({ data, error: '', loading: false });
    } catch (error) {
      this.setState({ loading: false, error: 'Houve um erro. Tente novamente' });
    }
  };

  handleClickButton = (status) => {
    this.setState({ status });
    this.loadIssues(status);
  };

  renderIssue = ({ item }) => <IssueItem issue={item} />;

  renderListIssues = () => {
    const { data } = this.state;
    return (
      <FlatList data={data} keyExtractor={item => String(item.id)} renderItem={this.renderIssue} />
    );
  };

  render() {
    const { loading, error, status } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => this.handleClickButton('all')}>
            <Text style={status === 'all' ? styles.selected : styles.button}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleClickButton('open')}>
            <Text style={status === 'open' ? styles.selected : styles.button}>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleClickButton('closed')}>
            <Text style={status === 'closed' ? styles.selected : styles.button}>Fechadas</Text>
          </TouchableOpacity>
        </View>
        {!!error && <Text style={styles.error}>{error}</Text>}
        {loading ? <ActivityIndicator /> : this.renderListIssues()}
      </View>
    );
  }
}
