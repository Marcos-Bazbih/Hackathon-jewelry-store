import { createContext, useEffect, useState } from "react";
import { GetData } from "../services/earrings-service";

export const EarringsContext = createContext();

const EarringsContextProvider = ({ children }) => {

    const [earrings, setEarrings] = useState([]);

    useEffect(() => {
        GetData().then((res) => setEarrings(res))
    }, [])
    return (
        <EarringsContext.Provider value={{ earrings, setEarrings }}>
            {children}
        </EarringsContext.Provider>
    )
}
export default EarringsContextProvider;