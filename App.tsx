import { Routes } from '@routes/index';
import Login from '@screens/Login';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
      <Routes/>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#c92f2f',
    alignItems: 'center',
    justifyContent: 'center'
  }
})