import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import useColors from '@boneframework/native-components/hooks/useColors';

function ListItemDeleteAction({onPress}) {
    const colors = useColors();
    const styles = StyleSheet.create({
        deleteBox: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.danger,
            width: 70
        }
})

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.deleteBox} >
                <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color={colors.white}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}



export default ListItemDeleteAction;
