import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Issues from '~/pages/Issues';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Gitissues',
        headerBackTitle: null,
      },
    },
    Issues,
  }),
);

export default Routes;
