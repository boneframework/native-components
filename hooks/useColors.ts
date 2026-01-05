
import { useContext } from "react";
import ColorContext from "../contexts/colors";
import {ThemeColors} from "../contexts/theme";

const useColors = (): ThemeColors => {
    return useContext(ColorContext);
}

export default useColors;
