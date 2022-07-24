//Define UI variables
const form = document.querySelector('#task-form');
const taskList= document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

function loadEventListeners(){
    //Add task 
    form.addEventListener('submit', addTask);
    // Remove task
    taskList.addEventListener('click', removeTask);
    // CLear task list
    clearBtn.addEventListener('click', clearTask);
    // Filter tasks events
    filter.addEventListener('keyup', filterTasks);
}

function addTask(e){
    if (taskInput.value === ''){
        alert('Add a task');
    }

    //Create li element
    const li = document.createElement('li');

    li.className='collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className='delete-item secondary-content';
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li)

    taskInput.value='';
    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove()
        }
    }
}

function clearTask(){
    taskList.innerHTML='';
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

}