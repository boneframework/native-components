import React, { useState } from 'react';
import {StyleSheet, Text, View} from "react-native";
import { Map } from 'pigeon-maps';

function MapScreen(props) {
    const [center, setCenter] = useState([50.879, 4.6997])
    const [zoom, setZoom] = useState(11)

  return (
    <View style={styles.container}>
        <Map 
        defaultCenter={center}
        defaultZoom={center}
        defaultHeight={styles.map.height}
        defaultWidth={styles.map.width}
        center={center} 
        zoom={zoom} 
        onBoundsChanged={({ center, zoom }) => { 
            setCenter(center) 
            setZoom(zoom) 
        }} 
        >
            {props.children}
        </Map>
    </View>
  )
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

export default MapScreen;
