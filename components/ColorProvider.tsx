import ColorContext from "@boneframework/native-components/contexts/colors";
import { defaultTheme, ThemeColors } from "@boneframework/native-components/contexts/theme";

const ColorProvider = ({value, children}: {value?: ThemeColors; children: React.ReactNode}) => {
  return <ColorContext value={value ?? defaultTheme}>
            {children}
        </ColorContext>; 
};

export default ColorProvider; 