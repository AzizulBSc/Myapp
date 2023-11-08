import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

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

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: 'https://scontent.fdac1-1.fna.fbcdn.net/v/t39.30808-6/359516218_3162248257413735_3727146006429903365_n.png?stp=dst-png_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGzrcOhE4L60bieJjv7ODYy-cTg0U2dqQb5xODRTZ2pBrtBtUml5Kz7MHKCZyBCCrpYIhov8ia7axPcAbBZsPYG&_nc_ohc=AqwW6FqIz0oAX_ZR9_Z&_nc_zt=23&_nc_ht=scontent.fdac1-1.fna&oh=00_AfCcXUdOao98sRhvhkMIP6cfp_puia8mZPsLdrBT7Gq2uA&oe=654F877A',
          }}
        />
        <Card.Content>
          <Avatar.Image
            size={80}
            source={{
              uri: 'https://lh3.googleusercontent.com/a/ACg8ocITyOat4DUsVCC3MMwi19AK2K3oP1wFPsoLaCT-hKKqB5s=s288-c-no',
            }}
          />
          <Title>Azizul Hoque</Title>
          <Paragraph>azizulh8774@gmail.com</Paragraph>
          <Paragraph>Anowara, Chittagong,BD</Paragraph>
        </Card.Content>
      </Card>
      <Button
        style={styles.button}
        mode="contained"
        onPress={openFacebookProfile}
      >
        Facebook
      </Button>

      <Button style={styles.button} mode="outlined" onPress={openGithubProfile}>
        Github
      </Button>
    </View>
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
