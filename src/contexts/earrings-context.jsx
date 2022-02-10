import { createContext,useEffect,useState } from "react";
import { GetData } from "../services/earrings-service";

export const Earrings=createContext();


const EarringsProvider=({children})=>{

    const[earrings,setEarrings]=useState([]);

    useEffect(()=>{
        GetData().then((res)=>setEarrings(res))
    },[])
return (
<Earrings.Provider value={{earrings,setEarrings}}>
    {children}
</Earrings.Provider>
)
}
export default EarringsProvider;