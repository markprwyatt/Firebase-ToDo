import React from "react";
import "./App.css";
import fire from "./fire";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import TitleContainer from "./components/TitleContainer";

import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  background-color: #3fbf7f;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
`;

const H1 = styled.h1`
  color: #fff;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], value: "" }; // <- set up react state

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let taskRef = fire
      .database()
      .ref("Tasks")
      .orderByKey()
      .limitToLast(100);
    taskRef.on("child_added", snapshot => {
      /* Update React state when item is added at Firebase Database */

      this.setState({
        tasks: [...this.state.tasks, { [snapshot.key]: snapshot.val() }]
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    fire
      .database()
      .ref("Tasks")
      .push(this.state.value);
    this.setState({ value: "" });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  deleteTask = taskId => {
    const TasksRef = fire.database().ref(`/Tasks/${taskId}`);
    TasksRef.remove();
    this.setState({
      tasks: this.state.tasks.filter(task => Object.keys(task)[0] !== taskId)
    });
  };

  render() {
    return (
      <AppContainer>
        <H1> To Do </H1>
        <ToDoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
        <AddToDo
          value={this.state.value}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </AppContainer>
    );
  }
}

export default App;

/* 

*/
