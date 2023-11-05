import { View, Text, H3, ScrollView } from 'react-native';
import { useState, useEffect, React, useRef } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import HTML from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, List, Appbar, Card } from 'react-native-paper';
export default function faq() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  const myRef = useRef(null);
  const { id } = useLocalSearchParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://bwmriapp.com/api/faq')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  console.log(data);
  return (
    <View ref={myRef}>
      {data ? (
        data.map(faq => (
          <Card key={faq.id}>
            <List.Item title={faq.question} />
            <Text>{faq.ans}</Text>
          </Card>
        ))
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator animating={true} color="green" />
        </View>
      )}
    </View>
  );
}
