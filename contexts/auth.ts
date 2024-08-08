import { createContext } from "react";

const AuthContext = createContext<{
    login: () => void;
    logout: () => void;
    updateUser: () => void;
    user?: object | null;
    isLoading: boolean;
}>({
    login: () => null,
    logout: () => null,
    updateUser: () => null,
    user: null,
    isLoading: true
});

export default AuthContext;
