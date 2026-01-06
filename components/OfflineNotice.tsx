import React from 'react';
import {StyleSheet, View} from "react-native";
import {useNetInfo} from "@react-native-community/netinfo";
import Text from "./Text";
import useColors from '@boneframework/native-components/hooks/useColors';

function OfflineNotice(props) {
    const netInfo = useNetInfo();
    const colors = useColors();

    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.primary,
            color: colors.white,
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            paddingTop: 20
        },
        text: {
            color: colors.white,
        }
    })

    if (netInfo.type !== 'unkown' && netInfo.isInternetReachable === false) {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>No Internet connection</Text>
            </View>
        );
    }

    return null;
}



export default OfflineNotice;
