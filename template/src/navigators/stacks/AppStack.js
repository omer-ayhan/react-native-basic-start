import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import routes from '../../constants/routes';

import Screen1 from '../../screens/Screen1';
import Screen2 from '../../screens/Screen2';

const Stack = createStackNavigator();
const {AppStackRoutes} = routes;

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppStackRoutes.Screen1} component={Screen1} />
      <Stack.Screen name={AppStackRoutes.Screen2} component={Screen2} />
    </Stack.Navigator>
  );
}
