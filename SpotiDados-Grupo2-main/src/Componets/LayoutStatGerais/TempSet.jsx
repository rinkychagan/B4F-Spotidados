import React, { useState } from "react";

export default function TempSet(props) {
  

  const handleButtonClick = (buttonId) => {
    props.handle(buttonId);
    
  };

  return (
    <div className="TempSet">
      <div className="TempBtn">
        <button
          className={props.current === "4weeks" ? "selected" : ""}
          onClick={() => handleButtonClick("4weeks")}
        >
          4 semanas
        </button>
        <button
          className={props.current === "6months" ? "selected" : ""}
          onClick={() => handleButtonClick("6months")}
        >
          6 meses
        </button>
        <button
          className={props.current === "1year" ? "selected" : ""}
          onClick={() => handleButtonClick("1year")}
        >
          Último Ano
        </button>
        <button
          className={props.current === "alltime" ? "selected" : ""}
          onClick={() => handleButtonClick("alltime")}
        >
          Desde o Início
        </button>
      </div>
    </div>
  );
}