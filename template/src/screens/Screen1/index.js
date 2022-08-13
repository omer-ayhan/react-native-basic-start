import {View, Text, Button} from 'react-native';
import React from 'react';
import Config from 'react-native-config';

import routes from '../../constants/routes';
import useGlobalStore from '../../hooks/useGlobalStore';
import {SET_TITLE} from '../../store/context/types';

const {AppStackRoutes} = routes;

export default function Screen1({navigation}) {
  const {state, dispatch} = useGlobalStore();
  console.log(Config);
  const {ENV_TEST} = Config;

  const goToScreen2 = () => {
    dispatch({
      type: SET_TITLE,
      payload: AppStackRoutes.Screen2,
    });
    navigation.navigate(AppStackRoutes.Screen2);
  };

  return (
    <View>
      <Text>Env Test: {ENV_TEST}</Text>
      <Text>{state.title}</Text>
      <Button onPress={goToScreen2} title="Go To Screen2" />
    </View>
  );
}
