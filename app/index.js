import 'expo-router/entry';
import { useState, useEffect, React, useRef } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import NetStatus from './NetStatus';
import { Card, Title, Icon, MD3Colors } from 'react-native-paper';
import axios from 'axios';
import { Link } from 'expo-router';
import Loading from './Loading';

const index = () => {
  const ref = useRef(null);
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
      backgroundColor: 'skyblue',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} ref={ref}>
      <View style={styles.container}>
        {data ? (
          data.map((category, index) => (
            <Link
              href={{
                pathname: 'category',
                params: { id: category.id, name: category.name },
              }}
              asChild
              key={index}
            >
              <Card style={styles.card}>
                <Card.Content>
                  {category.name === 'গম' ? (
                    <Icon source="star" color={MD3Colors.OnPrimary} size={50} />
                  ) : category.name === 'ভুট্টা' ? (
                    <Icon
                      source="heart"
                      color={MD3Colors.OnPrimary}
                      size={50}
                    />
                  ) : (
                    <Icon
                      source="magnify"
                      color={MD3Colors.OnPrimary}
                      size={50}
                    />
                  )}
                  <Title>{category.name}</Title>
                </Card.Content>
              </Card>
            </Link>
          ))
        ) : (
          <Link href="">
            <Loading />
          </Link>
        )}
        <Link
          href={{
            pathname: 'contact',
          }}
          asChild
        >
          <Card style={styles.card}>
            <Card.Content>
              <Icon source="phone" color={MD3Colors.OnPrimary} size={50} />
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
              <Icon source="help" color={MD3Colors.OnPrimary} size={50} />
              <Title>জিজ্ঞাসা</Title>
            </Card.Content>
          </Card>
        </Link>
        <Link
          href={{
            pathname: 'myprofile',
          }}
          asChild
        >
          <Card style={styles.card}>
            <Card.Content>
              <Icon source="account" color={MD3Colors.secondary} size={50} />
              <Title style={{ fontSize: 14 }}>Developer</Title>
            </Card.Content>
          </Card>
        </Link>
      </View>
      <NetStatus />
    </SafeAreaView>
  );
};

export default index;
