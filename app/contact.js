import { View, ScrollView, WebView } from 'react-native';
import { useState, useEffect, React } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import HTML from 'react-native-render-html';
import RenderHtml from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import NetStatus from './NetStatus';
import Appbar1 from './Appbar1';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function contact() {
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
  return (
    <View>
      <Appbar1 title="Communication" />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {data && data.details != null ? (
          <View>
            <ScrollView>
                  <View
                    style={{
                      paddingLeft: 30,
                      paddingRight: 30,
                      paddingBottom: 120,
                    }}
                  >
                    <HTML source={{ html: data?.details }} />
                  </View>
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
