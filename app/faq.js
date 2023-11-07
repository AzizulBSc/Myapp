import { View, Text } from 'react-native';
import { useState, useEffect, React } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, List, Card } from 'react-native-paper';
import NetStatus from './NetStatus';
import Appbar1 from './Appbar1';
export default function faq() {
  
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
    <View>
      <Appbar1 title='FAQ' />
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

      <NetStatus />
    </View>
  );
}
