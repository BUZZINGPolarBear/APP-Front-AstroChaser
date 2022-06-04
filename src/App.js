import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import MyButton from './ButtonTest';

export default function App() {
  console.log("React Native App Started!");
  return (
    <View style={styles.container}>
      <Text style={{color: 'blue'}}>Hello world!</Text>
      <StatusBar style="auto" />
      <Button title="Button" onPress={() => alert('Button Clicked!!!')} />
      <MyButton/>
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
