import { useState, useEffect, React } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Card, Title, Icon, MD3Colors } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';
const Categories = () => {
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
  const navigation = useNavigation();
  const handleCategoryCardClick = (category) => { 
    navigation.navigate('Category', { categoryId: category.id });
  };

  
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  card: {
    width: '48%', // Adjust the width as needed to fit your design
    marginBottom: 16,
  }
});




  return (
    <View style={{backgroundColor: theme.colors.primary }}>
    <View style={styles.container}>
      {data.map((category, index) => (
        <TouchableOpacity key={index}
          style={styles.cardTouchable}
          onPress={() => {
            handleCategoryCardClick(category);
          }} >
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
          </TouchableOpacity>
      ))}
    </View>
    </View>
  );
};


export default Categories;
