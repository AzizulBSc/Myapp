import { View, Text } from 'react-native';
import { useState, useEffect, React } from 'react';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import axios from 'axios';
import HTML from 'react-native-render-html';
import { ActivityIndicator, List } from 'react-native-paper';
export default function details() {
  const { details1 } = useLocalSearchParams();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('https://bwmriapp.com/api/detiails/' + id + '')
  //     .then(response => {
  //       setData(response.data.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data: ', error);
  //     });
  // }, []);
  // setData(details1.details);
  console.log(details1);
  return (
    <View>
    <HTML source={{ html: details1 }} />
    </View>
  );
}
