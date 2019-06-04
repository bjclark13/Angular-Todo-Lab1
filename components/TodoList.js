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
    todoController.completeTask = function(item) {
        console.log('completed');
        let index = todoController.getItemIndex(item);
console.log(index);
        todoController.toDoItems[index].completed = true;
    }

    todoController.getItemIndex = function(item) {
        for (let index = 0; index < todoController.toDoItems.length; index++) {
            const element = todoController.toDoItems[index];
            console.log(element,item);
            if ( element.name === item.name )
                return index;
        }
        
    }
  
    // Remove item when x button clicked
    todoController.removeTask = function(item) {
        let index = todoController.getItemIndex(item);

        todoController.toDoItems.splice(index,1);
    }
  
    // Add new input item when add button clicked
    todoController.add = function(addTask) {
      todoController.toDoItems.push({name: addTask, completed: false, closed: false});
      console.log(`Add new input item when add button clicked.`);
    }
  };

  angular.module('todoApp')
  .component('todoList', {
      controller: ToDoList,
      template: `
      <input type="text" ng-model="filter" placeholder="Filter your to-dos" />

      <ol>
        <todo-item 
            ng-repeat="item in $ctrl.toDoItems | filter: filter"
            item="item"
            complete-task="$ctrl.completeTask(item)" 
            remove-task="$ctrl.removeTask(item)"
        >
        </todo-item>      
      </ol>

      <input id="input" type="text" ng-model="addTask" placeholder="Add your todo" />
      <button type="submit" class="btnAdd" ng-click="$ctrl.add(addTask)">Add</button>  
      `
  })