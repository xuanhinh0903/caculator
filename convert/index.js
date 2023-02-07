import { variablelLet } from "../index.js";
export const handleConvert = () => {
  const convert = document.querySelector(".convert");
  const screenText = document.querySelector(".screen-text");
  const functionConvert = () => {
    variablelLet.memery = variablelLet.resultAll.toString().split("");
    if (
      variablelLet.memery[variablelLet.memery.length - 1] === "+" ||
      variablelLet.memery[variablelLet.memery.length - 1] === "-" ||
      variablelLet.memery[variablelLet.memery.length - 1] === "*" ||
      variablelLet.memery[variablelLet.memery.length - 1] === "/"
    ) {
      variablelLet.resultAll = variablelLet.resultAll.substring(
        0,
        variablelLet.resultAll.length - 1
      );
    }
    if (variablelLet.memery[variablelLet.memery.length - 1] === "0") {
      variablelLet.resultAll = "";
    }
    variablelLet.resultAll = -eval(variablelLet.resultAll);
    variablelLet.numberVariable = variablelLet.resultAll;
    if (variablelLet.resultAll.toString() === "NaN") {
      variablelLet.resultAll = "";
      variablelLet.convertKey = variablelLet.convertKey + "-";
      variablelLet.resultAll = variablelLet.convertKey;
      screenText.innerHTML = variablelLet.resultAll;
    } else {
      screenText.innerHTML = variablelLet.numberVariable;
    }
  };
  convert.addEventListener("click", functionConvert);
};
