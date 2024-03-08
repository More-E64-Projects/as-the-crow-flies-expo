import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} customMapStyle={noLabelStyle} provider={PROVIDER_GOOGLE} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

const noLabelStyle = (
  [
    {
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ]
)