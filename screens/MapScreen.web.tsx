import React from 'react';
import {StyleSheet, Text, View} from "react-native";

function MapScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Map Screen Web, use Pigeon Maps - @todo</Text>
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
