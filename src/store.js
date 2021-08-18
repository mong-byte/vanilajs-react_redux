import { createStore } from "redux";

const ACTION = {
  add: "ADD",
  remove: "REMOVE",
};

export const addToDo = (text) => {
  return { type: ACTION.add, text };
};

export const deleteToDo = (id) => {
  return { type: ACTION.remove, id };
};

const reducer = (state = [], action) => {
  const { add, remove } = ACTION;
  const { text, id, type } = action;
  switch (type) {
    case add:
      return [{ text, id: Date.now() }, ...state];
    case remove:
      return state.filter((todo) => todo.id !== id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
