import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from "immutability-helper";
import './App.css';
import Column from './Column';
import Card from './Card';
import styled from 'styled-components';
import Header from './Components/Header';
import Input from './Components/Input';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {_id: 1, name: "delete modal", status: "todo"},
        {_id: 2, name: "upload image modal", status: "todo"},
        {_id: 3, name: "drag n drop", status: "doing"},
        {_id: 4, name: "Add search bar", status: "done"},
        {_id: 5, name: "Edit item", status: "done"},
        {_id: 6, name: "Add empty group", status: "done"}
      ],
      channels : [
        "todo", 
        "doing", 
        "done"
      ],
      newTask: ''
     }
  }

  handleTaskSubmit(task){
    console.log(`Task submit... ${task}`);
  }

  handleTaskInputChange(e){
    e.preventDefault()
    console.log("handling: ",e.target)
    this.setState({[e.target.name]: e.target.value})
  }

  update = (id, originalIndex, status) => {

    const { task, index } = this.findCard(id);

    const {tasks} = this.state;

    task.status = status;

    const newTasks = update(tasks, {
      $splice: [[index, 1], [originalIndex, 0, task]]
    })

    this.setState({tasks: newTasks})
  }

  findCard = (id) => {
    const {tasks} = this.state;
    const task = tasks.filter(task => task._id === id)[0]
    return {
      task, 
      index: tasks.indexOf(task)
    }
  }

  render() {

    const { tasks, channels, newTask } = this.state;

    return (
      <div className="App">
        <Input 
          name='newTask'
          handleChange={(e) => this.handleTaskInputChange(e)}
          value={this.newTask}
        />
        <div className="board-contianer">
          {channels.map(channel => (
            <Column status={channel}>
              {tasks.filter(item => item.status === channel)
                .map(item => (
                  <Card 
                    status={item.status}
                    key={item._id}
                    task={item} 
                    id={item._id} 
                    findCard={this.findCard}
                    moveCard={this.update}
                  />
                ))
              }
            </Column>
          ))}
        </div>
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(App);