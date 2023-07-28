import * as React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import NavBar from './components/NavBar';

const Stack = createNativeStackNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular' : require("./assets/fonts/Poppins-Regular.ttf"),
    'Poppins-Bold' : require("./assets/fonts/Poppins-Bold.ttf"),
    'Poppins-Light' : require("./assets/fonts/Poppins-Light.ttf"),
    "JosefinSans-Regular" : require("./assets/fonts/JosefinSans-Regular.ttf")
  });
 
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/> */}
        <Stack.Screen name="Home" component={NavBar} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
