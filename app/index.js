import "expo-router/entry";
import { useState, useEffect, React } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NetStatus from './NetStatus';
import {
  Card,
  Title,
  Icon,
  MD3Colors,
  Provider as PaperProvider,
  Appbar,
} from 'react-native-paper';
import axios from 'axios';
import { Link } from "expo-router";

const index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://bwmriapp.com/api/category')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      padding: 16,
    },
    card: {
      width: '30%', // Adjust the width as needed to fit your design
      marginBottom: 16,
    },
  });

  return (
    <PaperProvider>
      <View style={styles.container}>
        {data.map((category, index) => (
          <Link
            href={{
              pathname: 'category',
              params: { id: category.id },
            }}
            asChild
            key={index}
          >
            <Card style={styles.card}>
              <Card.Content>
                {category.name === 'গম' ? (
                  <Icon source="star" color={MD3Colors.error50} size={50} />
                ) : category.name === 'ভুট্টা' ? (
                  <Icon source="heart" color={MD3Colors.error50} size={50} />
                ) : (
                  <Icon source="magnify" color={MD3Colors.error50} size={50} />
                )}
                <Title>{category.name}</Title>
              </Card.Content>
            </Card>
          </Link>
        ))}
        <Link
          href={{
            pathname: 'contact',
          }}
          asChild
        >
          <Card style={styles.card}>
            <Card.Content>
              <Icon source="phone" color={MD3Colors.error50} size={50} />
              <Title>যোগাযোগ</Title>
            </Card.Content>
          </Card>
        </Link>
        <Link
          href={{
            pathname: 'faq',
          }}
          asChild
        >
          <Card style={styles.card}>
            <Card.Content>
              <Icon source="camera" color={MD3Colors.error50} size={50} />
              <Title>FAQ</Title>
            </Card.Content>
          </Card>
        </Link>
      </View>
      <NetStatus />
    </PaperProvider>
  );
};

export default index;
