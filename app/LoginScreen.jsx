// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useTheme } from 'react-native-paper';

const LoginScreen = () => {
  const { colors } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', { username, password });
    // You can add authentication logic here, e.g., API calls, Firebase authentication, etc.
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16, backgroundColor: colors.background }}>
      <TextInput
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={{ marginBottom: 16 }}
      />
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
};

export default LoginScreen;
