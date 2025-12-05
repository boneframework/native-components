import { useContext } from "react";

import ColorContext from "../contexts/colors";

const useColors = () => {
    return useContext(ColorContext);
}

export default useColors;