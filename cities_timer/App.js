import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MyContextProvider } from './app/common/myContext';
import { LoginContainer } from './app/pods/login/login.container';
import { MyStack } from './app/pods/login/routes/app.router';

export default function App() {
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
