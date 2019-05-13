/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigator from './navigators/AppNavigators'
import {createAppContainer} from 'react-navigation'

const AppStackNavigatorContainer = createAppContainer(AppNavigator)

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
