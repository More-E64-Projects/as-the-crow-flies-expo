import React, { useState } from "react";
import { SafeAreaView, View, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";

function SettingsScreen() {
  const [difficultyLevel, setDifficultyLevel] = useState("medium");

  const [modalVisible, setModalVisible] = useState(false);

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
          <Text style={styles.text}>Player Name</Text>
          <Text>Your Name Here</Text>
        </View>
        <View>
          <Text style={styles.text}>Difficulty Level</Text>
          <Text style={styles.text}>{difficultyLevel}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.text}>Change</Text>
          </Pressable>
        </View>
        <Pressable style={styles.button} onPress={handleBackPress}>
          <Text style={styles.text}>Back</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalWindow}>
              <Text style={styles.text}>Difficulty Level:</Text>
              <View style={{ flexDirection: "row" }}>
                <Pressable
                  style={styles.button}
                  onPress={() => setDifficultyLevel("easy")}
                >
                  <Text style={styles.text}>Easy</Text>
                </Pressable>
                <Pressable
                  style={styles.button}
                  onPress={() => setDifficultyLevel("medium")}
                >
                  <Text style={styles.text}>Medium</Text>
                </Pressable>
                <Pressable
                  style={styles.button}
                  onPress={() => setDifficultyLevel("hard")}
                >
                  <Text style={styles.text}>Hard</Text>
                </Pressable>
              </View>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.text}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
