const addinput = document.getElementById('addinput');
const taskList = document.getElementById('taskList');

function addTask(){
    const taskText = addinput.value.trim();
    if(taskText!==''){
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        addinput.value='';
    }
}