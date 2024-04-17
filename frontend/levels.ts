import { LatLng } from "react-native-maps";

type Location = {
    name: string;
    coordinates: LatLng;
    positionInList: number;
    imageUrl: string
};

export type Level = {
    description: string;
    locations: Location[];
    startingPoint: LatLng;
    zoomLevel: number;
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
            positionInList: 1,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Edinburgh_Castle_from_the_south_east.JPG/500px-Edinburgh_Castle_from_the_south_east.JPG"
        },
        {
            name: "Arthur's Seat",
            coordinates: {
                latitude: 55.9444,
                longitude: -3.1619
            },
            positionInList: 2,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Arthur%27s_Seat%2C_Edinburgh.JPG/544px-Arthur%27s_Seat%2C_Edinburgh.JPG"
        },
        {
            name: "Royal Botanic Garden Edinburgh",
            coordinates: {
                latitude: 55.9653,
                longitude: -3.2098
            },
            positionInList: 3,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Palm_House%2C_Royal_Botanic_Garden_Edinburgh.JPG/440px-Palm_House%2C_Royal_Botanic_Garden_Edinburgh.JPG"
        },
        {
            name: "National Museum of Scotland",
            coordinates: {
                latitude: 55.9479,
                longitude: -3.1898
            },
            positionInList: 4,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Museum_of_Scotland.jpg/500px-Museum_of_Scotland.jpg"
        },
        {
            name: "Calton Hill",
            coordinates: {
                latitude: 55.9544,
                longitude: -3.1825
            },
            positionInList: 5,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Edinburgh_Calton_Hill.jpg/576px-Edinburgh_Calton_Hill.jpg"
        },
    ],
    startingPoint: {
        latitude: 55.9425,
        longitude: -3.2681,
    },
    zoomLevel: 0.02
};
