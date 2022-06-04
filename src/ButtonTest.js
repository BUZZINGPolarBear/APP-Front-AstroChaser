import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const MyButton = () => {
    return (
        <TouchableOpacity 
            onPress={() => alert('MyButton Clicked!')}
            hitSlop={{bottom:10, top:10, left:10, right:10}}
            pressRetentionOffset={{bottom:30, top:30, left:80, righ:80}}>
            <View style={{backgroundColor: 'yellow', padding: 10}}>
                <Text style={{fontSize: 20, color: 'blue'}}>MyButton</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MyButton;