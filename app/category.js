import { View,SafeAreaView } from 'react-native';
import { useState, useEffect, React } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import 'expo-router/entry';
import {List,Button } from 'react-native-paper';
import NetStatus from './NetStatus';
import Appbar1 from './Appbar1';
import Loading from './Loading';
export default function category() {
  const { id } = useLocalSearchParams();
  const { name } = useLocalSearchParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://bwmriapp.com/api/subcategory/' + id + '')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Appbar1 title={name} />
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        {data && data.subcat ? (
          data.subcat.map((category, index) => (
            <Link
              key={index}
              href={{
                pathname: 'details',
                params: { id: category.id },
              }}
              asChild
            >
              {/* <List.Item key={index} title={category.name} /> */}
              <Button
                style={{ margin:4,backgroundColor:'green' }}
                mode="contained"
                // onPress={openFacebookProfile}
              >
                {category.name}
              </Button>
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </View>
      <NetStatus />
    </SafeAreaView>
  );
}
