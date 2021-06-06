/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ReduxWrapper from './src/ReduxWrapper';

AppRegistry.registerComponent(appName, () => ReduxWrapper);
