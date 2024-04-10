import React, { useContext, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../AppContext"; //for userName
import styles from "../styles/styles";
import PopoutSelect from "../components/PopoutSelect";

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
        <View style={styles.settingContainer}>
          <Text style={[styles.text, styles.heading]}>Settings</Text>
        </View>

        <View style={styles.settingContainer}>
          <Text style={[styles.text, styles.subheading]}>Player</Text>
          <Text style={[styles.text]}>{userName}</Text>
        </View>

        <View style={styles.settingContainer}>
          <Text style={[styles.text, styles.subheading]}>Difficulty</Text>
          <Text style={[styles.text]}>({difficultyLevel})</Text>
          <View style={styles.buttonGroup}>
            <PopoutSelect
              property="Difficulty"
              options={["easy", "medium", "hard"]}
              stateObject={difficultyLevel}
              stateSetter={setDifficultyLevel}
            ></PopoutSelect>
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