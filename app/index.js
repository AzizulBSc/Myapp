import "expo-router/entry";
import { useState, useEffect, React } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Card, Title, Icon, MD3Colors } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';
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
  
  // const navigation = useNavigation();
  // const handleCategoryCardClick = category => {
  //   navigation.navigate('home', { categoryId: category.id });
  // };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: 16,
    },
    card: {
      width: '30%', // Adjust the width as needed to fit your design
      marginBottom: 16,
    },
  });

  return (
    <View>
      <View style={styles.container}>
        {data.map((category, index) => (
          <Link
            href={{
              pathname: 'category',
              params: { id: category.id },
            }}
            asChild
          >
              <Card key={index} style={styles.card}>
                <Card.Content>
                  <Icon source="camera" color={MD3Colors.error50} size={50} />
                  <Title>{category.name}</Title>
                </Card.Content>
              </Card>
          </Link>
        ))}
      </View>
    </View>
  );
};

export default index;
