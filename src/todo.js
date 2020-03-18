import React, { Component } from "react";
export default class ToDo extends Component {
  constructor(props) {
    super(props);
  }
  handelEtat = e => {
    e.target.style.textDecoration = "line-through";
    e.target.style.backgroundColor = "grey";
    e.target.style.textDecorationColor = "red";
    e.target.style.textDecorationStyle = "wavy";
  };
  handelEtat2 = e => {
    e.target.style.textDecoration = "none";
    e.target.style.backgroundColor = "rgb(54, 54, 54)";
  };
  render(props) {
    return (
      <div>
        {this.props.todolist.map((x, i) => (
          <div
            style={{
              cursor: "pointer",
              userSelect: "none",
              border: "solid rgb(54, 54, 54) 2px",
              textAlign: "center",
              fontWeight: "bolder",
              color: "white",
              backgroundColor: "rgb(54, 54, 54)"
            }}
            onClick={this.handelEtat}
            onDoubleClick={this.handelEtat2}
          >
            {x.todo}
          </div>
        ))}
      </div>
    );
  }
}
