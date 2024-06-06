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
        span.appendChild(span);
    }
    newTask.value = "";
}
taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.parentElement.remove();
    }
},false);
function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();