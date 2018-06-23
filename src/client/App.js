import React, { Component } from 'react';

// import Task from './components/Task/Task';
// import TaskForm from './components/Task/TaskForm';
// import TaskController from '../server/controllers/task';

class App extends Component {
  // constructor() {
  //   super();
  //
  //   this.handleAllTasks = this.handleAllTasks.bind(this);
  //   this.handleAddTask = this.handleAddTask.bind(this);
  //   this.handleDeleteTask = this.handleDeleteTask.bind(this);
  //
  //   this.state = {
  //     tasks: []
  //   };
  //
  //   this.handleAllTasks();
  //
  // }
  //
  // handleAllTasks() {
  //   TaskController.allTasks(this);
  // }
  //
  // handleAddTask (task) {
  //   TaskController.addTask(this, task);
  // }
  //
  // handleDeleteTask (index, _id) {
  //   if (window.confirm('Do you want to remove the task?')) {
  //     TaskController.deleteTask(index, _id, this);
  //   }
  // }

  render() {
    return (
      <div>
        <div className="App">

          <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
              Tasks
              <span className="badge badge-pill badge-light ml-2">
                {/* {this.state.tasks.length} */}
              </span>
            </a>
          </nav>

          <div className="row">
            <div className="col-md-4 mt-5">
              {/* <TaskForm onAddTask={this.handleAddTask} /> */}
            </div>
            <div className="col-md-8 text-center">
              <div className="row mt-4">
                {/* <Task tasks={this.state.tasks} onDeleteTask={this.handleDeleteTask}/> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
