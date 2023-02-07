import { variablelLet } from "../index.js";

export const handleNumbers = () => {
  const numbers = document.querySelectorAll(".number");
  const historyText = document.querySelector(".history-text");
  const screenText = document.querySelector(".screen-text");

  const numberCheck = (number) => {
    if (variablelLet.checked == true) {
      variablelLet.accumulator = number.getAttribute("value");
      variablelLet.resultAll += variablelLet.accumulator;
      screenText.innerHTML = variablelLet.resultAll;
    } else {
      variablelLet.checked = true;
      historyText.innerHTML = "";
      variablelLet.accumulator = "";
      variablelLet.resultAll = "";
      variablelLet.accumulator = number.getAttribute("value");
      variablelLet.resultAll += variablelLet.accumulator;
      screenText.innerHTML = variablelLet.resultAll;
    }
    variablelLet.numberVariable = variablelLet.resultAll;
  };
  numbers.forEach((number) =>
    number.addEventListener("click", () => {
      numberCheck(number);
    })
  );
};
