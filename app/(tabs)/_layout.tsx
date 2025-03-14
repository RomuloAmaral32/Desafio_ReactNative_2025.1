import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Slot, Tabs } from 'expo-router';
import { Provider } from 'react-redux';
import {store} from '../store';

export default function TabLayout() {
  return (
    <Provider store={store}>
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: {height:0} }}>
      <Slot/>
    </Tabs>
    </Provider>
  );
}
