import { View, Text } from 'react-native';
import { useState, useEffect, React } from 'react';
import axios from 'axios';
import { List, Card } from 'react-native-paper';
import NetStatus from './NetStatus';
import Appbar1 from './Appbar1';
import Loading from './Loading';
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
      <Appbar1 title="FAQ" />
      {data ? (
        data.map(faq => (
          <Card
            key={faq.id}
            style={{ marginTop: 20, backgroundColor: 'light' }}
          >
            <Card.Content style={{ paddingLeft: 50, paddingRight: 50 }}>
              <List.Item title={faq.question} style={{ fontWeight: 'bold' }} />
              <Text>{faq.ans}</Text>
            </Card.Content>
          </Card>
        ))
      ) : (
        <Loading />
      )}

      <NetStatus />
    </View>
  );
}
