import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PopupMessage = ({ message }) => {
  let styles = {};

  message.includes('Online')
    ? (styles = StyleSheet.create({
        container: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'green',
          padding: 10,
        },
      }))
    : (styles = StyleSheet.create({
        container: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'red',
          padding: 10,
        },
      }));

  const [visible, setVisible] = useState(true);
  useEffect(() => {
    // Automatically hide the component after 3 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return visible ? (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  ) : null;
};
export default PopupMessage;
