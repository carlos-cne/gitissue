import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  buttons: {
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
    paddingVertical: metrics.basePadding / 3,
    backgroundColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: metrics.baseRadius,
  },
  button: {
    fontSize: 12,
    color: colors.regular,
  },
  selected: {
    fontSize: 12,
    color: colors.darker,
  },
  error: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
