import React, { useContext, useState} from 'react';
import { AppContext } from './AppContext';
import { TextInput, StyleSheet } from 'react-native';

export default function NameInput () {

    const contextValue = useContext(AppContext);
    if (!contextValue) {
        // Handle the case where contextValue is null
        return null; // or some default behaviour
    }
    const { userName, setUserName } = contextValue;
    const [inputName, setInputName] = useState("");

    const handleNameChange = (name: string) => {
        setInputName(name);
        setUserName(name); 
        console.log("NameInput comp - ", name)
    }; //need someway to save the name when the game is lost!

    return (
        <TextInput 
            style={styles.text}
            placeholder="Enter your name"
            value={inputName}
            onChangeText={handleNameChange}
            placeholderTextColor="blue"
        />
    );
};
const styles = StyleSheet.create({
    text: {
        color: "black",
        backgroundColor: 'white'
    },
    
    });

