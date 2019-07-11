import React from "react";
import styled from "styled-components";

const Form = styled.form``;

const AddToDo = ({ value, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add item..."
        value={value}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
};

export default AddToDo;
