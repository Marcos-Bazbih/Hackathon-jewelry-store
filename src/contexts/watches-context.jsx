import { createContext,useEffect,useState } from "react";
import { GetAllWatches } from "../services/watches-service";

export const Watches=createContext();


const WatchesProvider=({children})=>{

    const[Watches,setWatches]=useState([]);

    useEffect(()=>{
        GetAllWatches().then((res)=>setWatches(res))
    },[])
return (
<Watches.Provider value={{Watches,setWatches}}>
    {children}
</Watches.Provider>
)
}
export default WatchesProvider;