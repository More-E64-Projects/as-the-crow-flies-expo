import React, { useEffect, useRef, useState } from 'react';
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Dimensions, StyleSheet, View, Text, Button } from 'react-native';
import Constants from "expo-constants";
import { edinburghLandmarks } from './locations'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 55.9425,
  longitude: -3.2681,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
};

export default function App() {
  const [targetObject, setTargetObject] = useState(edinburghLandmarks[0]);
  const [selectedLocation, setSelectedLocation] = useState<LatLng | null>();
  const [guessedDistance, setGuessedDistance] = useState(6371);
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);
  const [locationFound, setLocationFound] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const mapRef = useRef<MapView>(null)

  useEffect(() => {
    if (guessedDistance < 0.1) {
      setLocationFound(true);
    }
  }, [guessedDistance])


  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    setGuessedDistance(distance);
    return distance;
  };

  const nextLocation = () => {
    const currentIndex = edinburghLandmarks.indexOf(targetObject);
    const nextObject = edinburghLandmarks[currentIndex + 1];

    if (!nextObject) {
      setGameOver(true);
    } else {
      setTargetObject(nextObject);
      setSelectedLocation(null);
      setGuessedDistance(6371);
      setCounter(0);
      setMessage("");
      setLocationFound(false);
    }
  }


  const handleMapPress = (event: { nativeEvent: { coordinate: LatLng } }) => {
    const { coordinate } = event.nativeEvent;
    if (!locationFound) {
      setSelectedLocation(coordinate);
    }

    if (targetObject) {
      const distance = calculateDistance(coordinate.latitude, coordinate.longitude, targetObject.coordinates.latitude, targetObject.coordinates.longitude);
      setMessage(`Distance to ${targetObject.name}: ${distance.toFixed(2)} km`)
    }

    if (!locationFound) {
      setCounter(counter + 1);
    }
  };


  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        customMapStyle={noLabelStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
        onPress={handleMapPress}
        zoomEnabled={false}
      >
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>
      {!locationFound && <View style={styles.searchContainer}>
        <Text>{`Current Target: ${targetObject.name}`}</Text>
      </View>}
      {message !== "" && <View style={styles.searchContainer}>
        <Text>{message}</Text>
      </View>}
      {locationFound && <View style={styles.searchContainer}>
        <Text>{`You found ${targetObject.name} in ${counter} guesses!`}</Text>
        <Button
          title='Next Location'
          color="#f194ff"
          onPress={nextLocation}
        />
      </View>}
      {gameOver && <View style={styles.searchContainer}>
        <Text>You win! Now give us all jobs.</Text>
      </View>}
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
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: Constants.statusBarHeight,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#bbb",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
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