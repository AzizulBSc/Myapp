import { View, ScrollView } from 'react-native';
import { useState, useEffect, React } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import HTML from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, List } from 'react-native-paper';
import NetStatus from './NetStatus';
import Appbar1 from './Appbar1';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function details() {

   const navigation = useNavigation();

   const goBack = () => {
     navigation.goBack();
   };
  const { id } = useLocalSearchParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://bwmriapp.com/api/category/' + id + '')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  return (
    <View>
      <Appbar1 title="Details" />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {data ? (
          <View>
            {/* <ScrollView horizontal={true}> */}
            <ScrollView>
              <View
                style={{
                  // paddingLeft: 10,
                  // paddingRight: 30,
                  // paddingBottom: 120,
                  width: '100%',
                }}
              >
                <HTML
                  source={{ html: data?.data?.details?.details }}
                />
              </View>
              {/* </ScrollView> */}
            </ScrollView>
          </View>
        ) : (
          <ActivityIndicator theme={{ colors: { primary: 'green' } }} />
        )}
        <NetStatus />
      </SafeAreaView>
    </View>
  );
}
