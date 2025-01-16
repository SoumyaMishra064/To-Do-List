const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

// ui ka acces js se ho

function addTask(){
    if(inputBox.value === ''){
        alert("enter some data");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    inputBox.value =" ";   // automatically remove the text from imput

    saveTask();   // call the function 
}

// Handle task completion and delection
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");     // task complete hone par text line-through ho rha h
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();     // remove the task once it completed
        saveTask();
    }
});

// save tasks to localStorage
function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();