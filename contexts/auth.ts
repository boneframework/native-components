import { createContext } from "react";

interface AuthContextProps {
    login: (authToken: object) => Promise<void>;
    logout: () => void;
    updateUser: () => void;
    user?: object | null;
    isLoading: boolean;
};


const AuthContext = createContext<AuthContextProps>({
    login: (authToken: object) => null,
    logout: () => null,
    updateUser: () => null,
    user: null,
    isLoading: true
});

export default AuthContext;
