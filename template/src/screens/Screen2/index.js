import {View, Text, Button} from 'react-native';
import React from 'react';

import routes from '../../constants/routes';

const {AppStackRoutes} = routes;

export default function Screen2({navigation}) {
  const goToScreen1 = () => navigation.navigate(AppStackRoutes.Screen1);
  return (
    <View>
      <Text>Screen2</Text>
      <Button onPress={goToScreen1} title="Go To Screen1" />
    </View>
  );
}
