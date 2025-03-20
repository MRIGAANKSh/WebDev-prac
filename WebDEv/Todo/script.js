document.addEventListener('DOMContentLoaded',()=>{
    let input=document.getElementById("todo-input");
let btn=document.getElementById("add-todo");
let ul=document.getElementById("todo-list")
let tasks=JSON.parse(localStorage.getItem('tasks')) ||[];

tasks.forEach(task=>rendertask(task));

btn.addEventListener("click",()=>{
    const tasktext=input.value.trim();
    if(tasktext==="") return;
    const newtask={
        id: Date.now(),
        text:tasktext,
        completed:false
    }
    
    tasks.push(newtask);
    savetask();
    console.log(tasks);
})


function savetask(){
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function rendertask(task){
    const li=document.createElement('li')
    li.setAttribute('data-id',task.id);
    
    li.innerHTML=`<span>${task.text}</span>
    <button class="bg-red-100">Delete</button>`;

    li.addEventListener('click',(e)=>{
        if(e.target.tagName==='BUTTON') return ;
        task.completed=!task.completed;
    })
    li.querySelector('button').addEventListener('click',(e)=>{
        ul.removeChild(li)
    })
    console.log(li)
    ul.appendChild(li);
}
})