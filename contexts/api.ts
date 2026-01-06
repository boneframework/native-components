import { createContext } from "react";

interface ApiContextProps {
   baseURL: string;
};


const ApiContext = createContext<ApiContextProps>({
    baseURL: ""
});

export default ApiContext;
