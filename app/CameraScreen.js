// CameraScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import Appbar1 from './Appbar1';
import * as MediaLibrary from 'expo-media-library';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
const CameraScreen = () => {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const cameraRef = useRef(null);

  const askForCameraPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setCameraPermission(status === 'granted');
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImageUri(photo.uri);
      saveImage(photo.uri);
    }
  };

 const saveImage = async uri => {
   const fileName = uri.split('/').pop();
   const newPath = FileSystem.documentDirectory + fileName;

   try {
     await FileSystem.moveAsync({
       from: uri,
       to: newPath,
     });

     // Save the image to the device's media library
     await MediaLibrary.createAssetAsync(newPath);
     console.log('Image saved to:', newPath);
   } catch (error) {
     console.error('Error saving image:', error);
   }
 };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <Appbar1 title="Camera" />
        {!cameraPermission ? (
          // <TouchableOpacity onPress={askForCameraPermission}>
          <Button
            icon="key"
            style={styles.button}
            mode="contained"
            buttonColor="#F44E03"
            onPress={askForCameraPermission}
          >
            Grant Camera Permission
          </Button>
        ) : (
          // </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Camera
              style={{ flex: 1 }}
              type={Camera.Constants.Type.back}
              ref={cameraRef}
            />
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              {/* <TouchableOpacity style={{ margin: 10 }} onPress={takePicture}> */}
              <Button
                icon="key"
                style={styles.button}
                mode="contained"
                buttonColor=""
                onPress={takePicture}
              >
                Take Picture
              </Button>
              {/* </TouchableOpacity> */}
            </View>
          </View>
        )}
        {imageUri && (
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Text>Image Preview:</Text>
            <Image
              source={{ uri: imageUri }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        )}
      </View>
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
export default CameraScreen;
