import Constants from "expo-constants";
import React from 'react';
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

function Screen({children, style}: {children: any, style: any}) {
    return (
        <SafeAreaView style={[style, styles.screen]}>
            <View style={[style, styles.view]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        height: '100%'
    },
    view: {
        flex: 1
    }
})

export default Screen;