import * as Linking from "expo-linking";
import {useEffect} from "react";
import router from 'ex';

import routes from '../../../../config/routes';

export default useLinking = () => {
    const url = Linking.useURL();

    useEffect(() => {
        if (url) {
            const parts = Linking.parse(url);
            if (parts.path !== null && parts.path !== '') {
                switch (parts.path) {
                    case routes.USER_ACTIVATION:
                        router.navigate(routes.USER_ACTIVATION, parts.queryParams);
                        break;
                }
            }
        }
    }, [url]);

    return url;
};
