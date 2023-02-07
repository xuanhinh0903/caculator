import { variablelLet } from "../index.js";

export const handleKeys = () => {
  const keyFunction = document.querySelectorAll(".color-math");
  const screenText = document.querySelector(".screen-text");
  const keyCheck = (key) => {
    variablelLet.checked = true;
    variablelLet.resultAll = variablelLet.resultAll.toString();
    if (
      isNaN(parseInt(variablelLet.resultAll[variablelLet.resultAll.length - 1]))
    ) {
      variablelLet.currentScreen = key.getAttribute("value");
      variablelLet.resultAll =
        variablelLet.resultAll.substring(0, variablelLet.resultAll.length - 1) +
        variablelLet.currentScreen;
    } else {
      variablelLet.currentScreen = key.getAttribute("value");
      variablelLet.resultAll += variablelLet.currentScreen;
    }
    variablelLet.convertKey = variablelLet.resultAll;
    screenText.innerHTML = variablelLet.resultAll;
  };
  keyFunction.forEach((key) =>
    key.addEventListener("click", () => {
      keyCheck(key);
    })
  );
};
