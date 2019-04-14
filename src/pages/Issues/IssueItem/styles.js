import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: metrics.baseMargin * 2,
    padding: metrics.basePadding / 2,
    marginVertical: metrics.baseMargin / 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: metrics.baseRadius,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  issueData: {
    flexDirection: 'row',
    flex: 1,
  },
  issueInfo: {
    marginHorizontal: metrics.baseMargin,
    justifyContent: 'space-around',
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.darker,
  },
  login: {
    fontSize: 12,
    color: colors.regular,
  },
  icon: {
    color: colors.regular,
  },
});

export default styles;
