import { createContext,useEffect,useState } from "react";
import { GetAllNecklaces } from "../services/necklaces-service";

export const Necklaces=createContext();


const NecklacesProvider=({children})=>{

    const[necklaces,setNecklaces]=useState([]);

    useEffect(()=>{
        GetAllNecklaces().then((res)=>setNecklaces(res))
    },[])
return (
<Necklaces.Provider value={{necklaces,setNecklaces}}>
    {children}
</Necklaces.Provider>
)
}
export default NecklacesProvider;