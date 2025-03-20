let input=document.getElementById("todo-input");
let btn=document.getElementById("add-todo");

btn.addEventListener("click",function(){
    let textc=input.value;
    let newul=document.createElement("ul");
    newul.textContent=textc;
    let ul=document.getElementById("todo-list");
    let todoContainer=document.getElementById("todo-container");
    todoContainer.style.height="100px";
    ul.appendChild(newul);
    input.value="";
})
