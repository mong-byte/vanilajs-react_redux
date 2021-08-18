import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ACTION = {
  countPlus: "plus",
  countMinus: "minus",
};

number.innerText = 0;

const { countPlus, countMinus } = ACTION;

const reducer = (state = 0, action) => {
  switch (action.type) {
    case countPlus:
      return state + 1;
    case countMinus:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
};

store.subscribe(onChange);

plus.addEventListener("click", () => store.dispatch({ type: countPlus }));
minus.addEventListener("click", () => store.dispatch({ type: countMinus }));
