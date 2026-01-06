import { useContext } from "react";

import SettingsContext from "@boneframework/native-components/contexts/settings";

const useSettings = () => {
    return useContext(SettingsContext);
}

export default useSettings;