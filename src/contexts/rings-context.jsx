import { createContext,useEffect,useState } from "react";
import { GetAllRings } from "../services/rings-service";

export const RingsContext=createContext();


const RingsContextProvider=({children})=>{

    const[rings,setRings]=useState([]);

    useEffect(()=>{
        GetAllRings().then((res)=>setRings(res))
    },[])
return (
<RingsContext.Provider value={{rings,setRings}}>
    {children}
</RingsContext.Provider>
)
}
export default RingsContextProvider;