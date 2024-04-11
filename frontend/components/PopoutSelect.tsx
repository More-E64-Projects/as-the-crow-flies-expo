import { View, Modal, Pressable, Text } from "react-native";
import styles from "../styles/styles";
import { useState } from "react";
import { DifficultyLevel } from "../DifficultyLevel";

interface PopoutSelectProps {
  property: string;
  options: DifficultyLevel[];
  stateSetter: (level: DifficultyLevel) => void;
  stateObject: DifficultyLevel;
}

export default function PopoutSelect({
  property,
  options,
  stateSetter,
  stateObject,
}: PopoutSelectProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const pressablesMap = (inputOptions: DifficultyLevel[]) => {
    return inputOptions.map((option) => (
      <Pressable
        style={styles.button}
        onPress={() => stateSetter(option)}
        key={"pressable" + option.name}
      >
        <Text style={styles.text}>{option.name}</Text>
      </Pressable>
    ));
  };

  const pressables = pressablesMap(options);

  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.text}>Change</Text>
      </Pressable>
      <Modal visible={modalVisible} animationType={"fade"} transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalWindow}>
            <Text style={[styles.text, styles.subheading]}>{property}</Text>
            <Text style={styles.text}>{stateObject.name}</Text>
            <View style={styles.buttonGroup}>{pressables}</View>
            <View>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.text}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
