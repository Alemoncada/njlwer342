import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props){
    super(props)
      this.state={
        tasks: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
        newTask:""
      
    }
  }

  addNewTask = (e)=>{
    this.setState({
      newTask: e.target.value
    })
  }

  startSubmit = (e)=>{
    e.preventDefault();
    this.setState({
      tasks:this.state.tasks.concat(this.state.newTask),
      newTask:"" 
    })

  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task) =>
            <li key={task}>{task}</li> )}
          </ul>
           <form onSubmit={this.startSubmit}>
             <input type="text" id="new-task" value={this.state.newTask} onChange={this.addNewTask} placeholder="Ingresa una tarea y oprime Enter" />
             
           </form>
        </div>
      </div>
    )
  }
}


export default App;
