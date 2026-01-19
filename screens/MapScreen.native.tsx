import React from 'react';
import { AppleMaps, GoogleMaps } from 'expo-maps';
import {Platform, StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

function MapScreen(props) {

    const children = props.children;

    if (Platform.OS === 'ios') 
        return <View style={styles.container}><AppleMaps.View style={styles.map} {...props} >{children}</AppleMaps.View></View>;
    } 
    
    if (Platform.OS === 'android') {
        return <View style={styles.container}><GoogleMaps.View style={styles.map} {...props} >{children}</GoogleMaps.View></View>;
    }
}


export default MapScreen;
