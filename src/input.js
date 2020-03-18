import React, { Component } from "react";
import ToDo from "./todo";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      todo: ""
    };
  }
  handelChange = e => {
    this.setState({ todo: e.target.value });
  };
  addTodo = () => {
    this.state.todo
      ? this.setState({
          todoList: this.state.todoList.concat({
            todo: this.state.todo
          }),
          todo: ""
        })
      : window.confirm("please insert a todo");
  };

  render(props) {
    return (
      <div className="container-fluid row">
        <div className="col-12 col-md-6">
          <h1>Add your Todo</h1>
          <input
            className="col-8"
            name="todo"
            onChange={this.handelChange}
            value={this.state.todo}
          ></input>
          <button className="col-4" onClick={this.addTodo}>
            ADD
          </button>
        </div>
        <div className="col-12 col-md-6">
          <h3>Click for check and doubleclick for uncheck</h3>
          <ToDo todolist={this.state.todoList} />
        </div>
      </div>
    );
  }
}
