import React, { Component } from "react";
import "./App.css";
import Todolist from "./components/Todoitem";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todolist: [],
    };
  }

  inputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.length > 0)
      // empty string conditon
      this.setState({
        input: "",
        todolist: [...this.state.todolist,this.state.input]
      });
    // console.log(todolist);
  };

updateItem = (newItem,index) =>{
  //created a copy of my todolist
  let arr = this.state.todolist

  // update the element 
  arr.splice(index,1,newItem)

  // change the set
  this.setState({
    todolist:arr
  })

}

DeleteItem = (index) =>{
  //created a copy of my todolist
  let arr = this.state.todolist

  // update the element 
  arr.splice(index,1)

  // change the set
  this.setState({
    todolist:arr
  })

}


  render() {
    let buttonstyle = {
      backgroundColor : "red" 
    }

    return (
      <div id="parent">
        <h1>TO DO LIST</h1>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            onChange={this.inputChange}
            value={this.state.input}
          />
          <button id="buttonadd">A D D</button>
        </form>
        <p>My input: {this.state.input}</p>

        <div className="todolist">
          <h2>👇LIST👇</h2>
          {this.state.todolist.map((e, i) => {
            // return (
      
            // );
            return(
              <Todolist
              e={e}
              i = {i}
              DeleteItem = {this.DeleteItem}
              updateItem = {this.updateItem}
              style = {buttonstyle}

              />
              
              
            );

          })}
        </div>
      </div>
    );
  }
}
