import { useState } from "react";
import { Platform, useColorScheme } from "react-native";

import colors from "../../../../config/colors";

const useStyle = () => {
    const colorScheme = useColorScheme();
    const [mode, setMode] = useState();
    const dark = colorScheme == 'dark'
    const style = {
        dark: dark,
        text: {
            color: dark ? colors.light : colors.dark,
            ...Platform.select({
                ios: {
                    fontSize: 20,
                    fontFamily: "Helvetica",
                },
                android: {
                    fontSize: 18,
                    fontFamily: "Roboto",
                },
            })
        },
        box: {
            backgroundColor: dark ? colors.darkish : colors.white
        },
        errorText: {
            color: dark ? colors.secondary : colors.primary
        },
        flipswitch: {
            onColor: dark ? colors.secondary : colors.secondary,
            offColor: dark ? colors.darkish : colors.white
        },
        navButton: {
            color: dark ? colors.light : colors.white
        },
        formInput: {
            backgroundColor: dark ? colors.darkish : colors.white,
            text: dark ? colors.light : colors.dark,
            placeholderTextColor: dark ? colors.medium : colors.medium
        },
        backgroundColor: dark ? colors.dark : colors.light,
        colors: colors
    };

    return style;
};

export default useStyle;