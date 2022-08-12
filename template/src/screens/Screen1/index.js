import {View, Text, Button} from 'react-native';
import React from 'react';

import routes from '../../constants/routes';

const {AppStackRoutes} = routes;

export default function Screen1({navigation}) {
  const goToScreen2 = () => navigation.navigate(AppStackRoutes.Screen2);

  return (
    <View>
      <Text>Screen1</Text>
      <Button onPress={goToScreen2} title="Go To Screen2" />
    </View>
  );
}
