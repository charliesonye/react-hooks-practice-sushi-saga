import { ContactsOutlined } from "@material-ui/icons";
import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiData, onEatSushi}) {
  
  const [sushiIndex, setSushiIndex] = useState(0)
  const sushiComponents = sushiData.slice(sushiIndex, sushiIndex + 4)
  .map((sushi) => (
    <Sushi key= {sushi.id} sushi={sushi} onEatSushi={onEatSushi} />
  ));

  function handleClickMore(){
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushiData.length)
    console.log(sushiIndex)
  }
  return (
    <div className="belt">
      {sushiComponents}
      
      <MoreButton handleClickMore={handleClickMore} />
    </div>
  );
}

export default SushiContainer;
