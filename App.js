import { Platform } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import AppNavigatorMobile from './src/navigation/AppNavigatorMobile';

export default function App() {
  if(Platform.OS == "web"){
    return <AppNavigator />;
  } else {
    return <AppNavigatorMobile />
  }
}
