import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MyButton from './ButtonTest';

export default function App() {
  console.log("React Native App Started!");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyButton title="test1 Button" onPress ={()=> {alert('test1 Pressed.')}}/>
      <MyButton title="test2 Button" onPress ={()=> {alert('test2 Pressed.')}}>children</MyButton>
      <MyButton >test3 Button</MyButton>
      <MyButton></MyButton>
    </View>
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
