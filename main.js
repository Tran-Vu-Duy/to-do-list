const addinput = document.getElementById('addinput');
const taskList = document.getElementById('taskList');

function addTask(){
    const taskText = addinput.value.trim();
    if(taskText!==''){
        const wraper = document.createElement('div');
        wraper.classList.add("wraper");
        const items = document.createElement('li');
        items.classList.add("items");
        items.textContent = taskText;
        taskList.appendChild(items);
        addinput.value='';

        items.addEventListener('click',completeTask);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("deletebtn");
        deleteBtn.textContent = "DELETE";
        deleteBtn.addEventListener('click',deleteTask);
        wraper.appendChild(items);
        wraper.appendChild(deleteBtn);
        taskList.appendChild(wraper);
        saveTask();

    }
}
loadTaskToStorage(); 

function completeTask(event){
    const task  = event.target;
    task.classList.toggle('completed');
}


function deleteTask(event){
    const task = event.target.parentElement;
    taskList.removeChild(task);
}

function saveTask(){
    const tasks= [];
    const taskItems = taskList.getElementsByTagName('li');
    for(let i =0 ; i< taskItems.length ; i++){
        tasks.push(taskItems[i].textContent);
    }
}