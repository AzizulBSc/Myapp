import { View, Text, H3, ScrollView } from 'react-native';
import { useState, useEffect, React, useRef } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import HTML from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Lis, Appbar } from 'react-native-paper';

  import ImageManipulator from 'react-native-image-manipulator';
import Loading from './Loading';
import Appbar1 from './Appbar1';
export default function contact() {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const myRef = useRef(null);
  const { id } = useLocalSearchParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://bwmriapp.com/api/communication')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);


  // Parse the HTML content
  const htmlContent = data?.details;

  // Function to reduce image resolution
  const reduceImageResolution = async (imageUrl) => {
    try {
      const manipResult = await ImageManipulator.manipulateAsync(
        imageUrl,
        [{ resize: { width: newWidth, height: newHeight } }],
        { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
      );

      return manipResult.uri;
    } catch (error) {
      console.error('Image manipulation error:', error);
      return imageUrl; // Return the original image URL in case of an error
    }
  };

  const renderers = {
    // img: (htmlAttribs, children, convertedCSS, passProps) => {
    //    const newImageUrl = reduceImageResolution(htmlAttribs.src);
    //   if (htmlAttribs.src) {
    //     // Reduce image resolution and replace the source
       
    //     return <Image source={{ uri: newImageUrl }} style={{ width: 180, height: 200 }} />;
    //   }
    //   return <Image source={{ uri: htmlAttribs.src }} style={{ width: 180, height: 200 }} />;
    // },
  };




  return (
    <View ref={myRef}>
      <Appbar1 title="Communication" />
      {data && data?.details != null ? (
        <View>
          <ScrollView>
            <ScrollView horizontal={true}>
              <View >
                <HTML source={{ html: htmlContent }} renderers={renderers} />
              </View>
            </ScrollView>
          </ScrollView>
        </View>
      ) : (<Loading />)}
    </View>
  );
}
