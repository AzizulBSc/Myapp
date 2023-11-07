import { useState, useEffect, React } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { StyleSheet, Text } from 'react-native';
import PopupMessage from './PopupMessage';
import { View } from '@bacons/react-views';
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
      paddingTop: 505,
    },
  });
  return isOnline ? (
    <View>
      <View style={styles.message}>
        <PopupMessage message="You are now Online" />
      </View>
    </View>
  ) : (
    <View style={styles.message}>
      <PopupMessage message="You are Offline pleas Connect Internet or Wifi" />
    </View>
  );
}
