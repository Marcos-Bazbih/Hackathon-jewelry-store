import { useContext } from "react";
import { NecklacesContext } from "../../../contexts/necklaces-context";
import NecklacesCards from "../../parts/neckless-cards/necklessCards";

function Necklaces() {
  const { necklaces } = useContext(NecklacesContext);

  return (
    <div className=" main Rings">
      {
        necklaces.map((item) =>
          <NecklacesCards item={item} />
        )
      }
    </div>
  );
  }
  export default Necklaces;