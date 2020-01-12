import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isClicked: false,
    text: "",
    todos: []
  }

  addToDo = () => {
  const todosCopy = this.state.todos
  todosCopy.push(this.state.text)
  this.setState({
    todos: todosCopy
  }) 
  this.setState({
    text: ''
  })
  }

  deleteTodo = (index) => {
    const todosCopy = this.state.todos
    todosCopy.splice(index,1)
    this.setState({
      todos: todosCopy
    }) 
  }

  updateText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <h1>todoapp</h1>
      <button onClick={this.addToDo}>addtodo</button>
      <input onChange={this.updateText} value={this.state.text}></input>
      {this.state.todos.map((item,index) => (
    <p>{item}<button onClick ={()=>{this.deleteTodo(index)}}>x</button></p>
      ))}
      </div>
    );
  }


 
}

export default App;
