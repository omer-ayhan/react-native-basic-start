import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import MainNavigator from './navigators/MainNavigator';
import GlobalProvider from './store/context/GlobalProvider';

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GlobalProvider>
        <MainNavigator />
      </GlobalProvider>
    </SafeAreaProvider>
  );
}
