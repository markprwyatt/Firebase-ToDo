import React from "react";
import "./App.css";
import fire from "./fire";

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

      this.setState({ tasks: [...this.state.tasks, snapshot.val()] });
      console.log(this.state);
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
  render() {
    return (
      <div>
        <h1>To Do</h1>
        <ul>
          {this.state.tasks.map(task => (
            <li key={task}>{task}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add item..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
