import { useState, useEffect, React } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Icon, MD3Colors } from 'react-native-paper';
import axios from 'axios';
const Categories = () => {
  // const categories = [
  //   { title: 'Category 1', description: 'Description of Category 1' },
  //   { title: 'Category 2', description: 'Description of Category 2' },
  //   { title: 'Category 3', description: 'Description of Category 3' },
  // ];
  const [data, setData] = useState([]);
  useEffect(() => {
    // Replace this URL with the API you want to fetch data from
    axios
      .get('https://bwmriapp.com/api/category')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  console.log(data);

  return (
    <View style={styles.container}>
      {data.map((category, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Icon
              source="camera"
              color={MD3Colors.error50}
              size={50}
            />
            <Title>{category.name}</Title>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  card: {
    width: '48%', // Adjust the width as needed to fit your design
    marginBottom: 16,
  },
});

export default Categories;
