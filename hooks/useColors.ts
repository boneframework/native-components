
import { useContext } from "react";
import ColorContext from "../contexts/colors";

const useColors = () => {
    return useContext(ColorContext).colors;
}

export default useColors;
