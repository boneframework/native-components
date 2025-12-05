import { ThemeColors, defaultTheme } from "@boneframework/native-components/contexts/theme";
import { createContext } from "react";

const ColorContext = createContext<ThemeColors>(defaultTheme);

type ColorsProviderProps = {
    children: React.ReactNode;
    value: ThemeColors;
};

export default ColorContext; 