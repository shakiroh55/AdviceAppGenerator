import React, { useState, useEffect } from "react";
import patternDividerDesktop from "../assets/pattern-divider-desktop.svg";
import patternDividerMobile from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";

const AdviceCard = () => {
  const url = "https://api.adviceslip.com/advice";
  const [getAdvice, setGetAdvice] = useState([]);

  const advices = () => {
    fetch (url)
    .then(response => response.json())
    .then(data => {
      console.log(data.slip.advice)
      const getAdvice = data.slip;
      setGetAdvice(getAdvice)
    })
    .catch(error => console.log(error))
  }

useEffect(() => {
  advices()
},[])

  return (
    <div className="card">
    
      <p>ADVICE # {getAdvice.id}</p>
      <h2 className="advice">"{getAdvice.advice}"</h2>
      <img src={patternDividerDesktop} className="divider-desktop" alt="divider" />
      <img src={patternDividerMobile} className="divider-mobile" alt="divider" />
      <div className="dice" onClick={advices}>
        <img src={dice} alt="dice" />
      </div>
    </div>
  );
};

export default AdviceCard;
