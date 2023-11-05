import { View } from 'react-native';
import { useState, useEffect, React } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import 'expo-router/entry';
import { ActivityIndicator, List } from 'react-native-paper';
import NetStatus from './NetStatus';
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
    <View>
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
        <ActivityIndicator theme={{ colors: { primary: 'green' } }} />
      )}

      <NetStatus />
    </View>
  );
}
