import { LatLng } from "react-native-maps";

type Location = {
    name: string;
    coordinates: LatLng;
    positionInList: number;
};

export type Level = {
    description: string;
    locations: Location[];
};

export const edinburghLandmarks: Level = {
    description: "Can you find five of Edinburgh's most famous landmarks?",
    locations: [
        {
            name: "Edinburgh Castle",
            coordinates: {
                latitude: 55.9486,
                longitude: -3.1999
            },
            positionInList: 1
        },
        {
            name: "Arthur's Seat",
            coordinates: {
                latitude: 55.9444,
                longitude: -3.1619
            },
            positionInList: 2
        },
        {
            name: "Royal Botanic Garden Edinburgh",
            coordinates: {
                latitude: 55.9653,
                longitude: -3.2098
            },
            positionInList: 3
        },
        {
            name: "National Museum of Scotland",
            coordinates: {
                latitude: 55.9479,
                longitude: -3.1898
            },
            positionInList: 4
        },
        {
            name: "Calton Hill",
            coordinates: {
                latitude: 55.9544,
                longitude: -3.1825
            },
            positionInList: 5
        }
    ]
};
