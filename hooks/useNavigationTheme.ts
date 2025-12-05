import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import useStyle from "@boneframework/native-components/hooks/useStyle";

const useNavigationTheme = () => {
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
