import { render } from "./render/index.js";
import { handleNumbers } from "./handleNumber/index.js";
import { handleKeys } from "./handleKey/index.js";
import { handleResult } from "./handleResult/index.js";
import { resetAC } from "./clearAll/index.js";
import { handleConvert } from "./convert/index.js";
import { handleDot } from "./dot/index.js";
import { handleClear } from "./clear/index.js";

export const variablelLet = {
  accumulator: "",
  currentScreen: "",
  resultAll: "",
  checked: true,
  memery: "",
  numberVariable: "",
  convertNumber: "",
  convertKey: "",
  numberHtml: "",
  keyHtml: "",
  resultDone: "",
};
const main = () => {
  render();
  handleNumbers();
  handleKeys();
  handleResult();
  resetAC();
  handleConvert();
  handleDot();
  handleClear();
};

main();

