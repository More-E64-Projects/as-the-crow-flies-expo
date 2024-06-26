import React, { useContext } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "../AppContext";

function WinScreen() {
  const contextValue = useContext(AppContext);
  if (!contextValue) {
    return null;
  }

  const {
    score,
  } = contextValue;

  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate("Home" as never);
  };

  const getStarRating = (score: number) => {
    if (score == 1) {
      return "⭐️⭐️⭐️";
    } else if (score >= 0.6) {
      return "⭐️⭐️";
    } else {
      return "⭐️";
    }
  };

  // 08/04 Leaving this as it was, just in case we want to add more buttons later on.
  const buttons = [
    { text: "Home", color: "#158d43", onPress: handleHomePress },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>AtCF</Text>
      </View>
      <Text style={styles.heading}>You win! Now give us all jobs.</Text>
      <View>
        {/* Showing score output FOR DEBUGGING, probably will only show star rating in future */}
        <Text style={styles.gameInfo}>
          SCORE: {parseFloat((score * 100).toFixed(0).toString())}%
        </Text>
        <Text style={styles.gameInfo}> {getStarRating(score)}</Text>
        <Text style={styles.gameInfo}>
          Good Job! ...unless you got one star!
        </Text>
      </View>
      {/* 08/04 Leaving this as it was, just in case we want to add more buttons later on. */}
      <View>
        {buttons.map((button, index) => (
          <Pressable
            key={index}
            style={[styles.navButton, { backgroundColor: button.color }]}
            onPress={button.onPress}
          >
            <Text style={styles.navButtonText}>{button.text}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default WinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ebfbee',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 50,
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: 40,
    backgroundColor: 'darkblue',
    color: 'green',
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden', // Ensures the border radius is applied
  },
  heading: {
    fontSize: 36,
    textAlign: "center",
    backgroundColor: 'green',
    color: 'white',
    opacity: 0.5,
    marginTop: 16,
    width: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  gameInfo: {
    textAlign: 'center',
  },
  navButton: {
    padding: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 25,
    borderRadius: 10,
  },
  navButtonText: {
    fontSize: 28,
    color: 'white'
  }
});
