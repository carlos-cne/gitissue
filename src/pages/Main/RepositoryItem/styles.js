import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: metrics.baseMargin * 2,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.basePadding,
    marginVertical: metrics.baseMargin / 2,
    paddingVertical: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },
  avatar: {
    width: 30,
    height: 30,
  },
  repositoryInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  repositoryDescription: {
    marginLeft: metrics.baseMargin,
  },
  repositoryName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.darker,
  },
  repositoryOwner: {
    fontSize: 13,
    fontWeight: 'normal',
    color: colors.regular,
  },
  icon: {
    color: colors.regular,
  },
});

export default styles;
