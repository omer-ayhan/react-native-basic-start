import {View, Text, Button} from 'react-native';
import React from 'react';

import {SET_TITLE} from '../../store/context/types';
import routes from '../../constants/routes';
import useGlobalStore from '../../hooks/useGlobalStore';

const {AppStackRoutes} = routes;

export default function Screen2({navigation}) {
  const {state, dispatch} = useGlobalStore();

  const goToScreen1 = () => {
    dispatch({
      type: SET_TITLE,
      payload: AppStackRoutes.Screen1,
    });
    navigation.navigate(AppStackRoutes.Screen1);
  };

  return (
    <View>
      <Text>{state.title}</Text>
      <Button onPress={goToScreen1} title="Go To Screen1" />
    </View>
  );
}
