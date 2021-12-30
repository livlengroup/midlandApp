import React, {useState,useEffect} from 'react';
import { Dimensions,StyleSheet,View, Text, ScrollView, Button} from 'react-native';
import { Marker } from 'react-native-maps';


export default function NearMe() {
    const [mapDetails, setMapDetails] = useState();

    useEffect(() => {
        fetch('/nearMe')
          .then(res => res.json())
          .then(response => {
            setMapDetails(response[0].buttonName)
          });
      }, []);
        
    return (
        <View>
            <MapView
                region={mapDetails.region}
            >
        {mapDetails.map((marker) => (
            <Marker
                key={index}
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
            />
            ))}
        </MapView>
        </View>
    )
}
