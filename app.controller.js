"use strict";


function ToDoList() {  
  const todoController = this;
  
  todoController.toDoItems = [
    {
    name: 'Walk the dog.',
    completed: false,
    closed: false,
    },
    {
    name: 'Go to the store.',
    completed: true,
    closed: false,
    },
    {
    name: 'Get gas.',
    completed: false,
    closed: false,
    },
    {
    name: 'Wash the car.',
    completed: false,
    closed: false,
    }
  ]
  
  // Cross item out when complete button cliked
  todoController.completeTask = function(completed) {
    console.log(`Cross out item when complete button clicked.`);
    return completed = true;
  }

  // Remove item when x button clicked
  todoController.removeTask = function(closed) {
    console.log(`Remove item when x button clicked.`);
    return closed = true;
  }

  // Add new input item when add button clicked
  todoController.add = function(addTask) {
    todoController.toDoItems.push({name: addTask, completed: false, closed: false});
    console.log(`Add new input item when add button clicked.`);
  }
};

angular
  .module("todoApp")
  .controller("ToDoList", ToDoList);