import {View, Text, Button} from 'react-native';
import React from 'react';

import routes from '../../constants/routes';
import useGlobalStore from '../../hooks/useGlobalStore';
import {SET_TITLE} from '../../store/context/types';

const {AppStackRoutes} = routes;

export default function Screen1({navigation}) {
  const {state, dispatch} = useGlobalStore();

  const goToScreen2 = () => {
    dispatch({
      type: SET_TITLE,
      payload: AppStackRoutes.Screen2,
    });
    navigation.navigate(AppStackRoutes.Screen2);
  };

  return (
    <View>
      <Text>{state.title}</Text>
      <Button onPress={goToScreen2} title="Go To Screen2" />
    </View>
  );
}
