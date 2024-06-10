const newTask = document.getElementById("new-task");
const taskList = document.getElementById("task-list");
function addTask(){
    if(newTask.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = newTask.value; 
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    newTask.value = "";
    saveData();
}
taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();