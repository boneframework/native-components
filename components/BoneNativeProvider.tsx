import ApiContext from "@boneframework/native-components/contexts/api";
import CacheContext from "@boneframework/native-components/contexts/cache";
import ColorContext from "@boneframework/native-components/contexts/colors";
import SettingsContext from "@boneframework/native-components/contexts/settings";
import { ThemeColors } from "@boneframework/native-components/contexts/theme";
import { useContext } from "react";

interface BoneNativeProviderProps {
        api: any
        cache: any;
        colors: ThemeColors;
        routes: any;
        settings: any;
        styles: any;
        children: React.ReactNode;
}

const BoneNativeProvider = ({api, cache, colors, settings, children}: BoneNativeProviderProps) => {
   let apiContext = useContext(ApiContext);
   apiContext = api;
   let cacheContext = useContext(CacheContext);
   cacheContext = cache;
   let colorContext: ThemeColors = useContext(ColorContext);
   colorContext = colors;
   let settingsContext = useContext(SettingsContext);
   settingsContext = settings;

    return <>{children}</>;
};

export default BoneNativeProvider;
