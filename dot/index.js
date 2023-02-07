import { variablelLet } from "../index.js";

export const handleDot = () => {
  const dot = document.querySelector(".cham");
  const screenText = document.querySelector(".screen-text");
  const historyText = document.querySelector(".history-text");
  const dotFunction = () => {
    if (variablelLet.checked == true) {
      variablelLet.resultAll += dot.getAttribute("value");
      screenText.innerHTML = variablelLet.resultAll;
    } else {
      variablelLet.checked = true;
      historyText.innerHTML = "";
      variablelLet.accumulator = "";
      variablelLet.resultAll = "";
      variablelLet.accumulator += dot.getAttribute("value");
      variablelLet.resultAll += variablelLet.accumulator;
      screenText.innerHTML = variablelLet.resultAll;
    }
  };
  dot.addEventListener("click", dotFunction);
};
