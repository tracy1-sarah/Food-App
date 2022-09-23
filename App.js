import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import Loader from './screens/Loader';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './screens/landing';
import Homepage from './screens/homepage';
import FoodDetails from './screens/details';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <Loader /> */}
      {/* <StatusBar style="light" /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Homepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu details"
          component={FoodDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
