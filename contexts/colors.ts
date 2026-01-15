import { ThemeColors, defaultTheme } from "../contexts/theme";
import { createContext } from "react";

const ColorContext = createContext<ThemeColors>(defaultTheme.colors);

export type ColorsProviderProps = {
    children: React.ReactNode;
    value: ThemeColors;
};

export default ColorContext;
