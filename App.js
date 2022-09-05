import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import Landing from './screens/landing';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './screens/homepage';
import Main from './screens/main';
import FoodDetails from './screens/details';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <Landing />     */}
      {/* <StatusBar style="light" /> */}
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Homepage} options={{headerShown:false}} />
          <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
          <Stack.Screen name="Menu details" component={FoodDetails} options={{headerShown:false}}/>
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
