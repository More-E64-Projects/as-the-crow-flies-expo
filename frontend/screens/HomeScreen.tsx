import { Text, View, Button, Image, ImageBackground , Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NameInput from '../NameInput';
import styles from "../styles/styles";

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
      <View style={styles.containerHome}>
        <View style={styles.header}>
          <View style={styles.buttonWrapper}>
            <Button title="⚙️" onPress={handleSettingsPress}/>
          </View>    
        </View>

        <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
          <View style={styles.content}>
            <Text style={styles.textTitle}>As The Crow Flies</Text>
            <NameInput />
            <Image style={styles.image} source={globeImage}/>
            
            <Pressable style={styles.button} onPress={handleGamePress}>
              <Text style={styles.text}> Play Game </Text>
            </Pressable>

          </View>
        </ImageBackground>
      </View>
    );
  }

