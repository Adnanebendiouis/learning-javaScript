const submit = document.getElementById("submit");
const display = document.getElementById("display");
const textBox = document.getElementById("input");

function add() {
    const task = textBox.value;  
   
    if (task.trim() !== "") {  
        const listItem = document.createElement("ul");  
        listItem.textContent = task;  
        
        const listItemBox = document.createElement("div");
        listItemBox.className = "task-box"; 
        
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-btn";
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        
        listItemBox.appendChild(listItem);
        listItemBox.appendChild(editButton);
        listItemBox.appendChild(deleteButton);
        
        display.appendChild(listItemBox); 
        
        textBox.value = "";  
    } else {
        alert("Please enter a task!");  
    }
}
