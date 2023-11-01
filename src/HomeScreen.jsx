import { useTheme } from 'react-native-paper';
import { View, Text } from "react-native";
import Categories from "./Category/Categories";
const HomeScreen = () => {
  const theme = useTheme();
  return (
    <View style={{backgroundColor: theme.colors.primary }}>
      <Categories />
    </View>
  )
}
export default HomeScreen;