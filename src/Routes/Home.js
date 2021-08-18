import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo } from "../store";

const Home = ({ toDos, dispatchAdd }) => {
  const [text, setText] = useState("");

  const textChange = (event) => {
    const {
      target: { value },
    } = event;
    setText(value);
  };

  const submitText = (event) => {
    event.preventDefault();
    dispatchAdd(text);
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={submitText}>
        <input type="text" value={text} onChange={textChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAdd: (text) => dispatch(addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
