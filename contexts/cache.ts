import { createContext } from "react";

interface CacheContextProps {
    blacklist: string[];
    cacheExpiryMinutes: number;
};


const CacheContext = createContext<CacheContextProps>({
    blacklist: [],
    cacheExpiryMinutes: 0
});

export default CacheContext;
