var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');

function createNewTaskElement(taskString) {

  var listItem = document.createElement('li');

  var checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  var label = document.createElement('label');
  label.innerText = taskString;

  var editInput = document.createElement('input');
  editInput.type = 'text';

  var editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.className = 'edit';

  var deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.className = 'delete';

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

function addTask() {
  console.log('Add Task...');

  listItem = createNewTaskElement(taskInput.value);

  if (taskInput.value === '') {
    return alert("Task can't be blank");
  }

  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value = '';
}

function ajaxRequest() {
  console.log('AJAX Request');
}

function editTasks() {
  console.log('Edit Task...');

  var listItem = this.parentNode;
  var editInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector('label');
  var containsClass = listItem.classList.contains('editMode')

  if (containsClass) {
    label.innerText = editInput.value;
    listItem.getElementsByTagName('button')[0].innerText = 'edit';
  } else {
    label.innerText = label.value;
    listItem.getElementsByTagName('button')[0].innerText = 'save';
  }

  listItem.classList.toggle('editMode');
}

function deleteTask() {
  console.log('Delete Task...');

  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);
}

function taskCompleted() {
  console.log('Task complete...');

  var listItem = this.parentNode;

  completedTasksHolder.appendChild(listItem);

  bindTaskEvents(listItem, taskIncomplete)
}

function taskIncomplete() {
  console.log('Task incomplete...');

  var listItem = this.parentNode;

  incompleteTasksHolder.appendChild(listItem);

  bindTaskEvents(listItem, taskCompleted)
}

function bindTaskEvents(taskListItem, checkBoxEventHandler) {
  console.log('Bind list item events...');

  var checkBox = taskListItem.querySelector('input[type=checkbox]');
  var editButton = taskListItem.querySelector('button.edit');
  var deleteButton = taskListItem.querySelector('button.delete');

  editButton.onclick = editTasks;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
}

for (var i = 0; i < incompleteTasksHolder.children.length; i ++) {
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for (var i = 0; i < completedTasksHolder.children.length; i ++) {
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

addButton.addEventListener('click', addTask);
addButton.addEventListener('click', ajaxRequest);
