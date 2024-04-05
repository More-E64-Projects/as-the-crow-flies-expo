import React, { useContext, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, Pressable, Modal } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../AppContext"; //for userName
import styles from "../styles/styles";

function SettingsScreen() {
  const [difficultyLevel, setDifficultyLevel] = useState("medium");

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const contextValue = useContext(AppContext);
    if (!contextValue) {
        return null;
    }
  const { userName, setUserName } = contextValue;
  //need someway to save the name when the game is lost!

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🌍</Text>
      </View>
      <View style={styles.formContainer}>

        <Text style={[styles.text, styles.heading]}>Settings</Text>

        <View style={styles.settingContainer}>
          <Text style={[styles.text, styles.subheading]}>Player</Text>
          <Text style={[styles.text]}>{userName}</Text>

        </View>

        <View style={styles.settingContainer}>
          <Text style={[styles.text, styles.subheading]}>Difficulty</Text>
          <Text style={[styles.text]}>({difficultyLevel})</Text>
          <View style={styles.buttonGroup}>
            <Pressable
              style={styles.button}
              onPress={() => setDifficultyLevel("easy")}
              id="difficultyEasyButton"
            >
              <Text style={styles.text}>Easy</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => setDifficultyLevel("medium")}
              id="difficultyMediumButton"
            >
              <Text style={styles.text}>Medium</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => setDifficultyLevel("hard")}
              id="difficultyHardButton"
            >
              <Text style={styles.text}>Hard</Text>
            </Pressable>
          </View>
        </View>

        <Pressable style={styles.button} onPress={handleBackPress}>
          <Text style={styles.text}>Back</Text>
        </Pressable>
        
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
