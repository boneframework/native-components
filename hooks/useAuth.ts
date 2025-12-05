import { useContext } from "react";

import AuthContext from "../contexts/auth";

const useAuth = () => {
    const value = useContext(AuthContext);

    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }

    return value;
}

export default useAuth;