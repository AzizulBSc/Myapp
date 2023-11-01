import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
// import { AppRegistry } from 'react-native';

import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import HomeScreen from './src/HomeScreen';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'lightblue',
    secondary: 'yellow',
  },
};
function App() {
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

  return (
    <PaperProvider theme={theme}>
      <HomeScreen />
      {/* <View style={styles.container}>
        <Text style={styles.heading}>BWMRIAPP</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.title}>Title: {item.name}</Text>
              <Text style={styles.body}>ID: {item.id}</Text>
            </View>
          )}
        />
      </View> */}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
});

export default App;
