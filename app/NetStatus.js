import { useState, useEffect, React } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { StyleSheet, Text } from 'react-native';
export default function NetStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const styles = StyleSheet.create({
    message: {
      marginTop: 200,
      paddingLeft: 30,
    },
  });
  return (
    <Text style={styles.message}>
      You are{' '}
      <Text style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'online' : 'offline'}
      </Text>
    </Text>
  );
}
