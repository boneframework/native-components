import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import MapView from "react-native-maps";

function MapScreen(props) {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
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

export default MapScreen;
