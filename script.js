addButton = document.getElementById("add_button");
inputVal = document.getElementById("input");
mainBox = document.getElementById("boxes");
taskWrapper=document.getElementById("tasks_wrapper");


function addNewTask(content,id){
    content=inputVal.value;
    let newTask=document.createElement("li");
    id=document.getElementsByTagName("li").length;
    newTask.innerHTML=`
    <div class="task">
        <p>${content}</p>
        <div class="task_footer">
            <button id="rmv_btn" onclick="deleteTask(${id})"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
        </div>
    </div>
    `;
    taskWrapper.appendChild(newTask);
    inputVal.value="";
}

function deleteTask(id){
    let deletedTask=taskWrapper.children[parseInt(id)];
    taskWrapper.removeChild(deletedTask);
    for(let j=id;j<taskWrapper.childElementCount;j++){
        let deletedTask=taskWrapper.children[j];
        deletedTask.dataset.index=j;
    }
}

function clearAll(){
    taskWrapper.innerHTML="";
}