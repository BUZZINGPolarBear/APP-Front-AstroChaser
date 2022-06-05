import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({title, children, onPress}) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
            hitSlop={{bottom:10, top:10, left:10, right:10}}
            pressRetentionOffset={{bottom:30, top:30, left:80, righ:80}}>
            <View style={{backgroundColor: 'yellow', padding: 10, marginTop:30}}>

                {/* props.chilren이 우선시된다. */}
                <Text style={{fontSize: 20, color: 'blue'}}>{children || title}</Text>

            </View>
        </TouchableOpacity>
    );
};

MyButton.defaultProps ={
    title: "MyButton",
    onPress: () => alert("MyButton Pressed!")
}

MyButton.PropTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
}

export default MyButton;