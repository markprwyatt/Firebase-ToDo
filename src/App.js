import React from "react";
import "./App.css";
import fire from "./fire";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] }; // <- set up react state
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

      this.setState({ tasks: [...this.state.tasks, snapshot.val()] });
      console.log(this.state);
    });
  }

  render() {
    return (
      <ul>
        <li>To Do</li>
        {this.state.tasks.map(task => (
          <li>{task}</li>
        ))}
      </ul>
    );
  }
}

export default App;
