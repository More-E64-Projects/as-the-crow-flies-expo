// import React, { useContext } from 'react';
import { Text, StyleSheet, View, Pressable, Button, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { AppContext } from '../AppContext';

const globeImage = require("/Users/user/react_native/moreE64Projects/asTheCrowFliesExpo/as-the-crow-flies-expo/frontend/assets/f.gif");

export default function HomeScreen() {

    const navigation = useNavigation();

    const handleGamePress = () => {
        navigation.navigate('Game' as never);
    };
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.text}>As The Crow Flies</Text>
        <Image style={styles.image} source={globeImage}/>
        <Button title="Play game" onPress={handleGamePress} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    button: {
        backgroundColor: "#bbb",
        paddingVertical: 12,
        marginTop: 16,
        borderRadius: 4,
      },
      buttonText: {
        textAlign: "center",
      },
      image: {
        width: 250,
        height: 250,
        alignSelf: "center",
      },
      text: {
        fontSize:35,
      }
    });