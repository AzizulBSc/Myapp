import { Link, useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import NetStatus from './NetStatus';
import { SafeAreaView } from 'react-native-safe-area-context';

const myprofile = () => {


  const openFacebookProfile = () => {
    const facebookProfileURL = 'https://www.facebook.com/azizulhCSE';

    Linking.openURL(facebookProfileURL).catch(err =>
      console.error('An error occurred: ', err)
    );
  };
const openGithubProfile = () => {
  const facebookProfileURL = 'https://github.com/AzizulBSc';

  Linking.openURL(facebookProfileURL).catch(err =>
    console.error('An error occurred: ', err)
  );
  };
  
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Cover
            source={{
              uri: 'https://fastly.picsum.photos/id/160/600/300.jpg?hmac=KxJup50ARvwfn07Rknl6q7LlbhwkC20csDwNjXaSxiE',
            }}
          />
          <Card.Content>
            <Avatar.Image
              size={80}
              // source={require('../assets/images/my1.png')}
              source={{
                uri: 'https://lh3.googleusercontent.com/a/ACg8ocITyOat4DUsVCC3MMwi19AK2K3oP1wFPsoLaCT-hKKqB5s=s288-c-no',
              }}
            />
            <Title>Azizul Hoque</Title>
            <Paragraph>azizulh8774@gmail.com</Paragraph>
            <Paragraph>Anowara,Chittagong,BD</Paragraph>
          </Card.Content>
        </Card>
        <Button
          icon="facebook"
          style={styles.button}
          mode="contained"
          buttonColor="#03A9F4"
          onPress={openFacebookProfile}
        >
          Facebook
        </Button>

        <Button
          icon="github"
          style={styles.button}
          mode="contained"
          onPress={openGithubProfile}
        >
          GitHub
        </Button>
        <Button
          style={styles.button}
          icon="home"
          mode="contained"
          buttonColor="#32a852"
          onPress={goBack}
        >
          HOME
        </Button>
      </View>

      <NetStatus />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
});
export default myprofile;
