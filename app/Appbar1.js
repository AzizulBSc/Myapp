import React from 'react'
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
export default function Appbar1({title}) {
   const navigation = useNavigation();
   const goBack = () => {
     navigation.goBack();
   };
  return (
    <View>
      <Appbar.Header style={{ backgroundColor:'skyblue' }}>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title={title?title:''} />
      </Appbar.Header>
    </View>
  );
}
