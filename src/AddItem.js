import React, { Component } from "react";
import "../src/App.css";

class AddItem extends Component {
  state = {
    title: "",
    description: "",
    createdAt: new Date().toISOString(),
  };

  handleTitle = (e) => {
    if (e.target.value.trim() !== "") this.setState({ title: e.target.value });
  };

  handleDesc = (e) => {
    if (e.target.value.trim() !== "")
      this.setState({ description: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // getting the date at which the item in list was added
    // let today = new Date();
    // today =
    //   String(today.getDate()).padStart(2, "0") +
    //   "/" +
    //   String(today.getMonth() + 1).padStart(2, "0") +
    //   "/" +
    //   today.getFullYear();
    // toISOString();
    this.setState(
      {
        createdAt: new Date().toISOString(),
      },
      () => {
        console.log(this.state.createdAt);
      }
    );
    if (this.state.title === "" || this.state.description === "") return false;
    else this.props.item(this.state);

    this.setState({
      title: "",
      description: "",
      createdAt: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div className="form-group">
              <label className="header" htmlFor="header">
                Add new Task
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                className="form-control form-control-lg"
                id="title"
                type="text"
                placeholder="what's on your mind..."
                onChange={this.handleTitle}
                value={this.state.title}
                required
                maxLength="50"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <input
                className="form-control form-control-lg"
                id="desc"
                type="text"
                placeholder="add a short description here..."
                onChange={this.handleDesc}
                value={this.state.description}
                autoComplete="off"
                maxLength="250"
                required
              />
              <button type="submit">Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddItem;
