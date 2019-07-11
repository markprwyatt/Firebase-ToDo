import React from "react";
import styled from "styled-components";

const ListItem = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 8px auto;
  width: 80%;
  border-radius: 15px;
  align-items: center;
  background-color: white;
  transition: all 1s;

  & li {
    padding: 8px;
    text-transform: capitalize;
  }
`;

const StyledList = styled.ul`
  padding: 0;
  width: 100%;
`;

const Button = styled.i`
  padding: 8px;
  margin: 8px;

  &:hover {
    cursor: pointer;
  }
`;

const H1 = styled.h1`
  color: #fff;
`;

const ToDoList = ({ tasks, deleteTask }) => {
  if (tasks.length < 1) {
    return <H1>Completed it!</H1>;
  }

  return (
    <StyledList>
      {tasks.map((task, i) => (
        <ListItem key={i}>
          <li>{Object.values(task)}</li>

          <Button
            onClick={() => deleteTask(Object.keys(task)[0])}
            className="far fa-trash-alt fa-1x"
          />
        </ListItem>
      ))}
    </StyledList>
  );
};

export default ToDoList;
