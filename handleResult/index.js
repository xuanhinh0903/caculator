import { variablelLet } from "../index.js";

export const handleResult = () => {
  const screenText = document.querySelector(".screen-text");
  const historyText = document.querySelector(".history-text");
  const result = document.querySelector(".result");
  const fade = document.querySelector(".C");

  const resultCheck = () => {
    variablelLet.memery = variablelLet.resultAll.toString().split("");
    if (
      variablelLet.memery[variablelLet.memery.length - 1] === "+" ||
      variablelLet.memery[variablelLet.memery.length - 1] === "-" ||
      variablelLet.memery[variablelLet.memery.length - 1] === "*" ||
      variablelLet.memery[variablelLet.memery.length - 1] === "/"
    ) {
      variablelLet.resultAll =
        variablelLet.resultAll + variablelLet.numberVariable;
      variablelLet.resultDone = parseFloat(
        eval(variablelLet.resultAll).toPrecision(16)
      );
      historyText.innerHTML = variablelLet.resultAll;
      screenText.innerHTML = variablelLet.resultDone;
    }
    fade.addEventListener("click", () => {
      historyText.innerHTML = "";
      screenText.innerHTML = variablelLet.resultAll;
    });

    if (
      eval(variablelLet.resultAll).toString() === "Infinity" ||
      eval(variablelLet.resultAll).toString() === "-Infinity"
    ) {
      screenText.innerHTML = "Yêu cầu không hợp lệ.";
      historyText.innerHTML = "";
      variablelLet.accumulator = "";
      variablelLet.resultAll = "";
      variablelLet.memery = "";
    } else {
      variablelLet.resultDone = parseFloat(
        eval(variablelLet.resultAll).toPrecision(16)
      );
      screenText.innerHTML = variablelLet.resultDone;
      historyText.innerHTML = variablelLet.resultAll;
      variablelLet.resultAll = variablelLet.resultDone;
      variablelLet.checked = false;
      variablelLet.accumulator = "";
    }
  };
  return result.addEventListener("click", resultCheck);
};
