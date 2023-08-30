import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { MyContext } from "./app/common/myContext";
import { StyleSheet, Text, View } from 'react-native';
import { MyContextProvider } from './app/common/myContext';
import { MyStack } from './app/core/routes/app.router';
import { LoadingIndicator } from './app/pods/loader/loader.component';

export default function App() {

  const { currentImage } = React.useContext(MyContext);
  console.log(currentImage)
  return (
    <MyContextProvider>
      <MyStack></MyStack>
      <StatusBar style="auto" />
    </MyContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'f1faee',
    justifyContent: 'center'
  },
});
