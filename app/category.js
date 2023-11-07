import { View,SafeAreaView } from 'react-native';
import { useState, useEffect, React } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import 'expo-router/entry';
import {List } from 'react-native-paper';
import NetStatus from './NetStatus';
import Appbar1 from './Appbar1';
import Loading from './Loading';
export default function category() {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://bwmriapp.com/api/category/' + id + '')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Appbar1 title={data?.data?.name} />
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        {data && data.sub_category ? (
          data.sub_category.map((category, index) => (
            <Link
              key={index}
              href={{
                pathname: 'details',
                params: { id: category.id },
              }}
              asChild
            >
              <List.Item key={index} title={category.name} />
            </Link>
          ))
        ) : (
          <Loading />
        )}
        <NetStatus />
      </View>
    </SafeAreaView>
  );
}
