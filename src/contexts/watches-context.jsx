import { createContext, useEffect, useState } from "react";
import { GetAllWatches } from "../services/watches-service";

export const WatchesContext = createContext();

const WatchesContextProvider = ({ children }) => {

    const [Watches, setWatches] = useState([]);

    useEffect(() => {
        GetAllWatches().then((res) => setWatches(res))
    }, [])
    return (
        <WatchesContext.Provider value={{ Watches, setWatches }}>
            {children}
        </WatchesContext.Provider>
    )
}
export default WatchesContextProvider;