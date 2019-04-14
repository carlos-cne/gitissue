import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
    alignItems: 'center',
  },
  addRepository: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.baseMargin * 2,
    marginHorizontal: metrics.baseMargin * 2,
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    height: 30,
    paddingHorizontal: metrics.basePadding,
    marginRight: metrics.baseMargin * 2,
    fontSize: 18,
    color: colors.dark,
    borderRadius: metrics.baseRadius,
  },
  icon: {
    color: colors.dark,
  },
  error: {
    color: colors.danger,
  },
  repositoryList: {
    width: '100%',
    marginTop: metrics.baseMargin * 3,
  },
});

export default styles;
