import React, { useState } from "react";
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";

function SettingsScreen(props) {
  const [difficultyLevel, setDifficultyLevel] = useState("medium");
  const [startingLocation, setStartingLocation] = useState("here");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🌍</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.headingText}>Settings</Text>
        <View>
          <Text style={styles.text}>Difficulty</Text>
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
        <Button title="Back"></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue"
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    fontSize: 150,
  },
  formContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: "green",
  },
  headingText: {
    fontSize: 50,
    color: "white"
  },
  text: {
    fontSize: 25,
    color: "white"
  }
});

export default SettingsScreen;
