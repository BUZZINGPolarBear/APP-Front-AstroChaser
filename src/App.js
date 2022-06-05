import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import MyButton from './ButtonTest';

export default function App() {
  console.log("React Native App Started!");

  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1); 
  return (
    <View style={styles.container}>
      <TextInput 
        // onChange={event => console.log(event.nativeEvent.text)}
        onChangeText={text => console.log(text)} // 윗 줄이랑 같은 결과!
        style={{borderWidth: 1, padding: 10, fontSize: 20}} />
      {/* <Text style={{fontSize: 20}}>{addition}</Text>
      <Text style={{fontSize: 20}}>{multiple}</Text>
      <MyButton title="addition" onPress={() => setAddition(addition + 2)} />
      <MyButton title="multiple" onPress={() => setMultiple(multiple * 2)} /> */}
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
