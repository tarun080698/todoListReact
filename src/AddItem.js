import React, { Component } from "react";

class AddItem extends Component {
  state = {
    task: "",
  };

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.task === "") {
      alert("task cannot be empty");
      return false;
    } else {
      this.props.item(this.state);
    }
    this.setState({
      task: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Add new Task</h5>
          <input
            type="text"
            placeholder="enter you task here"
            onChange={this.handleChange}
            value={this.state.task}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddItem;
