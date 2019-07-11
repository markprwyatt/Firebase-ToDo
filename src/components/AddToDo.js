import React from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  & .textInput {
    height: 2rem;
    width: 40%;
    font-size: 1.1rem;
    border-radius: 1rem 0 0 1rem;
    padding: 0.5rem;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: middle;
  }

  & .submit {
    border-radius: 0 1rem 1rem 0;
    font-size: 1rem;
    height: 2rem;
    margin: 0;
    border: 0;
    width: 2rem;
    box-sizing: border-box;
    vertical-align: middle;
    cursor: pointer;
  }
`;

const AddToDo = ({ value, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <input
        className="textInput"
        type="text"
        placeholder="Add item..."
        value={value}
        onChange={handleChange}
      />
      <input className="submit" type="submit" value="+" />
    </Form>
  );
};

export default AddToDo;
