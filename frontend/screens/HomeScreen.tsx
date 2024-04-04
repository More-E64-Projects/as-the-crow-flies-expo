import { Text, StyleSheet, View, Button, Image, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NameInput from '../NameInput';

const globeImage = require("../assets/f.gif");
const backgroundImage = require("../assets/stars_background.jpg");

export default function HomeScreen() {

    const navigation = useNavigation();

    const handleGamePress = () => {
        navigation.navigate('Game' as never);
    };

    const handleSettingsPress = () => {
      navigation.navigate('Settings' as never);
    };

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.buttonWrapper}>
            <Button title="⚙️" color='white' onPress={handleSettingsPress}/>
          </View>    
        </View>

        <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
          <View style={styles.content}>
            <Text style={styles.textTitle}>As The Crow Flies</Text>
            <NameInput />
            <Image style={styles.image} source={globeImage}/>
            <View style={styles.buttonWrapper}>
              <Button title="< Play Game >" color='white' onPress={handleGamePress} />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 10,
      marginTop:40,
      marginRight: 10,
      zIndex: 1, // Ensures that the header stays on top of the background image
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    buttonWrapper: {
      backgroundColor: '#015a7d',
      borderRadius: 10,
      overflow: 'hidden', 
    },
    image: {
      width: 250,
      height: 250,
      alignSelf: 'center',
    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover', // Ensures the image covers the entire container
    },
    textTitle: {
      fontSize: 35,
      fontStyle: 'italic',
      color: "white",
      fontWeight: 'bold',
    },
    });