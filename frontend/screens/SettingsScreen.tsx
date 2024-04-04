import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";

function SettingsScreen() {
  const [difficultyLevel, setDifficultyLevel] = useState("medium");
  const [startingLocation, setStartingLocation] = useState("here");

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🌍</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.headingText}>Settings</Text>
        <View>
          <Text style={styles.text}>Difficulty Level</Text>
          <RNPickerSelect
            value={difficultyLevel}
            placeholder={{ label: "- Choose a difficulty level -" }}
            onValueChange={(value, itemIndex) => setDifficultyLevel(value)}
            items={[
              { label: "Easy", value: "easy" },
              { label: "Medium", value: "medium" },
              { label: "Hard", value: "hard" },
            ]}
          />
        </View>
        <View>
          <Text style={styles.text}>Starting Location</Text>
          <RNPickerSelect
            value={startingLocation}
            placeholder={{ label: "- Choose a starting location -" }}
            onValueChange={(value, itemIndex) => setStartingLocation(value)}
            items={[
              { label: "Here", value: "here" },
              { label: "There", value: "there" },
              { label: "Anywhere", value: "anywhere" },
            ]}
          />
        </View>
        <Button title="Back" onPress={handleBackPress}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 150,
  },
  formContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-around",
  },
  headingText: {
    fontSize: 50,
    color: "white",
  },
  text: {
    fontSize: 25,
    color: "white",
  },
});

export default SettingsScreen;
