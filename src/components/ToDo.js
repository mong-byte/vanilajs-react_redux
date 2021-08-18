import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

const ToDo = ({ text, id, dispatchRemove }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={dispatchRemove}>del</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchRemove: () => dispatch(deleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
