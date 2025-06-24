

const AddBtn = document.getElementById("task-add-btn");
const ul = document.querySelector(".task-list");
const userInput = document.getElementById("input-task");
const toastMessage = document.querySelector(".toast-complated");
const toastMessagedelete = document.querySelector(".toast-deleted");
const toastMessageAdded = document.querySelector(".toast-task-added");
const addTaskUser =document.querySelector(".toast-message-addtask");
const mode = document.querySelector(".mode")
console.log(toastMessagedelete);
console.log(toastMessage);
console.log(AddBtn);
console.log(ul);
console.log(userInput);

AddBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  let input = document.createElement("input");
  let deleteBtn = document.createElement("button");
  let userInputValue = userInput.value.trim();
  let textNode = document.createTextNode(userInputValue);
  input.type = "checkbox";
  deleteBtn.innerHTML = "Delete";


 if (userInputValue === '') {
  addTaskUser.classList.add("active");
  setTimeout(() => {
    addTaskUser.classList.remove("active");
  }, 3000);
  return; 
} else {
  toastMessageAdded.classList.add("active");
  setTimeout(() => {
    toastMessageAdded.classList.remove("active");
  }, 3000);
}


  input.addEventListener("change", () => {
    if (input.checked) {
      setTimeout(() => {
        toastMessage.classList.toggle("active");
      }, 1000);
      setTimeout(() => {
        toastMessage.classList.remove("active");
      }, 3000);

      ul.removeChild(li);
    }
  });

  deleteBtn.addEventListener("click", () => {
    setTimeout(() => {
      toastMessagedelete.classList.toggle("active");
    }, 1000);
    setTimeout(() => {
      toastMessagedelete.classList.remove("active");
    }, 3000);
    ul.removeChild(li);
  });

  li.appendChild(input);
  li.appendChild(textNode);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  userInput.value=''
});
mode.addEventListener("click", () => {
  document.documentElement.classList.toggle("active");
  if(document.documentElement.classList.contains('active')){
    mode.innerHTML=`      <i class="fa-solid fa-toggle-on"></i>`
  }else{
    mode.innerHTML=`<i class="fa-solid fa-toggle-off"></i>`
  }
});
document.addEventListener("DOMContentLoaded", () => {
  toastMessage.classList.remove("active");
  toastMessagedelete.classList.remove("active");
  toastMessageAdded.classList.remove("active");
  addTaskUser.classList.remove("active");
});
