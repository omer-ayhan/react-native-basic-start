import {SafeAreaView} from 'react-native';
import React from 'react';

export default function Page({children}) {
  return <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>;
}
