import { variablelLet } from "../index.js";

export const handleClear = () => {
  const fade = document.querySelector(".C");
  const screenText = document.querySelector(".screen-text");
  const historyText = document.querySelector(".history-text");

  const clearElement = () => {
    variablelLet.resultAll = variablelLet.resultAll.substring(
      0,
      variablelLet.resultAll.length - 1
    );
    screenText.innerHTML = variablelLet.resultAll;
    if (variablelLet.resultAll <= 0) {
      screenText.innerHTML = "0";
      historyText.innerHTML = "";
    }
  };

  fade.addEventListener("click", clearElement);
};
