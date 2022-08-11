import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import MainNavigator from './navigators/MainNavigator';

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <MainNavigator />
    </SafeAreaProvider>
  );
}
