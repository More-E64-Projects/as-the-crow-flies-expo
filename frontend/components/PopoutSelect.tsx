import { View, Modal, Pressable, Text } from "react-native";
import styles from "../styles/styles";
import { useState } from "react";

export default function PopoutSelect({
  property,
  options,
  stateSetter,
  stateObject,
}: any) {
  const [modalVisible, setModalVisible] = useState(false);

  const pressablesMap = (inputOptions: Array<string>) => {
    let mappedPressables;
    mappedPressables = inputOptions.map((option) => {
      return (
        <Pressable
          style={styles.button}
          onPress={() => stateSetter(option)}
          key={"pressable" + option}
        >
          <Text style={styles.text}>{option}</Text>
        </Pressable>
      );
    });
    return mappedPressables;
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
            <Text style={styles.text}>{stateObject}</Text>
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
