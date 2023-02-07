import listArray from "../array/Array.js";
const list = document.querySelector(".list");
export const render = () => {
  const element = listArray.reduce(
    (element, acc) =>
      (element += `<button class="item ${acc.atribute}" value="${acc.value}">${acc.text}</button>`),
    ""
  );
  list.innerHTML = element;
};
