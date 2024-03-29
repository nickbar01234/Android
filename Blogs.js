import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import React, {useState} from 'react';
const Blogs = () => {
    const [userInput, setUserInput] = useState('')


    return (  
        <View style={blogsStyle.container}>
            <Text></Text>
            <TextInput
                style={blogsStyle.input}
                onChangeText={setUserInput}
                value={userInput}
                placeholder='do something'
            >

            </TextInput>
        </View>
    );
}

const blogsStyle = StyleSheet.create({
    container: {
        backgroundColor: '#F08E8E',
        width: '100%',
    },

    input: {
        width: 300,
        height: 50,
        borderWidth: 1,
    },
});


export default Blogs;