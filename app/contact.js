import { View, ScrollView } from 'react-native';
import { useState, useEffect, React, useRef } from 'react';
import {useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import HTML from 'react-native-render-html';
import Loading from './Loading';
import Appbar1 from './Appbar1';
export default function contact() {
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
  return (
    <View ref={myRef}>
      <Appbar1 title="Communication" />
      {data && data?.details != null ? (
        <View>
          <ScrollView>
            <ScrollView horizontal={true}>
              <View>
                <HTML source={{ html: data?.details }} />
              </View>
            </ScrollView>
          </ScrollView>
        </View>
      ) : (
        <Loading />
      )}
    </View>
  );
}
