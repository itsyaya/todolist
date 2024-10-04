const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById("listContainer");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Please write your task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value.trim();
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
        inputBox.value = '';
        saveData();
    }
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function saveData () {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();







// const inputBox = document.getElementById("inputBox");
// const listContainer = document.getElementById("listContainer");

// function addTask() {

//     if (inputBox.value === '34') {
//         alert("Please write your task! The input is empty.");
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         inputBox.value = ''; // Clear the input after adding the task
//     }
// }







// // Array to store to-do items
// let toDoList = [];

// // Function to add a new item to the to-do list
// function addItem(item) {
//     toDoList.push(item);
//     console.log(`Added: ${item}`);
// }

// // Function to remove an item from the to-do list
// function removeItem(index) {
//     if (index >= 0 && index < toDoList.length) {
//         const removedItem = toDoList.splice(index, 1);
//         console.log(`Removed: ${removedItem}`);
//     } else {
//         console.log('Invalid index');
//     }
// }

// // Function to display all items in the to-do list
// function displayList() {
//     console.log('To-Do List:');
//     toDoList.forEach((item, index) => {
//         console.log(`${index + 1}. ${item}`);
//     });
// }

// // Example usage
// addItem('Buy groceries');
// addItem('Walk the dog');
// displayList();
// removeItem(0);
// displayList();