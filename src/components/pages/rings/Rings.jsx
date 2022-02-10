import React, { useContext } from "react";
import { RingsContext } from "../../../contexts/rings-context";
import RingCards from "../../parts/ring-cards/ringCards";

function Rings() {
  const { rings } = useContext(RingsContext);

  return (
    <div className=" main Rings">
      {
        rings.map((item) =>
          <RingCards item={item} />
        )
      }
    </div>
  );
}
export default Rings;