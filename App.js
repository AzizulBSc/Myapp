import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
// import HomeScreen from './src/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './src/Category/Categories';
import Category from './src/Category/Category';
// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'lightblue',
//     secondary: 'yellow',
//   },
// };
const Stack = createStackNavigator();
function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Categories">
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Category" component={Category} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
