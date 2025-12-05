import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import { ThemeColors } from "@boneframework/native-components/contexts/theme";
import useStyle from "@boneframework/native-components/hooks/useStyle";

const useNavigationTheme = (colors: ThemeColors) => {
    const style = useStyle();
    const theme = style.dark ? DarkTheme : DefaultTheme
    return {
        ...theme,
        colors: {
            ...theme.colors,
            primary: style.text.color,
            background: style.backgroundColor,
            card: style.backgroundColor
        },
        dark: style.dark
    }
};

export default useNavigationTheme
