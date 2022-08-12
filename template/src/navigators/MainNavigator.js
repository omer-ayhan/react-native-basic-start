import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './stacks/AppStack';

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
