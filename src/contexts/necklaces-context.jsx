import { createContext, useEffect, useState } from "react";
import { GetAllNecklaces } from "../services/necklaces-service";

export const NecklacesContext = createContext();

const NecklacesContextProvider = ({ children }) => {

    const [necklaces, setNecklaces] = useState([]);

    useEffect(() => {
        GetAllNecklaces().then((res) => setNecklaces(res))
    }, [])
    return (
        <NecklacesContext.Provider value={{ necklaces, setNecklaces }}>
            {children}
        </NecklacesContext.Provider>
    )
}
export default NecklacesContextProvider;