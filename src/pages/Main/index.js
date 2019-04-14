import React, { Component } from 'react';

import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import api from '~/services/api';
import RepositoryItem from './RepositoryItem';

export default class Main extends Component {
  state = {
    repository: '',
    loading: true,
    repositories: [],
    error: '',
    refreshing: false,
  };

  async componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });
    const repositories = JSON.parse(await AsyncStorage.getItem('@Gitissue:repositories'));
    this.setState({ repositories: repositories || [], loading: false, refreshing: false });
  };

  addRepository = async () => {
    const { repository, repositories } = this.state;
    this.setState({ loading: true });
    try {
      const { data } = await api.get(`/repos/${repository}`);
      if (repositories.find(repo => repo.id === data.id)) {
        return this.setState({ error: 'Repositório já adicionado.' });
      }
      const repositoryData = {
        id: data.id,
        owner: data.owner.login,
        name: data.name,
        avatar: data.owner.avatar_url,
      };

      await this.setState(prevState => ({
        repositories: [...prevState.repositories, repositoryData],
        error: '',
      }));
      this.saveInStorage();
    } catch (error) {
      // Não será validado por enquanto os erros de conexão.
      this.setState({ error: 'Repositório não encontrado.' });
    } finally {
      this.setState({ loading: false, repository: '' });
    }
  };

  saveInStorage = async () => {
    const { repositories } = this.state;
    await AsyncStorage.setItem('@Gitissue:repositories', JSON.stringify(repositories));
  };

  renderRepositoryItem = ({ item }) => <RepositoryItem repository={item} />;

  renderRepositoryList = () => {
    const { repositories, refreshing } = this.state;
    return (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderRepositoryItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { repository, loading, error } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.addRepository}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="usuário/repositório"
            value={repository}
            onChangeText={text => this.setState({ repository: text })}
          />
          <TouchableOpacity onPress={() => this.addRepository()}>
            {loading ? <ActivityIndicator /> : <Icon name="plus" size={20} style={styles.icon} />}
          </TouchableOpacity>
        </View>
        {!!error && <Text style={styles.error}>{error}</Text>}
        <View style={styles.repositoryList}>{this.renderRepositoryList()}</View>
      </View>
    );
  }
}
