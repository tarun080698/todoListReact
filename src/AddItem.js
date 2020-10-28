import React, { Component } from "react";
import '../src/App.css'

class AddItem extends Component {
  state = {
    task: "",
  };

  handleChange = (e) => {
    if(e.target.value.trim() !== "")
      this.setState({ task: e.target.value });
  };

  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.task === "") 
      return false;
    else
      this.props.item(this.state);
  
    this.setState({
      task: "",
    });
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Add new Task</h5>
            <span><input
            type="text"
            placeholder="what's on your mind..."
            onChange={this.handleChange}
            value={this.state.task}
            required
          /><button>Add</button></span>
        </form>
      </div>
        
    );
  }
}

export default AddItem;
