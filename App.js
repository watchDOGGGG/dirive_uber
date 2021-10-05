import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View,KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';


export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
     <SafeAreaProvider>
      <KeyboardAvoidingView style={{flex:1}}
      behavior={Platform.OS == "android"?"padding" : "height"}
      >
      <Stack.Navigator>
         <Stack.Screen
         name="HomeScreen"
         component={Home}
         options={{
           headerShown:false,
         }}
         />
         <Stack.Screen
         name="MapScreen"
         component={MapScreen}
         options={{
           headerShown:false,
         }}
         />
       </Stack.Navigator>
      </KeyboardAvoidingView>
      {/* <Home/> */}
     </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
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
