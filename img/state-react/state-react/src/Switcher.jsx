import { useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import estilos from "./css/Switcher.module.css";
const Switcher = function () {
  let [boton, cambiar] = useState(false);
  return (
    <>
      <span
        className={`${estilos.boton} ${boton ? estilos.night : ""}`}
        onClick={function () {
          cambiar(!boton);
        }}
      >
        {boton ? <BsMoonFill /> : <BsSunFill />}
      </span>
    </>
  );
};

export default Switcher;
