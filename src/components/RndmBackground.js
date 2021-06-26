import { useState } from "react";
import "../styles/Background.css";
import getRandomColor from "../helpers/rndm-colors.js";
import QuoteBox from "./QuoteBox";

const RndmBackground = (props) => {
  let divStyle = `${getRandomColor()}`;

  const [changeColor, setChangeColor] = useState(divStyle);

  console.log(changeColor);

  return (
    <div className="rndm-background" style={{ backgroundColor: changeColor }}>
      <QuoteBox
        style={changeColor}
        onClickColor={(e) => setChangeColor(getRandomColor())}
      />
    </div>
  );
};

export default RndmBackground;
