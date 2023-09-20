import React from "react";
import Tabla from "./TablaPolleria";


function Display ({datos}){

  return(
    <div>
     <table>
          <Tabla />
          {datos}
      </table>
    </div>

  );
}

export default Display;