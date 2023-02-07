import { variablelLet } from "../index.js";

export const resetAC = () => {
  const reset = document.querySelector(".AC");
  const screenText = document.querySelector(".screen-text");
  const historyText = document.querySelector(".history-text");
  const clearAllFunction = () => {
    variablelLet.accumulator = "";
    variablelLet.currentScreen = "";
    screenText.innerHTML = "0";
    historyText.innerHTML = "";
    variablelLet.resultAll = "";
    variablelLet.memery = "";
  };
  reset.addEventListener("click", clearAllFunction);
};
