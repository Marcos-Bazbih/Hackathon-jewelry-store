import React, { useContext } from "react";
import {EarringsContext} from "../../../contexts/earrings-context";
import EarringsCards from "../../parts/earrings-cards/earringsCards";
function Earring() {
  const { earrings } = useContext(EarringsContext);
    
  return (
    <div className=" main earrings">
      {
        earrings.map((item) =>
          <EarringsCards item={item} />
        )
      }
    </div>
  );
  }
  export default Earring;