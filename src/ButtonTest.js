import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const MyButton = () => {
    return (
        <TouchableOpacity onPress={() => alert('MyButton Clicked!')}>
            <View style={{backgroundColor: 'yellow', padding: 10}}>
                <Text style={{fontSize: 20, color: 'blue'}}>MyButton</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MyButton;