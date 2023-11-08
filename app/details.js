import { View, ScrollView } from 'react-native';
import { useState, useEffect, React, useRef } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import HTML from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, List } from 'react-native-paper';
import NetStatus from './NetStatus';
import Appbar1 from './Appbar1';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from './Loading';
export default function details() {
  const myRef = useRef(null);
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  const { id } = useLocalSearchParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://bwmriapp.com/api/category/' + id + '')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  return (
    <View ref={myRef}>
      <Appbar1 title="Details" />
      {/* <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}> */}
      {data ? (
        <View>
          <ScrollView>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 30,
                paddingRight: 30,
                paddingBottom: 200,
              }}
            >
              <HTML source={{ html: data?.data?.details?.details }} />
            </View>
          </ScrollView>
        </View>
      ) : (
        <Loading />
      )}
      <NetStatus />
      {/* </SafeAreaView> */}
    </View>
  );
}
