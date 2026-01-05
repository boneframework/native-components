import { defaultTheme, ThemeColors } from "../contexts/theme";
import {useContext} from "react";
import ColorContext from "../contexts/colors";

const ColorProvider = ({colors, children}: {colors?: ThemeColors; children: React.ReactNode}) => {
   const colorContext: ThemeColors = useContext(ColorContext);
   colorContext.colors = colors.colors;

    return <>
            {children}
        </>;
};

export default ColorProvider;
